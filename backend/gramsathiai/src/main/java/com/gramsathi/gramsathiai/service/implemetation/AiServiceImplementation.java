package com.gramsathi.gramsathiai.service.implemetation;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

import com.gramsathi.gramsathiai.dto.EligibilityRequest;
import com.gramsathi.gramsathiai.dto.EligibilityResponse;
import com.gramsathi.gramsathiai.dto.SchemeResponse;
import com.gramsathi.gramsathiai.prompt.PromptTemplate;
import com.gramsathi.gramsathiai.service.AiService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AiServiceImplementation implements AiService {
  
     private final ChatClient chatClient;
     private final EligibleServiceImplementation eligibleServiceImplementation;
     
    @Override
    public EligibilityResponse processMessage(String message) {
    
    //Extracting response
        EligibilityRequest request=  chatClient.prompt()
                                     .system(PromptTemplate.prompt)
                                     .user(message)
                                     .call()
                                     .entity(EligibilityRequest.class);
                
            System.out.println(request);

        //passing the values to the eligibleService

        EligibilityResponse response= eligibleServiceImplementation.findEligibleScheme(request);
//     try{
//         String explanation= generateExplanation(request, response);
//         response.setAiResponse(explanation);
//         } catch (Exception e) {
//     response.setAiResponse(
//         "Unable to generate AI explanation at the moment. Please try again shortly."
//     );
// }
     
        
        return response;

    }

//     private String generateExplanation(
//         EligibilityRequest request,
//         EligibilityResponse response) {

//     StringBuilder schemes = new StringBuilder();

// for (SchemeResponse scheme : response.getEligibleSchemes()) {

//     schemes.append("""
//     Scheme Name: %s
//     Description: %s
//     Benefits: %s
//     Required Documents: %s
//     Official URL: %s

//     ------------------------------------

//     """.formatted(
//             scheme.getSchemeName(),
//             scheme.getDescription(),
//             scheme.getBenefits(),
//             scheme.getDocumentsRequired(),
//             scheme.getUrl()
//     ));
// }

// String userPrompt = """
// User Profile

// Gender: %s
// Age: %d
// Income: %d
// Occupation: %s
// State: %s
// Category: %s

// Eligible Schemes

// %s
// """.formatted(
//         request.getGender(),
//         request.getAge(),
//         request.getIncome(),
//         request.getOccupation(),
//         request.getState(),
//         request.getCategory(),
//         schemes.toString()
// );

//     return chatClient.prompt()
//             .system(PromptTemplate.EXPLAIN_SCHEMES)
//             .user(userPrompt)
//             .call()
//             .content();
// }

}
