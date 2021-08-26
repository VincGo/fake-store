import React, {useEffect, useState} from 'react';
import Card from "../components/Card";
import ProductService from "../services/productService";

const List = () => {
    const [productArr, setProductArr] = useState([])

    useEffect(() => {
        ProductService.fetchAll().then((data) => setProductArr(data))
    }, [])
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-5xl mb-10">Products</h2>
                <div
                    className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {productArr && productArr.map((product) => <Card key={product.id} product={product}/>)}
                </div>
            </div>
        </div>
    );
};

export default List;
