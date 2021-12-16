import { IonImg, IonGrid, IonRow, IonCol, IonLabel, IonIcon, IonButton } from "@ionic/react";
import { cartOutline} from "ionicons/icons"
import './ProductInfo.css'

interface ContainerProps

{
    id: string
    nombre: string
    descripcion: string
    tienda: string
    latitud: Number
    longitud: Number
}

const ProductInfo : React.FC<ContainerProps> = (props) => {
    return (
    <div className="ProductoInfo">
        <IonGrid>
            <IonRow>
                <IonCol size="8">
                    <div>
                        <strong>{props.nombre}</strong>
                    </div>
                    <div>
                        <IonLabel>{props.descripcion}</IonLabel>
                    </div>
                    <div>
                        <IonLabel>{ props.tienda}</IonLabel>
                    </div>
                </IonCol>
                <IonCol size="4">
                    <IonButton color="success">
                        <IonLabel>Agregar al carrito</IonLabel>
                        <IonIcon icon={ cartOutline } />
                    </IonButton>
                </IonCol>
            </IonRow>  
        </IonGrid>
    </div>
    )
}

export default ProductInfo