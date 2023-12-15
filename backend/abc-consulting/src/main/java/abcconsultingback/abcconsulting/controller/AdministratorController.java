package abcconsultingback.abcconsulting.controller;

import abcconsultingback.abcconsulting.dto.AdminLoginRequest;
import abcconsultingback.abcconsulting.dto.AdminUpdateRequest;
import abcconsultingback.abcconsulting.dto.SloganUpdate;
import abcconsultingback.abcconsulting.model.Administrator;
import abcconsultingback.abcconsulting.model.Slogan;
import abcconsultingback.abcconsulting.repository.AdministratorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*")
@Controller
public class AdministratorController {

    @Autowired
    private AdministratorRepository administratorRepository;

    @PostMapping("/login")
    public ResponseEntity<String> loginAdmin(@RequestBody AdminLoginRequest request) {
        Optional<Administrator> admin = administratorRepository.findAdminByUsername(request.getUsername());

        if (admin.isPresent() && admin.get().getPassword().equals(request.getPassword())) {
            return ResponseEntity.ok("Login successful.");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials.");
        }
    }
    @GetMapping(path="/all")
    public @ResponseBody Iterable<Administrator> getAllUsers() {
        return administratorRepository.findAll();
    }

    @PostMapping(path="/updatepassword")
    public @ResponseBody ResponseEntity<Object> updateSlogan(@RequestBody AdminUpdateRequest adminUpdateRequest){
        Optional<Administrator> optionalAdministrator = administratorRepository.findAdminByUsername(adminUpdateRequest.getUsername());
        if(optionalAdministrator.isPresent()) {
            optionalAdministrator.get().setPassword(adminUpdateRequest.getPassword());
            administratorRepository.save(optionalAdministrator.get());
            return ResponseEntity.ok().body(Map.of("message","password updated"));
        } else {
            return ResponseEntity.ofNullable("fail during password update");
        }
    }
}
