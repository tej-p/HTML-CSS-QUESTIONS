import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios";
import { setCities } from "../redux/actions/cityActions";

export const CityList = () => {
    const cities = useSelector((state)=> state);
    const dispatch = useDispatch();

    const fetch = async () => {
        const res = await axios.get("https://localhost:8080/cities").catch((er) => {
            console.log(er.message);
        })

        console.log(res);
        dispatch(setCities(res));
    }

    useEffect(()=>{
        fetch();
    },[]); 

    console.log(cities); 
    return <div>
        <City ></City>
    </div>
}