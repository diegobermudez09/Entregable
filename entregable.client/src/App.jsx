import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
import TablaProducto from './componentes/TablaProducto'; // Ajusta la ruta según sea necesario
import ModalContacto from './componentes/ModalProducto';
import ModalProducto from './componentes/ModalProducto';

const App = () => {

    const [productos, setProductos] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false)


    const mostrarProductos = async () => {

        const response = await fetch("api/producto/Lista");

        if (response.ok) {
            const data = await response.json();
            setProductos(data)
        } else {
            console.log("error")
        }
    }

    useEffect(() => {
        mostrarProductos()
    },[])

    const guardarProducto = async (producto) => {

        const response = await fetch("api/producto/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(producto)
        })
        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarProductos();
        }
    } 


    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de Productos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success" onClick={ () => setMostrarModal(!mostrarModal)}>Nuevo Producto</Button>
                            <hr />
                            <TablaProducto data={productos} /> {/* Aquí se utiliza el componente TablaProducto */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <ModalProducto
                mostrarModal={mostrarModal}

                setMostrarModal={setMostrarModal}

                guardarProducto={guardarProducto }
            />
        </Container>
    );
}

export default App;
