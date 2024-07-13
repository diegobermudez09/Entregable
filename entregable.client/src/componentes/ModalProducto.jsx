import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from 'reactstrap';

const modeloProducto = {
    idProducto: 0,
    nombre: "",
    precio: ""
};

const ModalProducto = ({ mostrarModal, setMostrarModal, guardarProducto, editar, setEditar, editarProducto }) => {
    const [producto, setProducto] = useState(modeloProducto);
    const [formularioValido, setFormularioValido] = useState(false); // Estado para la validación del formulario

    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value);
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        });
    };

    const enviarDatos = () => {
        if (producto.idProducto === 0) {
            guardarProducto(producto);
        } else {
            editarProducto(producto);
        }

        setProducto(modeloProducto);
    };

    useEffect(() => {
        if (editar !== null) {
            setProducto(editar);
        } else {
            setProducto(modeloProducto);
        }
    }, [editar]);

    useEffect(() => {
        // Validar si ambos campos están llenos para habilitar el botón de guardar
        if (producto.nombre !== "" && producto.precio !== "" && producto.precio > 0) {
            setFormularioValido(true);
        } else {
            setFormularioValido(false);
        }
    }, [producto]);

    const cerrarModal = () => {
        setMostrarModal(false); // Cambiado a false para cerrar el modal
        setEditar(null);
        setProducto(modeloProducto);
    };

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {producto.idProducto === 0 ? "Nuevo Producto" : "Editar Producto"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre del Producto</Label>
                        <Input name="nombre" onChange={(e) => actualizarDato(e)} value={producto.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Precio del Producto</Label>
                        <Input type="number" name="precio" onChange={(e) => actualizarDato(e)} value={producto.precio} />
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
