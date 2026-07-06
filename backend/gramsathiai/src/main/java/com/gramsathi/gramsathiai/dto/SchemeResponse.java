package com.gramsathi.gramsathiai.dto;

import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SchemeResponse {

    private UUID sId;
    private String SchemeName;
    private String description;
    private String benefits;
    private String documentsRequired;
    private String officialURL;


}
