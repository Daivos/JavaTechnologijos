package lt.akademija;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Transactional
@Service
public class ProductServisas {

	@Autowired
	private ProductRepository productRepository;
	
	public List<ProductKlientui> gautiVisusProduktus() {
		List<Product> productIsDuomenuBazes = getProductRepository().findAll();
		// Preke -> PrekeKlientui
		List<ProductKlientui> productKlientui = 
				productIsDuomenuBazes
				.stream()
				.map((product) -> {
					ProductKlientui pk = new ProductKlientui();
					pk.setTitle(product.getTitle());
					pk.setModel(product.getModel());
					pk.setId(product.getId());
					return pk;
				})
				.collect(Collectors.toList());
		return productKlientui;
	}

	public ProductRepository getProductRepository() {
		return productRepository;
	}

	public void setProductRepository(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

	public void irasytiProdukta(ProductKlientui productKlientui) {
		Product prod = new Product();
		prod.setModel(productKlientui.getModel());
		prod.setTitle(productKlientui.getTitle());
		prod.setPrice(productKlientui.getPrice());
		productRepository.save(prod);
	}

	
	public void istrintiProdukta(Long id) {
		
		productRepository.delete(id); 
		
	}

	public void atnaujintiProdukta(ProductKlientui productKlientui, Long id) {
		Product prod = productRepository.findOne(id);
		prod.setModel(productKlientui.getModel());
		prod.setTitle(productKlientui.getTitle());
		prod.setPrice(productKlientui.getPrice());
		productRepository.save(prod);
	}

	

}
