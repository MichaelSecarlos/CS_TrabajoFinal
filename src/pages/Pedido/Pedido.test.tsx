import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import LocalizacionBoton from '../../components/LocalizacionBoton';

test('Test de ubicacion', async () => {
    const { findByTitle } = render(<LocalizacionBoton setCoord={ [-16.40, -71.53]}/>);
    const botonLocalizar = await findByTitle('botonLocalizacion');
    fireEvent.click(botonLocalizar);
});
