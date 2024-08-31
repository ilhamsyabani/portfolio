import React, {useState, useEffect } from 'react'
import { set } from 'react-hook-form';

function useScrollProgress() {
    const [completion, setCompletion] =useState(0);

    useEffect(()=>{
       const updateSrollCompletion = () =>{
        const currentProgress = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;

        if(scrollHeight){
            setCompletion(Number(currentProgress/scrollHeight).toFixed(2)*100);
        }
       };

       //
       window.addEventListener('scroll', updateSrollCompletion);

       return()=> window.removeEventListener('scroll', updateSrollCompletion);
    }, []);

  return completion;
}

export default useScrollProgress