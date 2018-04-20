package com.corusconsulting.template.repo;

public class TrucksDevice {

    private TowTrucks towTrucks;

    public TrucksDevice(TowTrucks towTrucks,Device device){
        this.towTrucks = towTrucks;
    }

    public TowTrucks getTowTrucks() {
        return towTrucks;
    }
}
