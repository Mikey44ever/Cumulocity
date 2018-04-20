package com.corusconsulting.template.repo;

import javax.persistence.*;

@Entity
public class TowingCompanies {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Integer companyId;
    @Column
    private String companyName;
    @Column
    private String address;
    @Column
    private Integer numberOfTrucks;

    public Integer getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getNumberOfTrucks() {
        return numberOfTrucks;
    }

    public void setNumberOfTrucks(Integer numberOfTrucks) {
        this.numberOfTrucks = numberOfTrucks;
    }
}
