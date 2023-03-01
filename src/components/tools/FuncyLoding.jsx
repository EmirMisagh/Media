import React from 'react'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect,useMemo } from 'react';

export default function FuncyLoding() {
    useMemo(() => {
        nprogress.start();
        window.scrollTo({top:0 , behavior: 'smooth'})
      }, []);
     
    useEffect(() => {
        nprogress.done()
        window.scrollTo({top:0 , behavior: 'smooth'})
      },[]);
    return ( 
        <>
        </>
     );
}
