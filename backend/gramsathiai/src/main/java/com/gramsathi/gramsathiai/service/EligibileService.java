package com.gramsathi.gramsathiai.service;


import com.gramsathi.gramsathiai.dto.EligibilityRequest;
import com.gramsathi.gramsathiai.dto.EligibilityResponse;


public interface EligibileService {

     public EligibilityResponse findEligibleScheme(EligibilityRequest eligibilityRequest);

}
