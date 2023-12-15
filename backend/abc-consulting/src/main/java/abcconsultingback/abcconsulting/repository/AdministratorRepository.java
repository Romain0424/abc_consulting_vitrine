package abcconsultingback.abcconsulting.repository;

import abcconsultingback.abcconsulting.model.Administrator;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface AdministratorRepository extends CrudRepository<Administrator, Integer> {

    Optional<Administrator> findAdminByUsername(String username);
}
