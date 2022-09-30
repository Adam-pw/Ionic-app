import "./User.css";
import React from "react";
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { pin, logOutOutline, wine, warning, walk } from "ionicons/icons";

const User: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonAvatar class="avatar">
              <img src="assets/icon.png" alt="" />
            </IonAvatar>
          </IonCardHeader>
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">
              Adam Pithenwala
            </IonCardTitle>
            <IonCardContent className="ion-text-center">
              adampithewan@gmail.com
            </IonCardContent>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">
              Account Balance
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent className="ion-text-center">
            <h1>10,000 Points</h1>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={logOutOutline} slot="start" />
            <IonLabel>Logout</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default User;
