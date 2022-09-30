import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import GamesCard from '../components/GamesCard/GamesCard';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Games</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Games</IonTitle>
          </IonToolbar>
        </IonHeader>
        <GamesCard/>
        <br></br>
        <br></br>
        <br></br>
        <GamesCard/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
