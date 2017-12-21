package lt.akademija;

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
@RequestMapping(value = "/api/product")
public class ProductControleris {

	@Autowired
	private ProductServisas productServisas;

	@RequestMapping(method = RequestMethod.GET)
	public List<ProductKlientui> atiduotiProduct() {
		return getProductServisas().gautiVisusProduktus();
	}
	// value = "/api/product",

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createUser(@RequestBody final ProductKlientui productKlientui) {
		productServisas.irasytiProdukta(productKlientui);
	}

	/* Apdoros užklausas: DELETE /api/users/<vartotojas> */
	@RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteUser(@PathVariable final Long id) {
		productServisas.istrintiProdukta(id);
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateProduct(@RequestBody final ProductKlientui productKlientui, @PathVariable final Long id) {
		productServisas.atnaujintiProdukta(productKlientui, id);
	}

	public ProductServisas getProductServisas() {
		return productServisas;
	}

	public void setProductServisas(ProductServisas productServisas) {
		this.productServisas = productServisas;
	}

}
