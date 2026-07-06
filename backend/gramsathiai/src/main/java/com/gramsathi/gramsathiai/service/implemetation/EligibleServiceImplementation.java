package com.gramsathi.gramsathiai.service.implemetation;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.gramsathi.gramsathiai.config.ModelMapperConfig;
import com.gramsathi.gramsathiai.dto.EligibilityRequest;
import com.gramsathi.gramsathiai.dto.EligibilityResponse;
import com.gramsathi.gramsathiai.dto.SchemeResponse;
import com.gramsathi.gramsathiai.entities.Schemes;
import com.gramsathi.gramsathiai.helper.EligibilityHelper;
import com.gramsathi.gramsathiai.repositories.SchemeRepositories;
import com.gramsathi.gramsathiai.service.EligibileService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EligibleServiceImplementation implements  EligibileService{

    private  final SchemeRepositories schemeRepo;
    private final EligibilityHelper eligibilityHelper;
    private final ModelMapper mapper;

    @Override
    public EligibilityResponse findEligibleScheme(EligibilityRequest request) {
        
        //fetch Scheme Details from DB
        List<Schemes> schemes= schemeRepo.findAll();
        List<SchemeResponse> eligibleSchemes= new ArrayList<>();
         //checking conditions
         for(Schemes scheme: schemes){
                  
             //match with the schemes available
              if(eligibilityHelper.isEligible(request, scheme)){
                SchemeResponse sResponse=  mapper.map(scheme, SchemeResponse.class);
                eligibleSchemes.add(sResponse);

              }
            }

              EligibilityResponse response = new EligibilityResponse();
              response.setEligibleSchemes(eligibleSchemes);
              return response;        

    }

}
