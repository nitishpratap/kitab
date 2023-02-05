import {Button} from "@mui/material";
import './buttonStyles.css'
import React, {useState} from "react";
interface buttonTitle {
    title: string;

}
interface normalButtonProps {
    title : String,
    width : number,
    height : number,
}
export const RedBackgroundButton = (props : buttonTitle) => {

    return <div>
        <Button variant="contained" style={{ width: 170, height: 40, backgroundColor: '#D3302F',border : "none",color : 'white'}}>{props.title}</Button>
    </div>
}

export const NormalButton = (props : normalButtonProps)=>{
    const red : String = '#D3302F'
    const white : String = '#FFFFFF'
const [textColor,setTextColor] = useState(red)
    const handleMouseEnter = () => {
        setTextColor(white);
    };
    const handleMouseLeave = () => {
        setTextColor(red);
    };
    const buttonSX = {
        "&:hover": {
            backgroundColor : '#D3302F',
            color : '#FFFFFF',
        },
    };
    return <div >
        <Button onMouseEnter={()=>{handleMouseEnter()}} onMouseLeave={()=>{handleMouseLeave()}} sx={buttonSX} variant="outlined" style={{width : props.width, height : props.height, borderColor : '#D3302F', borderWidth : 2, color :  `${textColor}`}} className="normal-button" >{props.title}</Button>
    </div>
}

export const RentButton = ()=>{
    return <NormalButton  width={60} height={35} title={"Rent"}  />
}


