import CartContainer from './CartWidget/CartWidget';
import './Navbar.scss';

export const Navbar = () => {
    return (
        <header className="App__Navbar">
            <div className="Navbar__Container">
                <div className="NavbarImgNav">
                <nav className="Navbar__Nav">
                    <a href="#" className="Nav__Btn"><b>Inicio</b></a>
                    <a href="#" className="Nav__Btn">Promos</a>
                    <a href="#" className="Nav__Btn">Tienda</a>
                    <a href="#" className="Nav__Btn">Contacto</a>
                </nav>
                
                <img src=' ./assets/Beware.png' alt='Beware' className="Navbar__Logo">
                </img>

                </div>
                <CartContainer />

            </div>
        </header>

    )
}
