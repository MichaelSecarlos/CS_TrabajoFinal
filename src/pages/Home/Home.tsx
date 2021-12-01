import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Title</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <ExploreContainer />
            <IonButton routerLink="/admin">
                Ir a administracion
            </IonButton>
        </IonContent>
    </IonPage>
    );
};

export default Home;
