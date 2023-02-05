import {Button} from "@mui/material";
interface buttonTitle {
    title: string;
}
export const RedBackgroundButton = (props : buttonTitle) => {

    return <div>
        <Button variant="contained" >{props.title}</Button>
    </div>
}

export const NormalButton = (props : buttonTitle)=>{
    return <div>
        <Button variant="outlined">{props.title}</Button>

    </div>
}
