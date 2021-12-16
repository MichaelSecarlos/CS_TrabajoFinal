import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import { useState } from 'react';
import { signInAdmin } from '../../../servicios/firebaseAdmin';
import './AdminLogin.css'

const AdminLogin:React.FC = () =>
{
    //Admin login info
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    function loginUser()
    {
        signInAdmin(username, password);
    }
    return (
        <div>
            <IonItem className="ion-margin">
                <IonLabel position="floating">Username</IonLabel>
                <IonInput  title="name" onIonChange={(e:any)=>setUserName(e.target.value)}></IonInput>
            </IonItem>
            <IonItem className="ion-margin">
                <IonLabel position="floating">Password</IonLabel>
                <IonInput title="password" onIonChange={(e:any)=>setPassword(e.target.value)}/>
            </IonItem>
            <IonButton title="login" onClick={loginUser}>Ingresar</IonButton>
        </div>
            
    );
}

export default AdminLogin;