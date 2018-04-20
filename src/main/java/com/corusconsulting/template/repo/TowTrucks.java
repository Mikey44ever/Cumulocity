package com.corusconsulting.template.repo;

import javax.persistence.*;

@Entity
public class TowTrucks {

    @OneToOne
    @JoinColumn(name = "truck_id")
    private Device device;

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer truckId;

    @Column
    private Integer companyId;
    @Column
    private String plateNumber;
    @Column
    private String truckStatus;
    @Column
    private String dispatchAssignmentRoute;
    @Column
    private String dispatchAssignmentInsured;
    @Column
    private String dispatchTime;
    @Column
    private String ETA;
    @Column
    private String dispatchStatus;
    @Column
    private String dispatchId;
    @Column
    private String lat;
    @Column
    private String lng;
    @Column
    private String availability;

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getLng() {
        return lng;
    }

    public void setLng(String lng) {
        this.lng = lng;
    }

    public Device getDevice() {
        return device;
    }

    public void setDevice(Device device) {
        this.device = device;
    }

    public String getDispatchId() {
        return dispatchId;
    }

    public void setDispatchId(String dispatchId) {
        this.dispatchId = dispatchId;
    }

    public Integer getTruckId() {
        return truckId;
    }

    public void setTruckId(Integer truckId) {
        this.truckId = truckId;
    }

    public Integer getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    public String getPlateNumber() {
        return plateNumber;
    }

    public void setPlateNumber(String plateNumber) {
        this.plateNumber = plateNumber;
    }

    public String getTruckStatus() {
        return truckStatus;
    }

    public void setTruckStatus(String truckStatus) {
        this.truckStatus = truckStatus;
    }

    public String getDispatchAssignmentRoute() {
        return dispatchAssignmentRoute;
    }

    public void setDispatchAssignmentRoute(String dispatchAssignmentRoute) {
        this.dispatchAssignmentRoute = dispatchAssignmentRoute;
    }

    public String getDispatchAssignmentInsured() {
        return dispatchAssignmentInsured;
    }

    public void setDispatchAssignmentInsured(String dispatchAssignmentInsured) {
        this.dispatchAssignmentInsured = dispatchAssignmentInsured;
    }

    public String getDispatchTime() {
        return dispatchTime;
    }

    public void setDispatchTime(String dispatchTime) {
        this.dispatchTime = dispatchTime;
    }

    public String getETA() {
        return ETA;
    }

    public void setETA(String ETA) {
        this.ETA = ETA;
    }

    public String getDispatchStatus() {
        return dispatchStatus;
    }

    public void setDispatchStatus(String dispatchStatus) {
        this.dispatchStatus = dispatchStatus;
    }
}
