import React, {useState, useRef} from 'react';
import './register.scss'

const Register = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    
    const emailRef = useRef();
    const passRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinishe = () => {
        setPass(passRef.current.value)
    }
    return (
        
    
    <div className='register'>
            <div className="top">
                <div className="wrapper">
                <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt="Logo"/>
            <button className="loginButton">Sign In</button>
            </div>
            <div className="container">
                <h1>Unlimited Movies, TV Shows And more</h1>
                <h2>Watch Anywhere, Cancel Anytime</h2>
                <p>
                    Ready To watch? Enter your Email or restart your membership
                </p>{
                    !email ? (
<div className="input">
                    <input type="email" placeholder='email adress' ref={emailRef}/>
                    <button className="registerButton" onClick={handleStart}>Get started</button>
                </div>
                    ) : (<form className="input">
                    <input type="password" placeholder='Password' ref={passRef}/>
                    <button className="registerButton" onClick={handleFinishe}>Start memberShip</button>
                </form>)
                }
                
            </div>
            </div>
    </div>
    );
}


export default Register;