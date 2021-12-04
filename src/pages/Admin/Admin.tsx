import React from 'react'
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonPage, IonRow, IonTitle, IonToolbar} from '@ionic/react'
import './Admin.css'
import ContentManager from '../../components/AdminComponents/ContentManager/ContentManager'
import { person, personOutline, personRemove } from 'ionicons/icons'

const Admin: React.FC = () =>
{
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Administracion
                    </IonTitle>
                    <IonButton slot="end" shape="round" color="success">
                        <IonIcon icon={person}/>
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                            <ContentManager/>
            </IonContent>
        </IonPage>    
    );
}

export default Admin;