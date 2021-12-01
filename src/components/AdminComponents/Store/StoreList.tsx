import { IonButton, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonRow } from '@ionic/react';
import {closeCircleOutline, storefrontOutline, trashOutline} from 'ionicons/icons'
import './StoreList.css';

interface ContainerProps { }

const StoreItemList: React.FC<ContainerProps> = () => {
  return (
    <div className="StoreItemList">
        <IonIcon icon={storefrontOutline}/>
        <IonGrid>
            <IonRow>
                <IonCol size="10">
                    <div>
                        <strong>StoreName</strong>
                    </div>
                    <div>
                        <IonLabel>StoreRUC</IonLabel>
                    </div>
                    <div>
                        <IonLabel>StoreMail</IonLabel>
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

export default StoreItemList;
