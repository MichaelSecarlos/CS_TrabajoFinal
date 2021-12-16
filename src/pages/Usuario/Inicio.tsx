import { Link,Router } from "react-router-dom";
import { toast } from "../../components/toast";
import { useHistory } from "react-router";
import { useState, useEffect, useContext } from "react";
import { setDataCliente, logOutCliente, useCliente } from '../../servicios/firebaseCliente';
import { IonButton, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react'

import Login from '../../components/ComponentesUsuario/Identificación/ContentUser'
import Productos from '../../components/ComponentesUsuario/Productos/ContentProduct'
import { SesionContext } from "../../Contexto/Sesion/Context";

const UsuarioLogin: React.FC = () => {
    const history = useHistory()
    const currentCliente = useCliente()

    const { sesion, setData } = useContext(SesionContext)

    function signOutCliente() {
        logOutCliente()
            .then(() => {
                toast('Se ha cerrado sesión')
                history.push('/')
            })
            .catch(() => {
                toast('Error en el cierre de sesión')
            })
    }

    useEffect ( function() {
        if (currentCliente) {
            setDataCliente(currentCliente.uid, setData)   
        }
    }, [currentCliente]) // MUY IMPORTANTE -> si no esta, puede crear bucles infinitos

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle >
                        <IonLabel>Aplicación</IonLabel>
                    </IonTitle>
                    {
                        currentCliente ?
                            <IonButton title="cerrarSesion" slot='end' shape="round" color="success" onClick={signOutCliente}>
                                {sesion.nombre}<b>_Salir</b>
                            </IonButton>

                            : null
                    }
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {
                    currentCliente ?
                    <>
                    <Productos />
                    </>
                    : <Login />
                }
            </IonContent>
        </IonPage >
    );

}

export default UsuarioLogin;