import "./GamesCard.css";
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

const GamesCard: React.FC = () => {
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
            <img src="assets/download.jpg" alt="" />
          </IonCardHeader>
          <IonCardHeader>
            <IonCardTitle>Game Name</IonCardTitle>
            <IonCardContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              consectetur facere nemo alias culpa ab unde atque voluptates! Quas
              aperiam at similique soluta, atque voluptatem corrupti ea ipsa
              vitae omnis reprehenderit veniam obcaecati! Eum, quo.
            </IonCardContent>
              <IonButton size="small">Default</IonButton>
              <IonButton size="small">Default</IonButton>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default GamesCard;
