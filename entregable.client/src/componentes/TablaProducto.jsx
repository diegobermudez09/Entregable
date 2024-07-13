import React from 'react';
import { Table, Button } from 'reactstrap';

const TablaProducto = ({ data }) => {
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
                                    <Button color="primary" size="sm" className="me-2">Editar</Button>
                                    <Button color="danger" size="sm">Eliminar</Button>
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
