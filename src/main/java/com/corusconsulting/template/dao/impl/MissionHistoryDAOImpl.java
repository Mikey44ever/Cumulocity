package com.corusconsulting.template.dao.impl;

import com.corusconsulting.template.dao.MissionHistoryDAO;
import com.corusconsulting.template.dto.ReturnedObject;
import com.corusconsulting.template.repo.MissionHistory;
import com.corusconsulting.template.repo.crud.MissionHistoryRepo;
import com.corusconsulting.template.utils.ReturnManipulationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MissionHistoryDAOImpl implements MissionHistoryDAO {

    @Autowired
    private MissionHistoryRepo mhr;
    @Autowired
    private ReturnedObject ro;
    @Autowired
    private ReturnManipulationUtil rmu;
    private String returnValue;

    @Override
    public MissionHistory saveMissionHistory(MissionHistory mh) throws Exception {
        return mhr.save(mh);
    }
}
