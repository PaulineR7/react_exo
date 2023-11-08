function Product() {

    const nameProduct = [
        {
            name : "Air Force 1",
            price : 120,
            isPublished : true,
        },
        {
            name : "Air Max",
            price : 100,
            isPublished : false,
        },
        {
            name : "Jordan",
            price : 200,
            isPublished : true,
        },
    ]

    return(
        <section>

            {nameProduct.map((product) => {
                return(
                    <article>
                        { product.isPublished ? 
                        (
                        <>
                            <h2>{product.name}</h2>
                            <p>Prix : {product.price}</p>
                        </>
                        )
                        :
                        (
                            <p> Il n'est pas publié </p>
                        )}
                </article>
                
            )})}
        </section>

    )
}

export default Product;