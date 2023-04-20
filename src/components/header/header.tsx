import './style.css'
// @ts-ignore
import logo from '../../assets/images/logo.svg'
import { BiSearch } from 'react-icons/bi';
export const Header = () => {
    return (
        <>
            <div className={'header flex'}>
                <div>
                    <img src={logo} className={"logo"}/>
                </div>

                {/*<div>*/}
                {/*    <div className={"text-box"}>*/}
                {/*    <input type="text" name="q" pattern="[a-zA-Z0-9\s]+" placeholder="Search..." className={"text-input"}/>*/}
                {/*        <span style={{position : 'absolute'}}><BiSearch size={20} color='red'/></span>*/}
                {/*    </div>*/}
                {/*</div>*/}




                <div className="container">
                    {/*<form>*/}
                    {/*    <input type="search" placeholder="Search..."/>*/}
                    {/*        <button type="submit">Search</button>*/}
                    {/*</form>*/}
                    <form className="nosubmit">
                        <input className="nosubmit" type="search" placeholder="Search..."/>
                    </form>
                </div>







                <div>

                </div>
            </div>
        </>
    )
}
