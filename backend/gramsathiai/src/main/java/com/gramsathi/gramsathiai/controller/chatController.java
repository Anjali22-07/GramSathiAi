package com.gramsathi.gramsathiai.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gramsathi.gramsathiai.dto.ChatRequestDto;
import com.gramsathi.gramsathiai.service.AiService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/V1/ai")
@AllArgsConstructor
public class chatController {

    private final AiService aiService;

    @PostMapping("/chat")
    public ResponseEntity<?> chatRequest(@RequestBody ChatRequestDto chatRequestDto){
         
        return ResponseEntity.ok(aiService.processMessage(chatRequestDto.getMessage()));
    }
}
