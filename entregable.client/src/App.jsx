import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
import TablaProducto from './componentes/TablaProducto'; // Ajusta la ruta según sea necesario
import ModalProducto from './componentes/ModalProducto';

const App = () => {
    const [productos, setProductos] = useState([]); // Estado para la lista de productos
    const [mostrarModal, setMostrarModal] = useState(false); // Estado para mostrar/ocultar el modal
    const [editar, setEditar] = useState(null); // Estado para el producto que se está editando

    // Función para obtener la lista de productos desde la API
    const mostrarProductos = async () => {
        const response = await fetch("api/producto/Lista");

        if (response.ok) {
            const data = await response.json();
            setProductos(data); // Actualiza el estado de productos con los datos recibidos
        } else {
            console.log("Error al obtener los productos");
        }
    };

    // Llama a mostrarProductos cuando el componente se monta
    useEffect(() => {
        mostrarProductos();
    }, []);

    // Función para guardar un nuevo producto
    const guardarProducto = async (producto) => {
        const response = await fetch("api/producto/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(producto)
        });

        if (response.ok) {
            setMostrarModal(!mostrarModal); // Cierra el modal
            mostrarProductos(); // Actualiza la lista de productos
        }
    };

    // Función para editar un producto existente
    const editarProducto = async (producto) => {
        const response = await fetch("api/producto/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(producto)
        });

        if (response.ok) {
            setMostrarModal(!mostrarModal); // Cierra el modal
            mostrarProductos(); // Actualiza la lista de productos
        }
    };

    // Función para eliminar un producto
    const eliminarProducto = async (id) => {
        var respuesta = window.confirm("Desea eliminar el producto?");

        if (!respuesta) {
            return;
        }

        const response = await fetch("api/producto/Eliminar/" + id, {
            method: 'DELETE'
        });

        if (response.ok) {
            mostrarProductos(); // Actualiza la lista de productos
        }
    };

    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de Productos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success" onClick={() => setMostrarModal(!mostrarModal)}>Nuevo Producto</Button>
                            <hr />
                            <TablaProducto
                                data={productos}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                eliminarProducto={eliminarProducto}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <ModalProducto
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarProducto={guardarProducto}
                editar={editar}
                setEditar={setEditar}
                editarProducto={editarProducto}
            />
        </Container>
    );
};

export default App;
