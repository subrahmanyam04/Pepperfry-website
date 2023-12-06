import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { logout } from '../redux/actions/userActions';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';




function Timer() {
    // const dispatch = useDispatch()

    const navigate = useNavigate()
    const handleSignout = () => {
        signOut(auth).then(val => {
            console.log(val, "val")
            navigate('/')
            localStorage.clear()
        })
    }
    const checkExpireTime = () => {
        let expritiontime = localStorage.getItem("experationtime")
        console.log('timer is', expritiontime)
        if (expritiontime) {

            setInterval(function () {
                // console.log(expritiontime*1 < Date.now(), expritiontime*24, Date.now())
                if (expritiontime * 1 < Date.now()) {
                    // alert('hii')
                    handleSignout()

                    clearTime()
                    navigate('/')
                }
            }, 1000 * 60)
        } else {
            clearInterval()
        }
    }
    const clearTime = () => {
        clearInterval()
    }


    useEffect(() => {
        checkExpireTime()
    }, [])

    return (
        <div>

        </div>
    )
}

export default Timer;