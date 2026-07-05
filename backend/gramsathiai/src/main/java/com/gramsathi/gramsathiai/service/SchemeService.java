package com.gramsathi.gramsathiai.service;


import com.gramsathi.gramsathiai.dto.EligibilityRequest;
import com.gramsathi.gramsathiai.dto.EligibilityResponse;


public interface SchemeService {

     public EligibilityResponse returnScheme(EligibilityRequest eligibilityRequest);

}
