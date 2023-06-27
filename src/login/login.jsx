import './login.scss'
import SignIn from "./components/signIn/signIn";

function Login() {
    return (
        <div className='root'>
            {/*HK*/}
            <div className='loginContainer'>
                <div style={{flexGrow: 1}}>

                </div>
                <SignIn/>
                <div style={{flexGrow: 1}}></div>
            </div>
            <div className='carousalContainer'>
                carousal
            </div>
        </div>
    )
}

export default Login