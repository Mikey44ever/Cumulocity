package com.corusconsulting.template.repo;

import javax.persistence.*;

@Entity
public class MissionHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Integer missionId;

    @Column
    private String towTruckPlateNo;
    @Column
    private String missionDate;
    @Column
    private String missionStatus;
    @Column
    private String missionComment;
    @Column
    private String insuredName;
    @Column
    private String clientName;// insured and client may differ
    @Column
    private String policyNumber;
    @Column
    private String distanceTravelled;

    public Integer getMissionId() {
        return missionId;
    }

    public void setMissionId(Integer missionId) {
        this.missionId = missionId;
    }

    public String getTowTruckPlateNo() {
        return towTruckPlateNo;
    }

    public void setTowTruckPlateNo(String towTruckPlateNo) {
        this.towTruckPlateNo = towTruckPlateNo;
    }

    public String getMissionDate() {
        return missionDate;
    }

    public void setMissionDate(String missionDate) {
        this.missionDate = missionDate;
    }

    public String getMissionStatus() {
        return missionStatus;
    }

    public void setMissionStatus(String missionStatus) {
        this.missionStatus = missionStatus;
    }

    public String getMissionComment() {
        return missionComment;
    }

    public void setMissionComment(String missionComment) {
        this.missionComment = missionComment;
    }

    public String getInsuredName() {
        return insuredName;
    }

    public void setInsuredName(String insuredName) {
        this.insuredName = insuredName;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getPolicyNumber() {
        return policyNumber;
    }

    public void setPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
    }

    public String getDistanceTravelled() {
        return distanceTravelled;
    }

    public void setDistanceTravelled(String distanceTravelled) {
        this.distanceTravelled = distanceTravelled;
    }
}
