import React from "react";

const Footer = () =>{
    return(
            <div className="col-md-12 footer py-3">
                    <a href={"https://twitter.com/nike"} target={"_blank"} className="me-5" rel="noreferrer"> 
                        <img src={"/images/twitter.svg"} alt="Twitter" width={30} />
                    </a>
                    <a href={"https://www.facebook.com/nike"} target={"_blank"} className="me-5" rel="noreferrer"> 
                        <img src={"/images/facebook.svg"} alt="Facebook" width={30} />
                    </a>
                    <a href={"https://www.youtube.com/user/nike"} target={"_blank"} className="me-5" rel="noreferrer"> 
                        <img src={"/images/youtube.svg"} alt="Youtube" width={30} />
                    </a>
                    <a href={"http://instagram.com/nike"} target={"_blank"} className="me-5" rel="noreferrer"> 
                        <img src={"/images/instagram.svg"} alt="Instagram" width={30} />
                    </a>
            </div>
    )
}

export default Footer;