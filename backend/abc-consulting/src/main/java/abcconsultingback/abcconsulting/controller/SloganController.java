package abcconsultingback.abcconsulting.controller;

import abcconsultingback.abcconsulting.dto.SloganUpdate;
import abcconsultingback.abcconsulting.model.Slogan;
import abcconsultingback.abcconsulting.repository.SloganRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*")
@Controller
public class SloganController {

    @Autowired
    private SloganRepository sloganRepository;

    @GetMapping(path="/getslogan")
    public @ResponseBody String getSlogan() {
        Optional<Slogan> optionalSlogan = sloganRepository.findFirstByOrderBySloganAsc();
        if(optionalSlogan.isPresent()) {
            return optionalSlogan.get().getSlogan();
        } else {
            return "Aucun slogan trouvé.";
        }
    }

    @PostMapping(path="/updateslogan")
    public @ResponseBody ResponseEntity<Object> updateSlogan(@RequestBody SloganUpdate newSlogan){
        Optional<Slogan> optionalSlogan = sloganRepository.findFirstByOrderBySloganAsc();
        String result;
        if(optionalSlogan.isPresent()) {
            optionalSlogan.get().setSlogan(newSlogan.getSlogan());
            sloganRepository.save(optionalSlogan.get());
            result = "Slogan updated successfully";
        } else {
            Slogan slogan = new Slogan("Win clients, save money");
            sloganRepository.save(slogan);
            result = "Slogan created";
        }
        return ResponseEntity.ok().body(Map.of("message",result));
    }
}
