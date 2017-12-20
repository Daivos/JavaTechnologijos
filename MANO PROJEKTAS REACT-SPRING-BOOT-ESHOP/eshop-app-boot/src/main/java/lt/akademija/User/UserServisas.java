package lt.akademija.User;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt.akademija.Product;
import lt.akademija.ProductKlientui;

@Service
public class UserServisas {
	
	@Autowired
	private UserRepository userRepository;
	
	public List<UserKlientui> gautiVisusUserius(){
		List<User> userIsDb = getUserRepository().findAll();
		List <UserKlientui> userKlientui = 
				userIsDb
				.stream()
				.map((user) -> {
					UserKlientui uk = new UserKlientui();
					uk.setUserName(user.getUserName());
					uk.setEmail(user.getEmail());
					return uk;
				})
				.collect(Collectors.toList());
						
		return userKlientui;
		
	}
	

	public UserRepository getUserRepository() {
		return userRepository;
	}

	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	
}
