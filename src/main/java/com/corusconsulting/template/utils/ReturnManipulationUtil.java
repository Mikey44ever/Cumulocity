package com.corusconsulting.template.utils;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.apache.commons.codec.binary.Hex;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import sun.misc.BASE64Encoder;

import java.nio.charset.Charset;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.List;
@Component
public class ReturnManipulationUtil {

    public String convertReturnValueToJSON(Object obj,boolean isList){
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.serializeNulls();
        Gson gson = gsonBuilder.create();
        if(!isList){
            List list = new ArrayList();
            list.add(obj);
            return gson.toJson(list);
        }
        return gson.toJson(obj);
    }

    public String convertToJSON(Object obj){
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.serializeNulls();
        Gson gson = gsonBuilder.create();
        return gson.toJson(obj);
    }

    public String encryptString(String string)throws Exception{
        MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(string.getBytes(Charset.forName("UTF8")));
        byte[] array = md.digest();
        final String result = new String(Hex.encodeHex(array));
        return result;
    }

    public String decryptString(String string)throws Exception{
        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] raw = null;
        byte[] stringBytes = null;
        stringBytes = string.getBytes("UTF8");
        synchronized(md) {
            raw = md.digest(stringBytes);
        }
        BASE64Encoder encoder = new BASE64Encoder();
        return encoder.encode(raw);
    }
}
