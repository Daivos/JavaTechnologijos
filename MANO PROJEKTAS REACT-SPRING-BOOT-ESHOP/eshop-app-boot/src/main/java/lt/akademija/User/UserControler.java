package lt.akademija.User;

import java.util.Collections;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lt.akademija.Product;
import lt.akademija.ProductKlientui;

@RestController
public class UserControler {

	@Autowired
	private UserServisas userServisas; 
	
	@RequestMapping(value = "rest/User/user", method = RequestMethod.GET)
	public List<UserKlientui> atiduotiUserius(){
		return getUserServisas().gautiVisusUserius();
	}
	

	public UserServisas getUserServisas() {
		return userServisas;
	}
	public void setUserServisas(UserServisas userServisas) {
		this.userServisas = userServisas;
	}


}
