package abcconsultingback.abcconsulting.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Slogan {
    public String getSlogan() {
        return slogan;
    }

    public Slogan(String slogan) {
        this.slogan = slogan;
    }

    public Slogan() {
    }

    public void setSlogan(String slogan) {
        this.slogan = slogan;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String slogan;
}