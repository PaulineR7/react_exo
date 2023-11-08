function Header () {
    const isUserLogged = true;
    const itemInCart = 2;

    return (
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Footer</li>
                    {isUserLogged ? <li>Pauline Rémi</li> : <li>Veuillez vous connecter</li>}
                    {itemInCart > 0 ? <li>Cart : {itemInCart} </li> : <li>Pas d'item au panier</li>}
                </ul>
            </nav>
            <h1>Nouvelles sneakers à la mode</h1>

        </header>
    )
}

export default Header;