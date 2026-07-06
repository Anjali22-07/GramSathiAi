package com.gramsathi.gramsathiai.helper;

import org.springframework.stereotype.Component;

import com.gramsathi.gramsathiai.dto.EligibilityRequest;
import com.gramsathi.gramsathiai.entities.Category;
import com.gramsathi.gramsathiai.entities.Gender;
import com.gramsathi.gramsathiai.entities.Occupation;
import com.gramsathi.gramsathiai.entities.Schemes;

@Component
public class EligibilityHelper {

    public boolean isEligible(EligibilityRequest request, Schemes scheme){

        return (isEligibleAge(request, scheme)&& isEligibleBPL(request, scheme) && isEligibleCategory(request, scheme)
        && isEligibleGender(request, scheme) && isEligibleDisabled(request, scheme) && isEligibleIncome(request, scheme) && isEligibleOccupation(request, scheme)
    && isEligibleState(request, scheme)) ;

    }

    //method verifies age of the candidates
    public boolean isEligibleAge(EligibilityRequest request, Schemes scheme){
          return request.getAge()>=scheme.getMinAge() && request.getAge()<=scheme.getMaxAge();
    }
    
    //method verifies income of the candidates
    public boolean isEligibleIncome(EligibilityRequest request, Schemes scheme){
        return request.getIncome()<=scheme.getMaxIncome();

    }

    //method verifies PovertyStatus of the candidate
    public boolean isEligibleBPL(EligibilityRequest request, Schemes scheme){
      if(!scheme.isBPL())  return true; 
      return request.isBPL();
    }

    //method verifies the gender of the candidate
    public boolean isEligibleGender (EligibilityRequest request, Schemes scheme){

        return (scheme.getGender()==Gender.ANY) ? true : request.getGender()==scheme.getGender();

    }
    //method verifies the category of the candidate
    public boolean isEligibleCategory(EligibilityRequest request, Schemes scheme){
        return (scheme.getCategory()==Category.ANY) ? true : request.getCategory()==scheme.getCategory();

    }

    //method verifies the state of the candidate
    public boolean isEligibleState(EligibilityRequest request, Schemes scheme){
          if ("ANY".equalsIgnoreCase(scheme.getState())) {
        return true;
    }
           return request.getState().equalsIgnoreCase(scheme.getState());
    }

    //method verifies the occupation of the candidate
    public boolean isEligibleOccupation(EligibilityRequest request, Schemes scheme){
           return (scheme.getOccupation()==Occupation.ANY) ? true : request.getOccupation()==scheme.getOccupation();

    }


    //method verifies if the candidate is available for the scheme based on the disability
    public boolean isEligibleDisabled(EligibilityRequest request, Schemes scheme){
         return  (!scheme.isDisable()) ? true : request.isDisable();
    }
    

}
