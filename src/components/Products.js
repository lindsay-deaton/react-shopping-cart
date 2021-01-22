import React, { useContext } from 'react';
//add this ^

// Components
import Product from './Product';
import {ProductContext} from "../contexts/ProductContext"
	
const Products = props => {
	console.log(props)
	const value = useContext(ProductContext);
	const { products, addItem } = value;
	
	return (

		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
