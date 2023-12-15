package abcconsultingback.abcconsulting.repository;

import abcconsultingback.abcconsulting.model.Administrator;
import abcconsultingback.abcconsulting.model.Slogan;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface SloganRepository extends CrudRepository<Slogan, String> {
    Optional<Slogan> findFirstByOrderBySloganAsc();
}
