import React, { useState } from 'react';
import { Table, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const TablaProducto = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarProducto }) => {
    const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual de la paginación
    const productosPorPagina = 5; // Número de productos por página

    // Calcula los índices para mostrar los productos actuales en la página
    const indexOfLastProducto = currentPage * productosPorPagina;
    const indexOfFirstProducto = indexOfLastProducto - productosPorPagina;
    const productosActuales = data.slice(indexOfFirstProducto, indexOfLastProducto);

    // Maneja la edición de un producto y muestra el modal
    const enviarDatos = (producto) => {
        setEditar(producto);
        setMostrarModal(!mostrarModal);
    };

    // Cambia la página actual
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productosActuales.length < 1 ? (
                        <tr>
                            <td colSpan="3">Sin Registros</td>
                        </tr>
                    ) : (
                        productosActuales.map((item) => (
                            <tr key={item.id}>
                                <td>{item.nombre}</td>
                                <td>S/.{item.precio}</td>
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
