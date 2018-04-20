package com.corusconsulting.template.controller;

import com.corusconsulting.template.dto.ReturnedObject;
import com.corusconsulting.template.repo.*;
import com.corusconsulting.template.repo.crud.UserRepo;
import com.corusconsulting.template.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RequestMapping("/api")
@RestController
public class CorusController  {

    @Autowired
    private PolicyService policyService;
    @Autowired
    private RequestService requestService;
    @Autowired
    private TowTrucksService towTrucksService;
    @Autowired
    private DeviceService deviceService;
    @Autowired
    private UserService userService;
    @Autowired
    private ReturnedObject ro;
    @Autowired
    private UserRoleService userRoleService;

    private String finalReturn;

    @ResponseBody
    @RequestMapping(value = "/getAllCumulocityDevices", method = RequestMethod.POST)
    public String getAllCumulocityDevices(@RequestBody List<TowTrucks> towTrucks){
        try{
            finalReturn=deviceService.getDeviceStatus(towTrucks);
        }catch (Exception e){
            e.printStackTrace();
        }
        return finalReturn;
    }
    @ResponseBody
    @RequestMapping(value = "/getAllTowTrucks", method = RequestMethod.GET)
    public String getAllTowTrucks(){
        try{
            finalReturn = towTrucksService.getAllTowTrucks();
        }catch (Exception e){
            e.printStackTrace();
        }
        return finalReturn;
    }

    @ResponseBody
    @RequestMapping(value="/saveInsured",method = RequestMethod.PUT)
    public String saveInsured(@RequestBody Policy policy){
        try{
            policyService.saveInsured(policy);
            //TODO save also to mission history
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @ResponseBody
    @RequestMapping(value = "/checkDeviceLocation",method = RequestMethod.PUT)
    public Device checkDeviceLocation(@RequestBody String deviceId){
        Device dev = new Device();
        try{
            dev = deviceService.getDevice(deviceId.replaceAll("\"",""));
        }catch (Exception e){
            e.printStackTrace();
        }
        return dev;
    }

    @ResponseBody
    @RequestMapping(value="/saveRequest", method = RequestMethod.PUT)
    public String saveUpdateRequest(@RequestBody Request r){
        try{
            finalReturn = requestService.saveUpdateRequest(r);
        }catch (Exception e){
            e.printStackTrace();
        }
        return finalReturn;
    }

    @ResponseBody
    @RequestMapping(value = "/getRequests",method = RequestMethod.GET)
    public String getRequests(){
        try{
            finalReturn = requestService.getRequests();
        }catch (Exception e){
            e.printStackTrace();
        }
        return finalReturn;
    }

    @ResponseBody
    @RequestMapping(value="/findInsured",method = RequestMethod.PUT)
    public String findInsured(@RequestBody Policy policy){
        try{
            finalReturn = policyService.findInsured(policy);
        }catch (Exception e){
            e.printStackTrace();
        }
        return finalReturn;
    }

    @Autowired
    private UserRepo userRepo;
    @ResponseBody
    @RequestMapping(value = "/loginUser",method = RequestMethod.POST)
    public ReturnedObject loginUser(@RequestBody User user){
        try{
            //UserDetailsService us = new UserDetailsServiceImpl(userRepo);
            //UserDetails userDetails = us.loadUserByUsername(user.getUserName());
            //System.out.print(userDetails);
            ro=userService.loginUser(user);
        }catch (Exception e){
            e.printStackTrace();
        }
        return ro;
    }

    @ResponseBody
    @RequestMapping(value="/loadPermissions",method = RequestMethod.POST)
    public UserRole loadPermissions(@RequestBody UserRole userRole){
        UserRole permissions = null;
        try {
            permissions = userRoleService.loadPermissions(userRole);
        }catch (Exception e){
            permissions = new UserRole();
            e.printStackTrace();
        }
        return permissions;
    }
    /*@Autowired
    private UserRepo ur;
    @ResponseBody
    @RequestMapping(value = "/saveUser",method = RequestMethod.PUT)
    public String saveUser(@RequestBody User user)throws Exception{
        MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(user.getPassword().getBytes(Charset.forName("UTF8")));
        byte[] array = md.digest();
        final String result = new String(Hex.encodeHex(array));
        user.setPassword(result);
        user = ur.save(user);
        return user.toString();
    }*/
}
