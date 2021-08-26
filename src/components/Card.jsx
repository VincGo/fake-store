import React from 'react';

const Card = ({product}) => {
    const {id, title, price, image} = product

    return (
        <a key={id} href={`/edit/${id}`} className="group border border-gray-200 rounded-lg shadow-lg">
            <div className="h-52 flex">
                <img
                    src={image}
                    alt={title}
                    className="h-full m-auto justify-center group-hover:opacity-75"
                />
            </div>
            <hr className={"mt-3"}/>
            <div className={"px-5 pb-5 pt-2"}>
                <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{price}€</p>
            </div>
        </a>
    );
};

export default Card;
