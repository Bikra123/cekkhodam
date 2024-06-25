import './App.css'

export default function PopUp({khodam,imageSource,closePopUp}){

    return (
        <>
           <div className="popup">
                <div className="popup-inner">
                    <h2>Khodam Anda Adalah</h2>
                    <img src={imageSource} alt="khodam_anda" />
                    <p>{khodam}</p>
                    <button onClick={closePopUp}>Close</button>
                </div>
           </div>
        </>
    )
}