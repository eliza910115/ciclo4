import { useState, useEffect } from "react";

import axios from "axios";
import {Table, Container} from 'react-bootstrap';

const ListarOrdenes = () => {
    const [datos, setDatos] = useState([]);
    useEffect(() => {axios.get(`https://jaded-corn-production.up.railway.app/api/ordenes`)
                    .then(res=> setDatos(res.data));},[]);
   return (
    <Container>
        <h1> Lista de Ordenes</h1>
        <br></br>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nro</th>
                    <th>Remitente</th>
                    <th>Destinatario</th>
                    <th>Fecha Creacion</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {datos.map((dato) => (
                    <tr key={dato._id}>
                    <td>{dato.numero_orden}</td>
                    <td>{dato.remitente}</td>
                    <td>{dato.destinatario}</td>
                    <td>{dato.fecha_creacion}</td>
                    <td>{dato.estado}</td>
                    </tr>
                ))}
            </tbody>

            </Table>

    </Container>
   )

}

export default ListarOrdenes