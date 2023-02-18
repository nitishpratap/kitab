import {Text} from "../text/texts";
import './style.css'

export const Genres = (props: any) => {
    // console.log("props:::", props.img)
    return (
        <>
            <div className={'mainDiv'}>
                <div style={
                    {
                        paddingTop : '1rem'
                    }
                }>
                    {props.img && <img src={props.img}/>}
                </div>
                <div style={
                    {
                        marginTop: '3rem'
                    }
                }>
                    <Text textStyle="regular" text={props.text}/>
                </div>
            </div>
        </>
    )
}
