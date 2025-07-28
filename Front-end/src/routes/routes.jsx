import React, { useState } from 'react';
import Menu from '../components/Menu';
import Clientes from '../components/Clientes';
import Estoque from '../components/Estoque';

export default function PClintes() {
    return (
        <>
            <Menu/>
            <Clientes/>
        </>
    )
}

export function PEstoque() {
    return (
        <>
            <Menu/>
            <Estoque/>
        </>
    )
}