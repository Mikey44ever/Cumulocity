package com.corusconsulting.template.dao;

import com.corusconsulting.template.repo.Device;
import com.corusconsulting.template.repo.TowTrucks;

import java.util.List;

public interface DeviceDAO {

    String getDeviceStatus(List<TowTrucks> towTrucks)throws Exception;
    Device getDevice(String deviceId)throws Exception;
}
