package com.gramsathi.gramsathiai.repositories;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gramsathi.gramsathiai.entities.Schemes;

@Repository
public interface SchemeRepositories extends  JpaRepository<Schemes, UUID> {

}
