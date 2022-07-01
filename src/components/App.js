// create your App component here

import React, { useState, useEffect } from "react";


function App() {

    const [dogImage, setDogImage] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            setDogImage(data.message)
            setIsLoaded(true)
        })
    }, [])

    return(
        <div>
            {isLoaded ? (
                <img src={dogImage} alt="A Random Dog"></img> ):(
                    <p>Loading...</p>
            )}
        </div>
    )
                }
export default App