import { useState } from 'react'
import './App.css'
import Form from './Form'
import PopUp from './Popup'
import DimasGayung from './assets/dimasgayung.jpeg'
import FrisianFlag from './assets/frisianflagcoklat.jpeg'
import PanteneHijab from './assets/pantenehijab.jpeg'
import CodinganError from './assets/codinganerror.jpeg'
import Bonek from './assets/bonek.jpeg'
import Alucard from './assets/alucard.jpeg'
import Kopi from './assets/kopi.jpeg'
import Tissue from './assets/tissue.jpeg'
import Baygon from './assets/baygon.jpeg'
import Rexona from './assets/rexona.jpeg'

function App() {
  const images = [DimasGayung,FrisianFlag,PanteneHijab,CodinganError,Bonek,Alucard,Kopi,Tissue,Baygon,Rexona]

  const [khodam,setKhodam] = useState([
    {
      id: 1,
      nama: "Dimas Gayung"
    },
    {
      id: 2,
      nama: "Frisian Flag Coklat"
    },
    {
      id: 3,
      nama: "Pantene Hijab"
    },
    {
      id: 4,
      nama: "Codingan Error"
    },
    {
      id: 5,
      nama: "Bonek Mania",
    },
    {
      id: 6,
      nama: "Alucard"
    },
    {
      id: 7,
      nama: "Torabika Creamy Latte"
    },
    {
      id: 8,
      nama: "Tissue Basah Aqua"
    },
    {
      id: 9,
      nama: "Baygon Rasa Jeruk"
    },
    {
      id: 10,
      nama: "Rexona Ice Dingin"
    },
  ])
  
  const [selectedKhodam, setSelectedKhodam] = useState(null); 
  const [showPopUp, setShowPopUp] = useState(false);

  const toggleCheck = () => {
    if (!showPopUp) {
      const randomIndex = Math.floor(Math.random() * 9);
      const selectedItem = khodam[randomIndex];
      setSelectedKhodam(selectedItem);
    }
    setShowPopUp(!showPopUp);
  };

  return (
    <>
      <Form onCheck={toggleCheck} />
      {showPopUp && (
        <PopUp
          khodam={selectedKhodam?.nama} 
          closePopUp={toggleCheck}
          imageSource={images[selectedKhodam?.id - 1]} 
        />
      )}
    </>
  );
}

export default App;