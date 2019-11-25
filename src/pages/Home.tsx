import {
  IonButtons,
  IonCard,
  IonChip,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonGrid,
  IonCol,
  IonRow,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
  } from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';
import './Home.css';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';


const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          {/* <img src="/assets/shapes.svg" alt=""/> */}
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to NFC Security Tester</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              This is app is to Read NFC Cards and possibly clone the NFC Card. This is to test 
              security intergrity of the NFC technology be it a Tap card or Tag.
            </p>
          </IonCardContent>
        </IonCard>

        <IonContent>
          <IonRow class="ion-justify-content-center">
            <IonCol size="6" class="ion-justify-content-center ion-padding-horizontal">
              <IonChip outline class="ion-padding-horizontal">
                <IonIcon name="pin" color="primary" />
                <IonLabel>Read NFC</IonLabel>
              </IonChip>
            </IonCol>
            <IonCol size="6" class="ion-justify-content-center ion-padding-horizontal">
              <IonChip outline class="ion-padding-horizontal">
                <IonIcon name="pin" color="primary" />
                <IonLabel>Clone NFC</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>

        </IonContent>




        {/* <IonList lines="none">
          <IonListHeader>
            <IonLabel>Resources</IonLabel>
          </IonListHeader>
          <IonItem href="https://ionicframework.com/docs/" target="_blank">
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Ionic Documentation</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
            <IonIcon slot="start" color="medium" icon={build} />
            <IonLabel>Scaffold Out Your App</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
            <IonIcon slot="start" color="medium" icon={grid} />
            <IonLabel>Change Your App Layout</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
            <IonIcon slot="start" color="medium" icon={colorFill} />
            <IonLabel>Theme Your App</IonLabel>
          </IonItem>
        </IonList> */}
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
