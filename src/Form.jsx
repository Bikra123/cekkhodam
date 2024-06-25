export default function Form({onCheck}){

    const KhodamCheck = (e) =>{
        e.preventDefault()
        onCheck()
    }

    return (
        <>
            <h1>Cek Khodam by BikraDev</h1>
            <form onSubmit={KhodamCheck}>
                <label htmlFor="inputName">Masukkan Nama Anda</label>
                <input type="text" placeholder="Masukkan Nama" required/>
                <button type="submit">Cek Khodam</button>
            </form>
        </>
    )
}