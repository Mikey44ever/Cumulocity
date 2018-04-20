package com.corusconsulting.template.service;

import com.corusconsulting.template.repo.Device;
import com.corusconsulting.template.repo.TowTrucks;

import java.util.List;

public interface DeviceService {

    String getDeviceStatus(List<TowTrucks> towTrucks)throws Exception;
    Device getDevice(String deviceId)throws Exception;
}
