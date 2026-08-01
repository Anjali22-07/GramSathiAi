package com.gramsathi.gramsathiai.service;

import com.gramsathi.gramsathiai.dto.EligibilityResponse;

public interface AiService {

     EligibilityResponse processMessage(String message);

}
