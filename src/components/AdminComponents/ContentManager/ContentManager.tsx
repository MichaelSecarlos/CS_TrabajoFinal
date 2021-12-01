import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonRow } from '@ionic/react';
import CategoryList from '../Category/CategoryList';
import HeadingList from '../Heading/HeadingList';
import StoreItemList from '../Store/StoreList';
import UserItemList from '../User/UserList';
import './ContentManager.css';

interface ContainerProps { }

const ContentManager: React.FC<ContainerProps> = () => {
  return (
    <div className="ContentManager">
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonButton>Rubros y Categorias</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton>Usuarios</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton>Tiendas</IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="floating">Buscar</IonLabel>
                        <IonInput></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>
        </IonGrid>
        <IonGrid>
            <IonRow>
                <IonCol>
                    <UserItemList/>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <StoreItemList/>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <HeadingList/>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <CategoryList/>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
  );
};

export default ContentManager;
