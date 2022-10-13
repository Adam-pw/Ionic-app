import "./User.css";
import React, { useEffect, useState } from "react";
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { logOutOutline } from "ionicons/icons";
import { getAuth } from "firebase/auth";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const User: React.FC = () => {
  const [user, setUser] = useState<DocumentData>();
  const auth = getAuth();
  const fireUser = auth.currentUser

  const getUserdetails = async () => {
    if(fireUser){
    const docRef = doc(db, "User", fireUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUser(docSnap.data());
      console.log(docSnap.data())
    } else {
      console.log("No such document!");
    }
  }
  };

  useEffect(() => {
    getUserdetails();
  }, []);

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
            {user &&<IonAvatar class="avatar">
              <img src={user.profilrPic} alt="" />
            </IonAvatar>}
          </IonCardHeader>
          <IonCardHeader>
            {user && <IonCardTitle className="ion-text-center">
              {user.name}
            </IonCardTitle>}
            {user &&<IonCardContent className="ion-text-center">
            {user.email}
            </IonCardContent>}
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">
              Account Balance
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent className="ion-text-center">
            {user &&<h1>{user.points} Points</h1>}
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
