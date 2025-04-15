// create your App component here
import { useState, useEffect } from "react"
function App(){
    const [dogImage, setDogImage] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response)=>response.json())
        .then((data)=>{
            setDogImage(data.message)
            setLoading(false)
        })
    },[dogImage])
  
        if (loading) {
           return <p>Loading...</p>
        }
    return (
        <img src="https://images.dog.ceo/breeds/bulldog-english/mami.jpg" alt="A Random Dog"/>
    )

}
export default App
