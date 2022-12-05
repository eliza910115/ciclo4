import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

const NavBarExample = () => {
    return(
       <>    
       <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" >InstaYA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="./login" >Login</Nav.Link>
                <Nav.Link as={Link} to="./registro" >Registro</Nav.Link>
                <Nav.Link as={Link} to="./home" >Home</Nav.Link>
                <Nav.Link as={Link} to="./listarOrdenes">Listar Ordenes</Nav.Link>
                <Nav.Link as={Link} to="./crearOrdenes">Crear Ordenes</Nav.Link>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBarExample