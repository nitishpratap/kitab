import './style.css'
// @ts-ignore
import logo from '../../assets/images/logo.svg'

export const Header = () => {
    return (
        <>
            <div className={'header flex'}>
                <div>
                    <img src={logo} className={"logo"}/>
                </div>

                <div>
                    <input type="text" name="q" pattern="[a-zA-Z0-9\s]+" placeholder="Search..."/>
                </div>

                <div>

                </div>
            </div>
        </>
    )
}
