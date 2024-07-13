import React from 'react';
import { Table, Button } from 'reactstrap';

const TablaProducto = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarProducto }) => {


    const enviarDatos = (contacto) => {
        setEditar(contacto)
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    data.length < 1 ? (
                        <tr>
                            <td colSpan="4">Sin Registros</td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.nombre}</td>
                                <td>{item.precio}</td>
                                <td>
                                    <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)}>Editar</Button>
                                    <Button color="danger" size="sm" onClick={() => eliminarProducto(item.id) }>Eliminar</Button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    );
}

export default TablaProducto;
