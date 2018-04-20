package com.corusconsulting.template.dao;

import com.corusconsulting.template.repo.MissionHistory;

public interface MissionHistoryDAO {

    MissionHistory saveMissionHistory(MissionHistory mh)throws Exception;
}
