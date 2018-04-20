package com.corusconsulting.template.dao;

import com.corusconsulting.template.repo.TowTrucks;

import java.util.List;

public interface TowTrucksDAO {

    String getAllTowTrucks()throws Exception;
    TowTrucks updateTowTrucksForDispatch(TowTrucks t)throws Exception;
    List<TowTrucks> getTowTruck(String param,Object value)throws Exception;
}
