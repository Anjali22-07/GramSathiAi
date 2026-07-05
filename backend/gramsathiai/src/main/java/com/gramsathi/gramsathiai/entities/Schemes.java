package com.gramsathi.gramsathiai.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.util.*;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Schemes {

    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private UUID schemeId;
    private String schemeName;
    private String description;
    private int maxAge;
    private int minAge;
    @Enumerated(EnumType.STRING)
    private Occupation occupation;
    @Enumerated(EnumType.STRING)
    private Category category;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private int maxIncome;
    private String state;
    private boolean isBPL;
    private boolean isDisable;
    private String benefits;
    private String documentsRequired;
    private String url;

}
