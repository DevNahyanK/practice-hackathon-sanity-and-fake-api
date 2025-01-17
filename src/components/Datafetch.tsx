import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import product from "@/sanity/schemaTypes/product";
import Image from "next/image";
// import Image from "next/image";
import React from "react";
const Datafetch  = async () => {
    const query = await client.fetch(
        `*[_type == "product"]{
            _id,
          name,
          price,
          discountPercentage,
          "imageUrl": image.asset->url
        }`
    );
    console.log(query);
    return (
        <div>
       {query.map((product:any) => {
         return (
            <div key={product._id}>
                <h1>
                    {product.name}
                </h1>
                <p>{product.price}</p>
<Image src={urlFor(product.imageUrl).url()} alt={product.name} width={100} height={100}/>
         </div>
         )
       }
    )} 
        </div>
    )
}
export default Datafetch