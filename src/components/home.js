import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.servientrega.com/wps/wcm/connect/db2922e2-b8ac-40c8-9264-eeb457ea8665/FT03+-+Mercancia+550x324.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-db2922e2-b8ac-40c8-9264-eeb457ea8665-nMazaHg/600x500?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Entregas Rapidas</h3>
          <p>Confia en Nosotros</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.beetrack.com/hs-fs/hubfs/Entregas%20seguras.jpg?width=724&name=Entregas%20seguras.jpg800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Entregas Seguras</h3>
          <p>Cumpliendo todos los protocolos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.beetrack.com/hs-fs/hubfs/entregas%20seguras%20correos%20express.jpg?width=724&name=entregas%20seguras%20correos%20express.jpg/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Seguimiento en Linea</h3>
          <p>
            Observa siempre donde está tu pedido
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;