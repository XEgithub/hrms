package com.store.order.services;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.common.services.OrderNumberGenerator;
import com.jfinal.aop.Before;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.plugin.activerecord.tx.Tx;
import com.utils.UserSessionUtil;
import easy.util.DateTool;
import easy.util.UUIDTool;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ReturnGoodsService {

    private OrderNumberGenerator orderNumberGenerator = new OrderNumberGenerator();

    @Before(Tx.class)
    public void addOrder(List<Record> saveList, UserSessionUtil usu, String returnTime){
        Record returnOrder = new Record();
        String orderId = UUIDTool.getUUID();
        String time = DateTool.GetDateTime();
        returnOrder.set("id", orderId);
        returnOrder.set("store_id", usu.getUserBean().get("store_id"));
        returnOrder.set("order_number", createOrderNumber());
        returnOrder.set("status", 1);
        returnOrder.set("city", usu.getUserBean().get("city"));
        returnOrder.set("return_time", returnTime);
        returnOrder.set("create_time", time);
        returnOrder.set("creater_id", usu.getUserId());
        returnOrder.set("modify_time", time);
        returnOrder.set("modifier_id", usu.getUserId());
        Db.save("return_order", returnOrder);
        for(Record r : saveList){
            r.set("return_order_id", orderId);
            r.set("store_id", usu.getUserBean().get("store_id"));
        }
        Db.batchSave("return_order_material", saveList, saveList.size());
    }

    @Before(Tx.class)
    public void updateOrder(List<Record> saveList, List<Record> updateList, String orderId, UserSessionUtil usu){
        Record returnOrder = Db.findById("return_order", orderId);
        String time = DateTool.GetDateTime();
        returnOrder.set("modify_time", time);
        returnOrder.set("modifier_id", usu.getUserId());
        Db.update("return_order", returnOrder);
        if(saveList != null && saveList.size() > 0){
            for(Record r : saveList){
                r.set("return_order_id", orderId);
                r.set("store_id", usu.getUserBean().get("store_id"));
            }
            Db.batchSave("return_order_material", saveList, saveList.size());
        }
        for(Record r : updateList){
            Db.update("return_order_material", r);
        }
    }

    @Before(Tx.class)
    public void doReturn(JSONObject jsonObject) throws Exception{
        String returnOrderId = jsonObject.getString("id");
        JSONArray jsonArray = jsonObject.getJSONArray("list");
        List<Record> returnOrderMaterialList = Db.find("select * from return_order_material where return_order_id=?", returnOrderId);
        Map<String, Record> returnOrderMaterialMap = new HashMap<>();
        if(returnOrderMaterialList != null && returnOrderMaterialList.size() > 0){
            for(Record r : returnOrderMaterialList){
                returnOrderMaterialMap.put(r.getStr("material_id"), r);
            }
        }
        List<Record> romUpdateList = new ArrayList<>();
        if(jsonArray != null && jsonArray.size() > 0){
            for(int i = 0; i < jsonArray.size(); i++){
                JSONObject obj = jsonArray.getJSONObject(i);
                String materialId = obj.getString("material_id");
                String batchCode = obj.getString("batch_code_text");
                Record rom = returnOrderMaterialMap.get(materialId);
                rom.set("receive_num", rom.getDouble("return_num"));
                rom.set("batch_code", batchCode);
                romUpdateList.add(rom);
            }
        }
        if(romUpdateList != null && romUpdateList.size() > 0){
            for(Record r : romUpdateList){
                Db.update("return_order_material", r);
            }
        }
        Record r = new Record();
        r.set("id", returnOrderId);
        r.set("status", 2);
        Db.update("return_order", r);
    }

    @Before(Tx.class)
    public void doReturn_bak(Record order, UserSessionUtil usu) throws Exception{
        Db.update("return_order", order);
        List<Record> returnOrderMaterialList = Db.find("select * from return_order_material where return_order_id=?", order.getStr("id"));
        List<Record> storeStockList = Db.find("select * from store_stock where store_id=?", usu.getUserBean().get("store_id"));
        Map<String, Record> storeStockMap = new HashMap<>();
        if(storeStockList != null && storeStockList.size() > 0){
            for(Record r : storeStockList){
                storeStockMap.put(r.getStr("material_id"), r);
            }
        }
        List<Record> updateList = new ArrayList<>();
        List<Record> storeStocktakingList = new ArrayList<>();
        if(returnOrderMaterialList != null && returnOrderMaterialList.size() > 0){
            for(Record r : returnOrderMaterialList){
                Record update = storeStockMap.get(r.getStr("material_id"));
                int number = update.getInt("number") - r.getInt("return_num");
                if(number < 0){
                    throw new Exception("退货数量大于库存量！");
                }
                Record storeStocktaking = new Record();
                storeStocktaking.setColumns(update);
                storeStocktaking.set("old_number", update.getStr("number"));
                storeStocktaking.set("number", number);
                storeStocktaking.set("id", UUIDTool.getUUID());
                update.set("number", number);
                updateList.add(update);
                storeStocktakingList.add(storeStocktaking);
            }
        }else{
            throw new Exception("退货数量大于库存量！");
        }
        if(storeStocktakingList != null && storeStocktakingList.size() > 0){
            //Db.batchSave("store_stocktaking", storeStocktakingList, storeStocktakingList.size());
        }
        if(updateList != null && updateList.size() > 0){
            for(Record r : updateList){
                Db.update("store_stock", r);
            }
        }
    }

    @Before(Tx.class)
    public void finishOrder(JSONObject jsonObject){
        String returnOrderId = jsonObject.getString("id");
        JSONArray jsonArray = jsonObject.getJSONArray("list");
        List<Record> returnOrderMaterialList = Db.find("select * from return_order_material where return_order_id=?", returnOrderId);
        Map<String, Record> returnOrderMaterialMap = new HashMap<>();
        if(returnOrderMaterialList != null && returnOrderMaterialList.size() > 0){
            for(Record r : returnOrderMaterialList){
                returnOrderMaterialMap.put(r.getStr("material_id"), r);
            }
        }
        List<Record> wsUpdateList = new ArrayList<>();
        if(jsonArray != null && jsonArray.size() > 0){
            for(int i = 0; i < jsonArray.size(); i++){
                JSONObject obj = jsonArray.getJSONObject(i);
                String materialId = obj.getString("material_id");
                String batchCode = obj.getString("batch_code_text");
                Record rom = returnOrderMaterialMap.get(materialId);
                Record ws = Db.findFirst("select * from warehouse_stock where batch_code=? and material_id=?", batchCode, materialId);
                double number = ws.getDouble("number") + rom.getDouble("return_num");
                ws.set("number", number);
                rom.set("receive_num", rom.getDouble("return_num"));
                rom.set("batch_code", batchCode);
                wsUpdateList.add(ws);
            }
        }
        if(wsUpdateList != null && wsUpdateList.size() > 0){
            for(Record r : wsUpdateList){
                Db.update("warehouse_stock", r);
            }
        }
        Record r = new Record();
        r.set("id", returnOrderId);
        r.set("status", 3);
        Db.update("return_order", r);
    }

    /**
     * 生成订单编号的方法，暂时没有确定规律，以后统一按照规律生成
     * @return
     */
    private String createOrderNumber(){
        return orderNumberGenerator.getReturnOrderNumber();
    }

}