package com.corusconsulting.template.service.impl;

import com.corusconsulting.template.dao.TowTrucksDAO;
import com.corusconsulting.template.service.TowTrucksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TowTrucksServiceImpl implements TowTrucksService {

    @Autowired
    private TowTrucksDAO towTrucksDAO;

    @Override
    public String getAllTowTrucks() throws Exception {
        return towTrucksDAO.getAllTowTrucks();
    }
}
