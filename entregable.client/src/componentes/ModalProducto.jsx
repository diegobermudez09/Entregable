import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from 'reactstrap';

const modeloProducto = {
    idProducto: 0,
    nombre: "",
    precio: ""
};

const ModalProducto = ({ mostrarModal, setMostrarModal, guardarProducto }) => {
    const [producto, setProducto] = useState(modeloProducto);

    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value);
        setProducto(
            {
                ...producto,
                [e.target.name]: e.target.value

            }
        )
    };

    const enviarDatos = () => {
        if (producto.idProducto == 0) {
            guardarProducto(producto)
        }
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                Nuevo Producto
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre del Producto</Label>
                        <Input name="nombre" onChange={(e) => actualizarDato(e)} value={producto.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Precio del Producto</Label>
                        <Input name="precio" onChange={(e) => actualizarDato(e)} value={producto.precio} />
                    </FormGroup>
                </Form>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos} >Guardar</Button>
                <Button color="danger" size="sm" onClick={() => { setMostrarModal(!mostrarModal) } }>Cerrar</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalProducto;
