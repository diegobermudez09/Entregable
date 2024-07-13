import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from 'reactstrap';
import Swal from 'sweetalert2';

// Modelo inicial de producto
const modeloProducto = {
    idProducto: 0,
    nombre: "",
    precio: ""
};

// Componente ModalProducto para agregar/editar productos
const ModalProducto = ({ mostrarModal, setMostrarModal, guardarProducto, editar, setEditar, editarProducto }) => {
    const [producto, setProducto] = useState(modeloProducto); // Estado local del producto
    const [formularioValido, setFormularioValido] = useState(false); // Validación del formulario

    // Actualiza el estado del producto con los datos del formulario
    const actualizarDato = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        });
    };

    // Envía los datos del producto y muestra una alerta
    const enviarDatos = () => {
        if (producto.idProducto === 0) {
            guardarProducto(producto); // Guarda un nuevo producto
            mostrarAlerta('Producto guardado exitosamente!');
        } else {
            editarProducto(producto); // Edita un producto existente
            mostrarAlerta('Producto actualizado exitosamente!');
        }

        setProducto(modeloProducto); // Resetea el estado del producto
    };

    // Muestra una alerta usando SweetAlert2
    const mostrarAlerta = (mensaje) => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: mensaje,
            showConfirmButton: false,
            timer: 2500
        });
    };

    // Cierra el modal y resetea el estado del producto
    const cerrarModal = () => {
        setMostrarModal(false);
        setEditar(null);
        setProducto(modeloProducto);
    };

    // Actualiza el estado del producto si se está editando
    useEffect(() => {
        if (editar !== null) {
            setProducto(editar);
        } else {
            setProducto(modeloProducto);
        }
    }, [editar]);

    // Valida el formulario cada vez que cambian los datos del producto
    useEffect(() => {
        if (producto.nombre !== "" && producto.precio !== "" && producto.precio > 0) {
            setFormularioValido(true);
        } else {
            setFormularioValido(false);
        }
    }, [producto]);

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {producto.idProducto === 0 ? "Nuevo Producto" : "Editar Producto"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre del Producto</Label>
                        <Input name="nombre" onChange={actualizarDato} value={producto.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Precio del Producto</Label>
                        <Input type="number" name="precio" onChange={actualizarDato} value={producto.precio} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos} disabled={!formularioValido}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalProducto;
