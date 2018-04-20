package com.corusconsulting.template.dto;

import org.springframework.stereotype.Component;

@Component
public class ReturnedObject {

    private String status;
    private String statusMsg;
    private int returnedObjectCount;
    private String returnedObject;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStatusMsg() {
        return statusMsg;
    }

    public void setStatusMsg(String statusMsg) {
        this.statusMsg = statusMsg;
    }

    public int getReturnedObjectCount() {
        return returnedObjectCount;
    }

    public void setReturnedObjectCount(int returnedObjectCount) {
        this.returnedObjectCount = returnedObjectCount;
    }

    public String getReturnedObject() {
        return returnedObject;
    }

    public void setReturnedObject(String returnedObject) {
        this.returnedObject = returnedObject;
    }
}
