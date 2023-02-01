import React from 'react';
import ProductCard from "@/app/(user)/shop/components/ProductCard";

const FeaturedProduct = ({products}: any) => {



    return (
        <div>
            <h1>
                Featured Products
            </h1>
            {
                products.map((product: any) => (
                    <ProductCard product={product}/>
                ))
            }

        </div>
    );
};

export default FeaturedProduct;