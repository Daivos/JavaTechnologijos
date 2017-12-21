package lt.akademija.User;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




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
	public void irasytiVartotoja(UserKlientui userKlientui) {
		User us = new User();
		us.setUserName(userKlientui.getUserName());
		us.setEmail(userKlientui.getEmail());
		userRepository.save(us);
	}

	
	public void istrintiVartotoja(Long id) {
		
		userRepository.delete(id); 
		
	}

	public void atnaujintiVartotoja(UserKlientui userKlientui, Long id) {
		User us = userRepository.findOne(id);
		us.setUserName(userKlientui.getUserName());
		us.setEmail(userKlientui.getEmail());
		
		userRepository.save(us);
	}


	public UserRepository getUserRepository() {
		return userRepository;
	}

	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	
}
