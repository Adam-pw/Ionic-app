import { IonPage, IonButton } from "@ionic/react";
import "./Login.css";
import { app, db } from "../firebaseConfig";
import { useHistory } from "react-router";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const Login: React.FC = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName!;
        const email = result.user.email!;
        const profilePic = result.user.photoURL!;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);

        setDoc(doc(db, "User", result.user.uid),{
          name: name,
          email: email,
          phrofilePic: profilePic,
          points: 1000,
        })

        window.location.href = '/tab1'
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <IonPage>
      <IonButton className="login" expand="block" onClick={signInWithGoogle}>
        Login with Google
      </IonButton>
    </IonPage>
  );
};

export default Login;
