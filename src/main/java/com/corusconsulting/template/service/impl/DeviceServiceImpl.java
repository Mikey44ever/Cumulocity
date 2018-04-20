package com.corusconsulting.template.service.impl;

import com.corusconsulting.template.dao.DeviceDAO;
import com.corusconsulting.template.repo.Device;
import com.corusconsulting.template.repo.TowTrucks;
import com.corusconsulting.template.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DeviceServiceImpl implements DeviceService {

    @Autowired
    private DeviceDAO deviceDAO;

    @Override
    public String getDeviceStatus(List<TowTrucks> towTrucks) throws Exception {
        return deviceDAO.getDeviceStatus(towTrucks);
    }

    @Override
    public Device getDevice(String deviceId) throws Exception {
        return deviceDAO.getDevice(deviceId);
    }
}
