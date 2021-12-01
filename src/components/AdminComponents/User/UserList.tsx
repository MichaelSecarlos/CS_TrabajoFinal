import { IonButton, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonRow } from '@ionic/react';
import {closeCircleOutline, personOutline, scale, trashOutline} from 'ionicons/icons'
import './UserList.css';
interface ContainerProps { }

const UserItemList: React.FC<ContainerProps> = () => {
  return (
    <div className="UserItemList">
        <IonIcon icon={personOutline}/>
        <IonGrid>
            <IonRow>
                <IonCol size="10">
                    <div>
                        <strong>UserName</strong>
                    </div>
                    <div>
                        <IonLabel>UserLastname</IonLabel>
                    </div>
                    <div>
                        <IonLabel>UserEmail</IonLabel>
                    </div>
                    <div>
                        <IonLabel>UserPhoneNumber</IonLabel>
                    </div>
                </IonCol>
                <IonCol size="2">
                    <IonButton color="danger">
                        <IonIcon icon={trashOutline}/>
                    </IonButton>
                    <IonButton color="light">
                        <IonIcon icon={closeCircleOutline}/>
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  );
};

export default UserItemList;
