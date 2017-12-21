package lt.akademija.User;

import java.util.Collections;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class UserControler {

	@Autowired
	private UserServisas userServisas; 
	
	@RequestMapping(value = "rest/User/user", method = RequestMethod.GET)
	public List<UserKlientui> atiduotiUserius(){
		return getUserServisas().gautiVisusUserius();
	}
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createUser(@RequestBody final UserKlientui userKlientui) {
		userServisas.irasytiVartotoja(userKlientui);
	}

	/* Apdoros užklausas: DELETE /api/users/<vartotojas> */
	@RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteUser(@PathVariable final Long id) {
		userServisas.istrintiVartotoja(id);
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateUser(@RequestBody final UserKlientui userKlientui, @PathVariable final Long id) {
		userServisas.atnaujintiVartotoja(userKlientui, id);
	}
	

	public UserServisas getUserServisas() {
		return userServisas;
	}
	public void setUserServisas(UserServisas userServisas) {
		this.userServisas = userServisas;
	}


}
