function Header () {
    const isUserLogged = true;
    const itemInCart = 2;
    const userLogged = {
        firstname : 'Pauline',
        lastname : 'Rémi',
        job : 'Formation web dev'
    };

    return (
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Footer</li>
                    {isUserLogged ? <li>{userLogged.firstname} {userLogged.lastname} - {userLogged.job}</li> : <li>Veuillez vous connecter</li>}
                    {itemInCart > 0 ? <li>Cart : {itemInCart} </li> : <li>Pas d'item au panier</li>}
                </ul>
            </nav>
            <h1>Nouvelles sneakers à la mode</h1>

        </header>
    )
}

export default Header;