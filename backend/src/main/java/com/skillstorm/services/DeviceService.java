package com.skillstorm.services;

import com.skillstorm.beans.Device;
import com.skillstorm.data.DeviceRepository;
import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class DeviceService {

    private static final Logger logger = Logger.getLogger(DeviceService.class);

    @Autowired
    DeviceRepository deviceRepository;

    public List<Device> findAll(){
        logger.debug("Grabbing from database-device ");
        return deviceRepository.findAll();
    }

    public void deleteById(int id) {
        try{
            deviceRepository.deleteById(id);
        }catch (Exception e)
        {e.printStackTrace();}
    }

    public Device save(Device device) {
        return deviceRepository.save(device);
    }

    public Optional<Device> finById(int id){
        return deviceRepository.findById(id);
    }

}
