import React from 'react'
import {IonCol, IonGrid, IonHeader,IonPage, IonRow, IonTitle, IonToolbar} from '@ionic/react'
import './Admin.css'
import ContentManager from '../../components/AdminComponents/ContentManager/ContentManager'

const Admin: React.FC = () =>
{
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Vista de administracion
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <ContentManager/>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonPage>    
    );
}

export default Admin;