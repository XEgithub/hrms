package com.store.order.controllers;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;
import com.ss.controllers.BaseCtrl;
import com.ss.stock.services.DailySummaryService;
import com.store.order.services.StoreOrderManagerSrv;
import com.utils.RequestTool;
import com.utils.UserSessionUtil;
import easy.util.DateTool;
import easy.util.UUIDTool;
import utils.bean.JsonHashMap;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 门店订单管理
 */
public class StoreOrderManagerCtrl extends BaseCtrl{

    /**
     * 商品转原材料
     */
    public void goodsToMaterial(){
        JsonHashMap jhm=new JsonHashMap();
        String uuid= UUIDTool.getUUID();
        UserSessionUtil usu=new UserSessionUtil(getRequest());
        String datetime= DateTool.GetDateTime();
        try {

            JSONObject jsonObject = RequestTool.getJson(getRequest());

            String arriveDate=jsonObject.getString("arriveDate");
            String wantDate=jsonObject.getString("wantDate");

            Map paraMap=new HashMap();
            paraMap.put("jsonObject",jsonObject);

            StoreOrderManagerSrv service = enhance(StoreOrderManagerSrv.class);
            String storeOrderUUID= UUIDTool.getUUID();
            Map resultMap=service.goodsToMaterial(paraMap, storeOrderUUID);
            List list=(List)resultMap.get("list");

            JSONArray jsonArr = jsonObject.getJSONArray("list");
            String[] idArr = {};
            String[] numberArr = {};
            if(jsonArr != null && jsonArr.size() > 0){
                idArr = new String[jsonArr.size()];
                numberArr = new String[jsonArr.size()];
                for(int i = 0; i < jsonArr.size(); i++){
                    JSONObject obj = jsonArr.getJSONObject(i);
                    idArr[i] = obj.getString("id");
                    numberArr[i] = obj.getString("number");
                }
            }
            getSession().setAttribute("ids", idArr);
            getSession().setAttribute("numbers", numberArr);
            getSession().setAttribute("storeOrderUUID", storeOrderUUID);

            jhm.putCode(1).put("arriveDate",arriveDate).put("wantDate",wantDate).put("list",list);
        }catch (Exception e){
            e.printStackTrace();
            jhm.putCode(-1).putMessage(e.toString());
        }
        renderJson(jhm);
    }
    public void goodsToMaterials(){
        UserSessionUtil usu=new UserSessionUtil(getRequest());
        String datetime= DateTool.GetDateTime();
        JSONObject json= RequestTool.getJson(getRequest());

        JSONArray jsonArr = json.getJSONArray("list");
        String[] idArr = {};
        String[] numberArr = {};
        if(jsonArr != null && jsonArr.size() > 0){
            idArr = new String[jsonArr.size()];
            numberArr = new String[jsonArr.size()];
            for(int i = 0; i < jsonArr.size(); i++){
                JSONObject obj = jsonArr.getJSONObject(i);
                idArr[i] = obj.getString("id");
                numberArr[i] = obj.getString("number");
            }
        }

        String store_id = (String) usu.getUserBean().get("store_id");
        String arrive_date = json.getString("arrive_date");
        String want_date = json.getString("want_date");
        String order_number = "0000";
        String status = "1";
        String orderId = UUIDTool.getUUID();

        Record stroeOrder = new Record();
        stroeOrder.set("id", orderId);
        stroeOrder.set("stroe_id", store_id);
        stroeOrder.set("order_number", order_number);
        stroeOrder.set("arrive_date", arrive_date);
        stroeOrder.set("want_date", want_date);
        stroeOrder.set("creater_id", usu.getUserId());
        stroeOrder.set("create_time", datetime);
        stroeOrder.set("status", status);
        Db.save("store_order", stroeOrder);

        List<Record> goodsList = Db.find("select * from goods");
        Map<String, Record> goodsMap = new HashMap<>();
        for(Record r : goodsList){
            goodsMap.put(r.getStr("id"), r);
        }

        DailySummaryService dailySummaryService = DailySummaryService.getMe();
        Map<String, Record> materialMap = new HashMap<>();

        List<Record> storeOrderGoodsList = new ArrayList<>();
        for(int i = 0; i < idArr.length; i++){
            String goodsId = idArr[i];
            Record goods = goodsMap.get(goodsId);
            int number = new Integer(numberArr[i]);
            Record sog = new Record();
            sog.set("id", UUIDTool.getUUID());
            sog.set("store_order_id", orderId);
            sog.set("store_id", store_id);
            sog.set("goods_id", goodsId);
            sog.set("code", goods.getStr("code"));
            sog.set("name", goods.getStr("name"));
            sog.set("pinyin", goods.getStr("pinyin"));
            sog.set("price", goods.getStr("price"));
            sog.set("wm_type", goods.getStr("wm_type"));
            sog.set("attribute_1", goods.getStr("attribute_1"));
            sog.set("attribute_2", goods.getStr("attribute_2"));
            sog.set("unit", goods.getStr("unit"));
            sog.set("sort", i);
            sog.set("type_1", goods.getStr("type_1"));
            sog.set("type_2", goods.getStr("type_2"));
            sog.set("number", number);
            storeOrderGoodsList.add(sog);

            List<Record> goodsMaterialList = (List<Record>) dailySummaryService.dataMap.get(goodsId).get("materialList");
            for(Record r : goodsMaterialList){
                Record materialR = materialMap.get(r.getStr("id"));
                if(materialR != null){
                    //TODO 暂时用r净料数量计算
                    materialR.set("number", materialR.getDouble("number") + (int)r.get("gmnet_num") * number);
                }else{
                    materialR = new Record();
                    materialMap.put(r.getStr("id"), materialR);

                    materialR.set("id", r.getStr("mid"));
                    materialR.set("name", r.getStr("mname"));
                    materialR.set("code", r.getStr("mcode"));
                    materialR.set("unit_text", r.getStr("munit"));
                    materialR.set("number", (int)r.get("gmnet_num") * number);

                }
            }

        }
        Db.batchSave("store_order_goods", storeOrderGoodsList, storeOrderGoodsList.size());

        JsonHashMap jhm=new JsonHashMap();
        jhm.putCode(1).put("materialList",materialMap.values());
        renderJson(jhm);

    }
}
