import React from "react";

function Header(){
    return (
        <div className = "header">
            <h1 className="header-h1">Luis Ángel García Méndez</h1>
            <h2 className="header-h2">Software Developer</h2>
            <h4 className="header-h3">luis_7gm@outlook.com</h4>
            <button className="favorite styled email" type="button"><a className="link">✉️ Email</a></button>
            <button className="favorite styled linkedin" type="button"><a href="https://www.linkedin.com/in/luisgarc%C3%ADa117/">Linkedin</a></button>
        </div>
    )
}

export default Header;