package com.gramsathi.gramsathiai.dto;

import java.util.UUID;
import com.gramsathi.gramsathiai.entities.Category;
import com.gramsathi.gramsathiai.entities.Gender;
import com.gramsathi.gramsathiai.entities.Occupation;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SchemeDto {

    private UUID schemeId;
    private String schemeName;
    private String description;
    private int maxAge;
    private int minAge;
    private Occupation occupation;
    private Category category;
    private Gender gender;
    private int maxIncome;
    private String state;
    private boolean isBPL;
    private boolean isDisable;
    private String benefits;
    private String documentsRequired;
    private String url;

}
