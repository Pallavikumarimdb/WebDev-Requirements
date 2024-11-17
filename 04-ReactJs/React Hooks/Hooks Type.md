
# What is React Hooks?
> Hooks: Hooks are special functions, that allow us to use state and other React features in function components.

> Earlier, When we used to create react app using Functional component, then we didn't have access to the state management and lifecycle methods.

To access these features we had to add class components.

> So, this was the problem with functional component.

> But after introducing React Hooks from version 16.8, we can now use state management and other react features without writing class components.

In other words, Hooks are the functions that make functional components work like class components.

## Benifits of React Hooks:
> React hooks simplify the code, improves the readability, reusability and overall performance of the application.

## Most commonly used hooks are:
1. UseState
2. useEffect
3. useRef
4. useMemo
5. useCallback
6. useContext
7. useReducer
8. useLayoutEffect
9. Custom hook


# 1. useState:
> useState is a react hook, which creates an "state variable". Which helps us to track state in components and updates the user interface when state changes.

```jsx
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
```



# 2. useEffect:
> The useEffect Hooks you to perform side effects in your components.


### Some examples of side effects are:
- Fetching data from API
- Directly updating the DOM
- Timers like SetTimeOut and SetInterval


## There are 3 ways to use useEffect:
- Without dependency
- With empty dependency
- With one/multiple dependency


### useEffect Without dependency
```jsx
const [count, setCount] = useState(0);

    useEffect( ()=>{
        setTimeout(()=>{
            setCount(count=>count+1);
        },2000)
    })
```
Problem 1:
> This counter will start from 2 directly. This problem is happning because of react strict mode.
> StrictMode is additional runtime check for development environment to make sure your app is safe.

> To overcome this problem / to tern this off remove 
</React.StrictMode> from main/index.jsx


Problem 2:
> setTimeout Should increase count once but it is increasing continuously after every 2 sec.
Sol: 
> Because we are using useEffect without any dependency.


### useEffect With dependency

```jsx
    const [count, setCount] = useState(0);
    useEffect( ()=>{
        setTimeout(()=>{
            setCount(count=>count+1);
        },2000)
    },[])
    // Here it will run setTimeout only once after 2 sec
```

### With one/multiple dependency (Dependency array with variable):

```jsx

    const [count, setCount] = useState(0);
    useEffect( ()=>{
        setTimeout(()=>{
            setCount(count=>count+1);
        },2000)
    },[count])
    // Here it will execute this function when this components gets loaded after that whenever this count will change this will again executed
```

```jsx

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Pallavi");
    useEffect( ()=>{
        setTimeout(()=>{
            setCount(count=>count+1);
        },2000)
    },[count, name])

    // now whenever this name will change the function will get executed as well
```
