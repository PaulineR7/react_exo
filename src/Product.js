function Product() {

    const nameProduct = ["Air Force 1" , "Air Max" , "Jordan"]

    return(
        <section>

            {nameProduct.map((name) => {
                return(
                <article>
                  <h2>{name}</h2>
                </article>
            )})}
        </section>

    )
}

export default Product;