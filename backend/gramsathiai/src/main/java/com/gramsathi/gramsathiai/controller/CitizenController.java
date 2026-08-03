package com.gramsathi.gramsathiai.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gramsathi.gramsathiai.dto.EligibilityRequest;
import com.gramsathi.gramsathiai.dto.EligibilityResponse;
import com.gramsathi.gramsathiai.service.EligibileService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/V1/citizen")
@CrossOrigin(origins = "http://localhost:5173")
@AllArgsConstructor
public class CitizenController {

    private final EligibileService eligibleService;

    @PostMapping("/checkEligibility")
    public EligibilityResponse checkResponse(@RequestBody EligibilityRequest eligibilityRequest){

      return eligibleService.findEligibleScheme(eligibilityRequest);
    }
}
