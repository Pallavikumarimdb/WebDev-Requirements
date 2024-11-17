import React, { useEffect, useState } from 'react'

function UseEffect() {

    // const [count, setCount] = useState(0);
     
    // // setTimeout Should increase count once but it is increasing continuously after every 2 sec.
    // // Because we are using useEffect without any dependency.

    // ### useEffect Without dependency

    // useEffect( ()=>{
    //     setTimeout(()=>{
    //         setCount(count=>count+1);
    //     },2000)
    // })
// ...........................................................................................................

    const [count, setCount] = useState(0);

    // ### useEffect With dependency
    useEffect( ()=>{
        setTimeout(()=>{
            setCount(count=>count+1);
        },2000)
    },[])
    // Here it will run setTimeout only once after 2 sec


    
    // const [count, setCount] = useState(0);
    // useEffect( ()=>{
    //     setTimeout(()=>{
    //         setCount(count=>count+1);
    //     },2000)
    // },[count])
    // // Here it will execute this function when this components gets loaded after that whenever this count will change this will again executed


  return (
    <div>
      <h1>I have rendered {count} times!</h1>
    </div>
  )
}

export default UseEffect
