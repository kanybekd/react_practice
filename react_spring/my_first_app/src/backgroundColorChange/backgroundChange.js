import { useState } from 'react';

function BackgroundChanger() {
    const colorArray = ['green', 'teal', 'tomato', 'lightgrey', 'aqua', 'red', 'lightblue', 'yellow']
    const [colorIndex, setColorIndex] = useState(1)

    const changeColor = () => {
        // console.log('change color function is clicked')

        const randomIndex = Math.floor(Math.random() * colorArray.length)
        // 0.1212*1=0.4545=1
        setColorIndex(randomIndex)
        // color = 'teal'
    }
    const nextColor = () => {
        if (colorIndex === colorArray.length - 1) {
            setColorIndex(0)
            return
        }
        setColorIndex(colorIndex + 1)
    }
    const prevColor = () => {
        if (colorIndex === 0) {
            setColorIndex(colorArray.length - 1)
            return
        }
        setColorIndex(colorIndex - 1)
    }
    console.log(colorIndex, "<<<<<<<<")

    return (
        <div style={{ backgroundColor: colorArray[colorIndex], height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* <div style={{ backgroundColor: "teal", height: "100vh", position: 'relative' }}> */}
            {/* <button style={{ position: "absolute", top: "50%", left: "50%", padding: '10px', transform: `translateX(-50%) translateY(-50%)` }}>Change Color</button> */}
            <button style={{ padding: '10px' }} onClick={changeColor}>Change Color</button>
            <button onClick={nextColor}>increment</button>
            <button onClick={prevColor}>decrement</button>
        </div>
    )
}

export default BackgroundChanger;

// function randomGenerator() {

//     //return random from 0 to 10
//     return Math.random()

// }



// function asdsad() {
//     const age = 10
//     if (age > 15) {
//         return 10
//     }
//     return 20

// }

// asdsad()+50=60

// backgroundColorChanger


// assign one button to change background colors randomly
