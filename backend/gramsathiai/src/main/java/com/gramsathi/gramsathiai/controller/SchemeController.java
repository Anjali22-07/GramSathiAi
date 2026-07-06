package com.gramsathi.gramsathiai.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gramsathi.gramsathiai.dto.SchemeDto;
import com.gramsathi.gramsathiai.service.SchemeService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/V1/schemes")
@AllArgsConstructor
public class SchemeController {

    private final SchemeService schemeService;

    @PostMapping("/addScheme")
    public ResponseEntity<SchemeDto> addScheme(@RequestBody SchemeDto schemeDto ){
           schemeService.saveScheme(schemeDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(null);
    }

    @GetMapping("/getSchemes")
    public List<SchemeDto> getSchemes(){

        return schemeService.getAllSchemes();

    }
}
