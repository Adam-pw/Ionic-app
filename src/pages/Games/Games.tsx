import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
} from "@ionic/react";
import { getAuth } from "firebase/auth";
import { doc, DocumentData, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { db } from "../../firebaseConfig";

const Games: React.FC = () => {
  const [user, setUser] = useState<DocumentData>();
  const history = useHistory();
  const auth = getAuth();
  const fireUser = auth.currentUser;

  const getUserdetails = async () => {
    if (fireUser) {
      const docRef = doc(db, "User", fireUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("No such document!");
      }
    }
  };

  useEffect(() => {
    getUserdetails();
  }, []);

  const DeductPoint = async () => {
    if (user) {
      if (fireUser) {
        const ded = user.points + 100;
        const docRef = doc(db, "User", fireUser.uid);
        await updateDoc(docRef, {
          points : ded,
        });
        return history.push("/tab1");
      }
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Game Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Game Info</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonInfiniteScroll>
          <IonInfiniteScrollContent>
            <IonCard>
              <IonCardTitle>Game Name</IonCardTitle>
              <br></br>
              <IonCardSubtitle>Game Rules</IonCardSubtitle>
              <IonCardContent>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim eveniet, harum tenetur eius soluta sint repudiandae
                    pariatur commodi. Cupiditate minima tenetur vel natus!
                    Reiciendis nulla, nihil sunt velit adipisci eaque illo
                    maxime?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim eveniet, harum tenetur eius soluta sint repudiandae
                    pariatur commodi. Cupiditate minima tenetur vel natus!
                    Reiciendis nulla, nihil sunt velit adipisci eaque illo
                    maxime?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim eveniet, harum tenetur eius soluta sint repudiandae
                    pariatur commodi. Cupiditate minima tenetur vel natus!
                    Reiciendis nulla, nihil sunt velit adipisci eaque illo
                    maxime?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim eveniet, harum tenetur eius soluta sint repudiandae
                    pariatur commodi. Cupiditate minima tenetur vel natus!
                    Reiciendis nulla, nihil sunt velit adipisci eaque illo
                    maxime?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim eveniet, harum tenetur eius soluta sint repudiandae
                    pariatur commodi. Cupiditate minima tenetur vel natus!
                    Reiciendis nulla, nihil sunt velit adipisci eaque illo
                    maxime?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim eveniet, harum tenetur eius soluta sint repudiandae
                    pariatur commodi. Cupiditate minima tenetur vel natus!
                    Reiciendis nulla, nihil sunt velit adipisci eaque illo
                    maxime?
                  </li>
                </ul>
                <IonButton onClick={DeductPoint}>Play</IonButton>
              </IonCardContent>
            </IonCard>
          </IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default Games;
