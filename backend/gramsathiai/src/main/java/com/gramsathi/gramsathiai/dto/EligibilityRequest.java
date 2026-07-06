package com.gramsathi.gramsathiai.dto;

import com.gramsathi.gramsathiai.entities.Category;
import com.gramsathi.gramsathiai.entities.Gender;
import com.gramsathi.gramsathiai.entities.Occupation;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EligibilityRequest {

   
    private Gender gender;
    private int age;
    private int income;
    private Occupation occupation;
    private String state;
    private Category category;
    private  boolean isBPL;
    private boolean isDisable;

}
