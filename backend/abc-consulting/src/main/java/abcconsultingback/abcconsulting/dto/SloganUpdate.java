package abcconsultingback.abcconsulting.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SloganUpdate {

    public String getSlogan() {
        return slogan;
    }

    public SloganUpdate() {
    }

    public SloganUpdate(String slogan) {
        this.slogan = slogan;
    }

    public void setSlogan(String slogan) {
        this.slogan = slogan;
    }

    private String slogan;
}
