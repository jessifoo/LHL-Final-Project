import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Notify() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    function checkLogin() {
        const userObject = localStorage.getItem('notifyUser');
        console.log('USEROBJ: +++++++++++', userObject);
    
        if (!userObject) {
            navigate('/auth');
        }
        setUser(JSON.parse(userObject));
    }

    useEffect(() => {
        checkLogin();
    }, []);

    return '<h2>This is Notify</h2>';
}