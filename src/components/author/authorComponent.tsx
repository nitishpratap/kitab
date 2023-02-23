import {Text} from "../text/texts";
// @ts-ignore
import author from '../../assets/images/3780.jpg'
import "./style.css"
export const AuthorComponent = (props : any)=>{
    return(
        <>
            <div className={"author"}>
                <img src={author} alt={"author"} style={{width : '100%',height : '90%'}} />
                <Text text = {props.text} type = 'regular-Heading' fontWeight  = {600} />
            </div>
        </>
    )
}
