package com.gramsathi.gramsathiai.service.implemetation;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

import com.gramsathi.gramsathiai.service.AiService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AiServiceImplementation implements AiService {
  
     private final ChatClient chatClient;
     
    @Override
    public String processMessage(String message) {
    
        return  chatClient.prompt().user(message).call().content();
    }

}
