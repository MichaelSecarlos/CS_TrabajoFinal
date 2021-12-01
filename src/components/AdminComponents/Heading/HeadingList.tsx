import { IonButton, IonCol, IonGrid, IonIcon, IonLabel, IonRow } from '@ionic/react';
import {closeCircleOutline, earthOutline, trashOutline} from 'ionicons/icons'
import './HeadingList.css';
interface ContainerProps { }

const HeadingList: React.FC<ContainerProps> = () => {
  return (
    <div className="HeadingItemList">
        <IonIcon icon={earthOutline}/>
        <IonGrid>
            <IonRow>
                <IonCol size="10">
                    <div>
                        <strong>NombreRubro</strong>
                    </div>
                    <div>
                        <IonLabel>DescripcionRubro</IonLabel>
                    </div>
                </IonCol>
                <IonCol size="2">
                    <IonButton color="danger">
                        <IonIcon icon={trashOutline}/>
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  );
};

export default HeadingList;
