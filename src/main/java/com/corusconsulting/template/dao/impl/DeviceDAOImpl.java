package com.corusconsulting.template.dao.impl;

import c8y.Availability;
import c8y.Position;
import com.corusconsulting.template.dao.DeviceDAO;
import com.corusconsulting.template.dto.ReturnedObject;
import com.corusconsulting.template.repo.Device;
import com.corusconsulting.template.repo.TowTrucks;
import com.corusconsulting.template.utils.ReturnManipulationUtil;
import com.cumulocity.model.authentication.CumulocityCredentials;
import com.cumulocity.model.idtype.GId;
import com.cumulocity.rest.representation.inventory.ManagedObjectRepresentation;
import com.cumulocity.sdk.client.Platform;
import com.cumulocity.sdk.client.PlatformImpl;
import com.cumulocity.sdk.client.inventory.InventoryApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public class DeviceDAOImpl implements DeviceDAO {

    @Value("${cumulocity.host}")
    private String cumulocityHost;
    @Value("${cumulocity.username}")
    private String user;
    @Value("${cumulocity.password}")
    private String pword;

    @Autowired
    private ReturnedObject ro;
    @Autowired
    private ReturnManipulationUtil rmu;
    private String returnValue;

    @Override
    public Device getDevice(String deviceId) throws Exception {
        Device device = new Device();
        Platform platform = new PlatformImpl(cumulocityHost, new CumulocityCredentials(user, pword));
        InventoryApi inventory = platform.getInventoryApi();

        GId gId = new GId();
        gId.setValue(deviceId);
        ManagedObjectRepresentation mor =inventory.getManagedObject(gId).get();
        HashMap attrs = (HashMap)mor.getAttrs();
        Position position = (Position)attrs.get("c8y_Position");
        device.setLat(position.getLat().toString());
        device.setLng(position.getLng().toString());
        device.setDeviceId(new Integer(deviceId));

        return device;
    }

    @Override
    public String getDeviceStatus(List<TowTrucks> towTrucks) throws Exception {
        Platform platform = new PlatformImpl(cumulocityHost, new CumulocityCredentials(user, pword));
        InventoryApi inventory = platform.getInventoryApi();

        towTrucks.forEach(towTruck -> {
            Device device = towTruck.getDevice();
            String deviceId = device.getSystemId();
            GId gId = new GId();
            try{
                gId.setValue(deviceId);
                ManagedObjectRepresentation mor =inventory.getManagedObject(gId).get();
                HashMap attrs = (HashMap)mor.getAttrs();
                Position position = (Position)attrs.get("c8y_Position");
                Availability availability = (Availability)attrs.get("c8y_Availability");
                towTruck.setLat(position.getLat().toString());
                towTruck.setLng(position.getLng().toString());
                towTruck.setAvailability(availability.getStatus().toString());
                System.out.print(towTruck);
            }catch (com.cumulocity.sdk.client.SDKException e){
                e.printStackTrace();
            }
        });

        returnValue = rmu.convertReturnValueToJSON(towTrucks,true);
        ro.setReturnedObject(returnValue);
        ro.setReturnedObjectCount(1);
        ro.setStatus("SUCCESS");
        ro.setStatusMsg("SUCCESS");
        returnValue = rmu.convertReturnValueToJSON(ro,false);
        return returnValue;
    }
}
