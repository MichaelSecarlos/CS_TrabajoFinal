import { IonLoading, IonRouterOutlet , IonCol,  IonButton, IonRow, IonInput, IonLabel, IonItem } from '@ionic/react';
import React, { useContext, useState, useEffect } from 'react';
import { collection, getDocs} from "firebase/firestore";
import { IonReactRouter } from '@ionic/react-router';
import { Route, Link } from 'react-router-dom'
import { db } from '../../../firebaseConfig'
import { SesionContext } from "../../../Contexto/Sesion/Context"
import { CarritoContext } from "../../../Contexto/Carrito/Context"
import ListaProductos from './ListaProductos'
import PedidoInfo from './Pedido/PedidoInfo';
import Pedido from '../../../pages/Pedido/Pedido' //para el ṕago
import Collapsible from "react-collapsible";
import './ContentProduct.css'

interface ContainerProps {}

const ContentProduct:React.FC<ContainerProps> = () => {

  const { sesion } = useContext(SesionContext)
  const { carrito } = useContext(CarritoContext)

  const [busqueda, setBusqueda] = useState('a')
  const [arrayProductos, setArrayProductos] = useState([{}]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function obtenerProductos()
    {
        setArrayProductos([
            {id : "0", nombre : "Televisor", descripcion:"Televisor LP de 52 pulgadas", tienda: "BigStore", latitud:0, longitud:0 },
            {id : "0", nombre : "Computador", descripcion:"Computadora de 5ta generacion", tienda: "BestShop", latitud:1, longitud:1},
            {id : "0", nombre : "Celular", descripcion:"Celular del 2019", tienda: "TechStore", latitud:2, longitud:2},
        ])
      setLoading(false)
    } 
    obtenerProductos()
  }, [loading])

  if (loading) {
      return <IonLoading
      isOpen={loading}
      onDidDismiss={() => setLoading(false)}
      message={'Obteniendo Tiendas Cercanas'}
    />
  }

  return (

    <IonRow>
      <IonCol  sizeLg="8">
        <ListaProductos arrayProductos={arrayProductos}/>
      </IonCol >
      <IonCol sizeLg="4" className="ion-text-center">
        <IonRow>
          <IonCol>
            <h5>Mis Pedidos</h5>
            <PedidoInfo />
          </IonCol>
        </IonRow>
      </IonCol>
    </IonRow>
  );
};

export default ContentProduct;
