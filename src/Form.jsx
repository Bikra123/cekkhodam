import { useState } from "react"

export default function Form({onCheck}){
    
    const [name,setName] = useState('')

    const KhodamCheck = (e) =>{
        onCheck()
        e.preventDefault()
    }

    return (
        <>
            <h1>Cek Khodam by BikraDev</h1>
            <form onSubmit={KhodamCheck}>
                <label htmlFor="inputName">Masukkan Nama Anda</label>
                <input id="nama" value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Masukkan Nama" required/>
                <button type="submit">Cek Khodam</button>
            </form>
        </>
    )
}