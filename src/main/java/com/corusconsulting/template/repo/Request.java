package com.corusconsulting.template.repo;

import javax.persistence.*;

@Entity
public class Request {

    @TableGenerator(name = "request_id", table = "Request", pkColumnName = "request_id", valueColumnName = "request_id", pkColumnValue = "request id", initialValue = 100000001, allocationSize = 10000)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "request_id")
    @Column
    private Integer requestId;

    @Column
    private String status;
    @Column
    private String eta;
    @Column
    private String contactNumber;
    @Column
    private String timeRequested;
    @Column
    private String actualArrivalTime;
    @Column
    private String distanceToTravel;
    @Column
    private String contactName;
    @Column
    private String policyNumber;
    @Column
    private String assignedTowTruck;
    @Column
    private String towTruckInitialLocation;
    @Column
    private String towTruckTargetDestination;
    @Column
    private String plateNumber;
    @Column
    private String insuredLatLng;
    @Column
    private String truckLatLng;
    @Column
    private String remarks;

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getTruckLatLng() {
        return truckLatLng;
    }

    public void setTruckLatLng(String truckLatLng) {
        this.truckLatLng = truckLatLng;
    }

    public String getInsuredLatLng() {
        return insuredLatLng;
    }

    public void setInsuredLatLng(String insuredLatLng) {
        this.insuredLatLng = insuredLatLng;
    }

    public String getEta() {
        return eta;
    }

    public void setEta(String eta) {
        this.eta = eta;
    }

    public String getPlateNumber() {
        return plateNumber;
    }

    public void setPlateNumber(String plateNumber) {
        this.plateNumber = plateNumber;
    }

    public String getActualArrivalTime() {
        return actualArrivalTime;
    }

    public void setActualArrivalTime(String actualArrivalTime) {
        this.actualArrivalTime = actualArrivalTime;
    }

    public String getDistanceToTravel() {
        return distanceToTravel;
    }

    public void setDistanceToTravel(String distanceToTravel) {
        this.distanceToTravel = distanceToTravel;
    }

    public String getAssignedTowTruck() {
        return assignedTowTruck;
    }

    public void setAssignedTowTruck(String assignedTowTruck) {
        this.assignedTowTruck = assignedTowTruck;
    }

    public String getTowTruckInitialLocation() {
        return towTruckInitialLocation;
    }

    public void setTowTruckInitialLocation(String towTruckInitialLocation) {
        this.towTruckInitialLocation = towTruckInitialLocation;
    }

    public String getTowTruckTargetDestination() {
        return towTruckTargetDestination;
    }

    public void setTowTruckTargetDestination(String towTruckTargetDestination) {
        this.towTruckTargetDestination = towTruckTargetDestination;
    }

    public Integer getRequestId() {
        return requestId;
    }

    public void setRequestId(Integer requestId) {
        this.requestId = requestId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getTimeRequested() {
        return timeRequested;
    }

    public void setTimeRequested(String timeRequested) {
        this.timeRequested = timeRequested;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getPolicyNumber() {
        return policyNumber;
    }

    public void setPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
    }
}
