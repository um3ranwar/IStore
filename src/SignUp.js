import React, {useState,setState} from 'react';
function RegistrationForm() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
const [register,setRegister] = useState("Register");
    const handleInputChange = (e) => {

        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = (e) => {

        console.log(firstName,lastName,email,password,confirmPassword);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setRegister("Registered");
    }

    return(
      <div className="signinn">
    <img className="signin" src="/signin.png"/>
    <h1> Sign Up</h1>
        <div className="form11 ">
            <div className="form-body11">
                <div className="username">
                    <label className="form__label11" htmlFor="firstName">First Name </label>
                    <input className="form__input11" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name" required />
                </div>
                <div className="lastname">
                    <label className="form__label11" htmlFor="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input11" onChange = {(e) => handleInputChange(e)} placeholder="LastName" required />
                </div>
                <div className="email">
                    <label className="form__label11" htmlFor="email">Email </label>
                    <input  type="email" id="email" className="form__input11" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email" required />
                </div>
                <div className="password">
                    <label className="form__label11" htmlFor="password">Password </label>
                    <input className="form__input11" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password" required />
                </div>
                <div className="confirm-password">
                    <label className="form__label11" htmlFor="confirmPassword">Confirm Password</label>
                    <input className="form__input11" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password" required />
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class=" btn btn-dark">{register}</button>
            </div>
        </div>
</div>
    )
}

export default RegistrationForm
