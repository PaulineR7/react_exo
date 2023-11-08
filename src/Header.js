function Header () {
    const isUserLogged = true

    return (
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Footer</li>
                    {isUserLogged ? <li>Pauline Rémi</li> : <li>Veuillez vous connecter</li>}
                </ul>
            </nav>
            <h1>Nouvelles sneakers à la mode</h1>

        </header>
    )
}

export default Header;