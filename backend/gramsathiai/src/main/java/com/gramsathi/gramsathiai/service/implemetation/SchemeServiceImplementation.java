package com.gramsathi.gramsathiai.service.implemetation;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gramsathi.gramsathiai.dto.SchemeDto;
import com.gramsathi.gramsathiai.entities.Schemes;
import com.gramsathi.gramsathiai.repositories.SchemeRepositories;
import com.gramsathi.gramsathiai.service.SchemeService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class SchemeServiceImplementation implements SchemeService {
    
    private final ModelMapper modelMapper;
    private final SchemeRepositories schemeRepo;

    @Override
    @Transactional
    public void saveScheme(SchemeDto schemeDto) {
       //save data in DB
       Schemes schemes= modelMapper.map(schemeDto, Schemes.class);
       schemeRepo.save(schemes);
    }

    @Override
    public List<SchemeDto> getAllSchemes() {

        List<Schemes> scheme= schemeRepo.findAll();
      
        return scheme.stream()
                       .map(s->modelMapper.map(s, SchemeDto.class))
                       .toList();

    }
    

}
