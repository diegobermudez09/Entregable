import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const TablaProducto = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarProducto }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productosPorPagina = 5;

    const indexOfLastProducto = currentPage * productosPorPagina;
    const indexOfFirstProducto = indexOfLastProducto - productosPorPagina;
    const productosActuales = data.slice(indexOfFirstProducto, indexOfLastProducto);

    const enviarDatos = (contacto) => {
        setEditar(contacto);
        setMostrarModal(!mostrarModal);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
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
                    {productosActuales.length < 1 ? (
                        <tr>
                            <td colSpan="4">Sin Registros</td>
                        </tr>
                    ) : (
                        productosActuales.map((item) => (
                            <tr key={item.id}>
                                <td>{item.nombre}</td>
                                <td>{item.precio}</td>
                                <td>
                                    <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)}>Editar</Button>
                                    <Button color="danger" size="sm" onClick={() => eliminarProducto(item.id)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>

            {data.length > productosPorPagina && (
                <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled={currentPage === 1}>
                        <PaginationLink previous onClick={() => paginate(currentPage - 1)} />
                    </PaginationItem>

                    {[...Array(Math.ceil(data.length / productosPorPagina)).keys()].map((number) => (
                        <PaginationItem key={number + 1} active={currentPage === number + 1}>
                            <PaginationLink onClick={() => paginate(number + 1)}>
                                {number + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                    <PaginationItem disabled={currentPage === Math.ceil(data.length / productosPorPagina)}>
                        <PaginationLink next onClick={() => paginate(currentPage + 1)} />
                    </PaginationItem>
                </Pagination>
            )}
        </div>
    );
};

export default TablaProducto;
