package com.gramsathi.gramsathiai.service;

import java.util.List;
import com.gramsathi.gramsathiai.dto.SchemeDto;

public interface SchemeService {

    public void saveScheme(SchemeDto schemeDto);
    public List<SchemeDto> getAllSchemes();

}
