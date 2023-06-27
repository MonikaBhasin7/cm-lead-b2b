import './signIn.scss'

export default function SignIn() {
    return (
        <div >
            <div className='welcomeText'>
                Welcome back
            </div>
            <br/>
            <br/>
            <br/>

            <label className='labelText'>Email</label>
            <input type="text"  placeholder="Enter your email"/>

            <br/>
            <br/>

            <label className='labelText'>Password</label>
            <input type="password"  placeholder="Enter your password"/>

            <br/>
            <br/>

            <button className='signInButton'>Sign in</button>
        </div>
    )
}