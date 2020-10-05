import React, { useRef, useState } from 'react';
import { IonApp, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonRange, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

  const [qualityValue, setQuality] = useState<'HD' | '4k'>('HD')
  const [priceValue, setPrice] = useState<number>(300)
  const [placeValue, setPlace] = useState<'floor' | 'roof'>('floor')
  const [distValue, setDistance] = useState<number>(3)
  const [widthValue, setWidth] = useState<number>(3)
  const [heightValue, setHeight] = useState<number>(3)

  const changeQuality = (event: CustomEvent) => {
    setQuality(event.detail.value);
  }

  const changePrice = (event: CustomEvent) => {
    setPrice(event.detail.value);
  }

  const changePlace = (event: CustomEvent) => {
    setPlace(event.detail.value);
  }

  const changeDistance = (event: CustomEvent) => {
    setDistance(event.detail.value);
  }

  const changeWidth = (event: CustomEvent) => {
    setWidth(event.detail.value)
  }

  const changeHeight = (event: CustomEvent) => {
    setHeight(event.detail.value)
  }

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Video Projecteur
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonItem>
          <IonLabel>Qualité de l'affichage</IonLabel>
          <IonSelect value={qualityValue} onIonChange={changeQuality}>
            <IonSelectOption>HD</IonSelectOption>
            <IonSelectOption>4k</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItemDivider></IonItemDivider>
        <IonItem>
          <IonLabel>Prix : {priceValue} €</IonLabel>
        </IonItem>
        <IonItem>
          <IonRange min={300} max={2000} pin={true} value={priceValue} onIonChange={changePrice}>
            <IonLabel slot="start">300 €</IonLabel>
            <IonLabel slot="end">2000 €</IonLabel>
          </IonRange>
        </IonItem>
        <IonItemDivider></IonItemDivider>
        <IonSegment value={placeValue} onIonChange={changePlace}>
          <IonSegmentButton value="floor">
            <IonLabel>Au sol</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="ceil">
            <IonLabel>Au plafond</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {placeValue === 'floor' &&
          <React.Fragment>
            <IonItemDivider></IonItemDivider>
            <IonItem>
              <IonLabel>Distance: {distValue} mètre{distValue > 1 ? 's' : ''}</IonLabel>
            </IonItem>
            <IonItem>
              <IonRange min={1} max={20} pin={true} value={distValue} onIonChange={changeDistance}>
                <IonLabel slot='start'>1m</IonLabel>
                <IonLabel slot='end'>20m</IonLabel>
              </IonRange>
            </IonItem>
          </React.Fragment>
        }
        <IonItemDivider></IonItemDivider>
        <IonItem>
      <IonLabel>Taille de l'écran : {widthValue} x {heightValue} m</IonLabel>
        </IonItem>
        <IonSegment>
          <IonItem className='ion-align-items-center'>
            <IonInput value={widthValue} placeholder="Enter width" onIonChange={changeWidth}></IonInput>
            <IonInput value={heightValue} placeholder='Enter height' onIonChange={changeHeight}></IonInput>
          </IonItem>
        </IonSegment>
      </IonContent>
    </IonApp>
  )
};

export default App;
