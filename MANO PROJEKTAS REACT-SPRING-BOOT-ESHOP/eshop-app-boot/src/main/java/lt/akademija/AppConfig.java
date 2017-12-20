package lt.akademija;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

import lt.akademija.User.User;

@Configuration
@ImportResource({"classpath*:application-context.xml"})
public class AppConfig {
	
//	@Bean 
//	public User newUser1() {
//		return new User("moksliukas", "Antanas", "Antanaitis", "antanas@gmail.com");
//	}
//	
//	@Bean 
//	public User newUser2() {
//		return new User("tinginukas", "Petras", "Petraitis", "petriukas@gmail.com");
//	}
}