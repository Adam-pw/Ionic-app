import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import User from '../components/User/User';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
      <User/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
