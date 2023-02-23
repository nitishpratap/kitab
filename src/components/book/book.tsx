import './style.css'
import {Text} from "../text/texts";
import {RentButton} from "../buttons/button";

export const Book = (props: any) => {
    return (
        <div className={"book"}>
            <div style={{width : '140px', height : '13rem'}}>
                <img src={props.img} alt={"book"} width={'100%'} height={'100%'}/>
            </div>

            <div style={{textAlign : "center", marginTop : '20%', marginLeft : '14%'}}>
                <Text text={props.title} textStyle = 'book-name' fontWeight = {550}/>
                <div style={{paddingTop : '1rem'}}><RentButton/></div>
            </div>
        </div>
    )
}
