import { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";



const Home = ()=>{
    const navigate = useNavigate()


    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    },[])
    
    return(
        <div>
            <Header />
            Welcome to Home..
        </div>
    );
}

export default Home;