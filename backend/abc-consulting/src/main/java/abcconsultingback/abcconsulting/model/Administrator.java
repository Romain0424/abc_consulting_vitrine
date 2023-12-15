package abcconsultingback.abcconsulting.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Entity
public class Administrator {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String password;
    private String username;

    public Integer getId() {
        return id;
    }

    public Administrator() {
    }

    public Administrator(String password, String username) {
        this.password = password;
        this.username = username;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
