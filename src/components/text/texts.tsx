import {grey} from "@mui/material/colors";

export const BlackText = (props: any) => {
    return (
        <div>
            {props.text}
        </div>
    )
}

export const GreyText = (props: any) => {
    return (
        <div>
            {props.text}
        </div>
    )
}

export const BlackHeadingText = (props: any) => {
    return (
        <div>
            {props.text}
        </div>
    )
}

export const RedHeadingText = (props: any) => {
    return (
        <div>
            {props.text}
        </div>
    )
}

export const NormalRedText = () => {
    return (
        <div>

        </div>
    )
}
export const BlackBoldText = () => {
    return (
        <div>

        </div>
    )
}

export const GreyBoldText = () => {
    return (
        <div>

        </div>
    )
}

export const Text = (props: any) => {
    let textStyle = {
        fontWeight: props.fontWeight,
        fontSize: '1.2em',
        color: '#212121'
    }
    switch (props.textStyle) {
        case 'regular':
            textStyle = {
                ...textStyle,
                color: '#212121'
            }
            break;
        case 'regular-red' :
            textStyle = {
                ...textStyle,
                color:  '#D3302F'
            }
            break;
        case 'regular-Heading':
            textStyle = {
                ...textStyle,
                fontSize: '1.835rem',
                color:  '#212121',
                fontWeight: 600
            }
            break;
        case 'heading-red':
            textStyle = {
                ...textStyle,
                fontSize: "1.875rem",
                color: '#D3302F'
        }
        break;
        case 'book-name' :
        textStyle = {
            ...textStyle,
            fontSize: "1.2rem",
            color: "grey"
        }
        break
        default : {

        }
    }
    return (
        <div style={textStyle}>
            {props.text}
        </div>
    )
}




