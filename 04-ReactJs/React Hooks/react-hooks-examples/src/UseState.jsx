import React from 'react'
import {useState} from 'react'
function UseState(){
    // .....................EX-1.....................
    const [color, setColor] = useState('Red');
    const changeColor = () => {
        setColor('Blue')
    }
// ....................EX-2......................

// const [brand, setBrand] = useState('Ferrari');
// const [model, setModel] = useState('Ferrari');
// const [year, setYear] = useState('2023');
// const [color1, setColor1] = useState('red');

// Instead of creating multiple state variable we can create a state object

const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2023",
    color: "red"
});

// update color

const changeColor1 = ()=>{
    // this will reinitialize car with only color
    // setCar({color:"red"})

    setCar((prev) => {
        return {...prev, color:"blue"}
    })
}

// ..............................EX-3...................................



const [count, setcount]=useState(0);

const increaseCount = ()=>{
    setcount(count+1);
}

// Note: Let we want to increase value 4 times:
// const increaseCount4 = ()=>{
//     setcount(count+1);  // 1
//     setcount(count+1);  // here ahain it will initialise from 0 make it 1
//     setcount(count+1);  //here ahain it will initialise from 0 make it 1
//     setcount(count+1);  // here ahain it will initialise from 0 make it 1
// }

// How to increase count 4 directly?
const [count4, setcount4]=useState(0);
const increaseCount4 =()=>{
    setcount4(count4=>count4+4)
    // setcount(count4=>count4+1); //1
    // setcount(count4=>count4+1); //2
    // setcount(count4=>count4+1); //3
    // setcount(count4=>count4+1); //4
}

    return(
        <>
        <h1>{color}</h1>
        <button onClick={changeColor}>changeColor</button>

        {/* // .......................................... */}

        <h1>My {car.brand}</h1>
        <h2>it is a {car.color} {car.model} from {car.year}</h2>
        <button onClick={changeColor1}>Blue</button>

        {/* // .......................................... */}

        <h1>count:{count}</h1>
        <button onClick={increaseCount}>increaseCount</button>

        <h1>count increase by 4:{count4}</h1>
        <button onClick={increaseCount4}>increaseCount by 4</button>
        </>
    )

}
export default UseState;