package com.kodskog.moveiflex.website;
import org.springframework.stereotype.Controller;
import com.kodskog.moveiflex.movieID.MovieIDService;

/*
 * @author Vincent Westlund
 */

@Controller
public class GamePage {
    
    private final MovieIDService movieIDService;

    public GamePage(MovieIDService movieIDService) {
        this.movieIDService = movieIDService;
    }
}
