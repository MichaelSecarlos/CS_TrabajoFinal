import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Admin from './Admin';
import AdminLogin from '../../components/AdminComponents/Login/AdminLogin';

test('Test de campos vacios', async () => {
    const { findByTitle } = render(<AdminLogin />);
    const nameInput = await findByTitle('name');  
    const passwdInput = await findByTitle('password');

    nameInput.nodeValue = "";
    passwdInput.nodeValue = "";

    const login = await findByTitle('login');
    fireEvent.click(login);
});

test('Test de credenciales invalidas', async () => {
    const { findByTitle } = render(<AdminLogin />);
    const nameInput = await findByTitle('name');  
    const passwdInput = await findByTitle('password');

    nameInput.nodeValue = "Nombre invalido para administrador";
    passwdInput.nodeValue = "Contraseña invalida para administrador";

    const login = await findByTitle('login');
    fireEvent.click(login);
});

test('Test de credenciales validas', async () => {
    const { findByTitle } = render(<AdminLogin />);
    const nameInput = await findByTitle('name');  
    const passwdInput = await findByTitle('password');

    nameInput.nodeValue = "admin@mail.com";
    passwdInput.nodeValue = "michael";

    const login = await findByTitle('login');
    fireEvent.click(login);
});
