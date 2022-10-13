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
import { scan, informationCircleOutline } from "ionicons/icons";

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
            <div className="buttons">
              <IonButton href='/games' size="small">
                <IonIcon icon={informationCircleOutline} slot="start" />
                Details
              </IonButton>
              <IonButton size="small">
                <IonIcon icon={scan} slot="start" />
                Scan
              </IonButton>
            </div>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default GamesCard;
