import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Login from '../../components/ComponentesUsuario/Cliente/Login';

test('Test de campos vacios', async () => {
    const { findByTitle } = render(<Login />);
    const emailInput = await findByTitle('email');  
    const passwdInput = await findByTitle('password');
    
    emailInput.nodeValue = "";
    passwdInput.nodeValue = "";
    
    const login = await findByTitle('login');
    fireEvent.click(login);
});

test('Test de credenciales invalidas', async () => {
    const { findByTitle } = render(<Login />);
    const emailInput = await findByTitle('email');  
    const passwdInput = await findByTitle('password');
    
    emailInput.nodeValue = "correoinvalido@a.com";
    passwdInput.nodeValue = "invalidpassword";
    
    const login = await findByTitle('login');
    fireEvent.click(login);
});

test('Test credenciales validas', async () => {
    const { findByTitle } = render(<Login />);
    const emailInput = await findByTitle('email');  
    const passwdInput = await findByTitle('password');
    
    emailInput.nodeValue = "noadmin@mail.com";
    passwdInput.nodeValue = "michael";
    
    const login = await findByTitle('login');
    fireEvent.click(login);
});
