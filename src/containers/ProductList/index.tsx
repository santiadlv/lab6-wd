import React from "react";
import ProductPreview from "../../components/ProductPreview";
import Product from "../../types/Product";

interface ListState {
    products: Product[];
}

class ProductList extends React.Component<{}, ListState> {
    state = {
        products: [] as Product[],
    }

    render() {
        var productsList : any[] = [];
            this.state.products.forEach( (product) => {
                productsList.push(<ProductPreview product = {product}/>);
              }); 
        return (
            productsList
        )
    }
}

export default ProductList; 