import JSONDATA from "../MOCK_DATA.json";
import { useState } from "react";

import Sidemenu from "./Sidemenu";
import "../Style/Search.css";
import "../Style/Search.scss"
import { useNavigate, Link } from "react-router-dom";

function Search(){
    const [searchTerm, setSearchTerm] = useState('');
    const updateVal = (event) =>{
        setSearchTerm(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
    }

    return(

        <div>
            {//enter sidemenu
            }
            <div class="align">
                <h1>User Search filter page</h1>
                
            </div>
            <input type="text" class="user-input" placeholder="Enter Val" onChange={updateVal}/>

            <div class="user-table">
            {
                JSONDATA.filter((val) => {
                    if (searchTerm === "") {
                        return val;
                    } 
                    else if (
                        val.full_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return val;
                    }
                    }).map((val, key) => {
                        return (
                            <div >
                                <div class="user-row">                                
                                    <div className="user-num" key={key}>
                                        <p>{val.id}</p>
                                    </div>
                                    <div className="user-ele" key={key}>
                                        <p>{val.full_name}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <button class="make-expert-btn">EXPERT</button>
            
            <div className="formContainer">
                <div className="formWrapper">
                    <span className="logo">Register</span>
              
                    <form onSubmit={handleSubmit}>
                    {/* <form onSubmit={altz}> */}
                    <input required type="text" placeholder="Enter user-name" />
                    <input required type="email" placeholder="Enter email" />
                    <input required type="password" placeholder="Enter password" />
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src="./addAvatar.png" alt="addImage" />
                        <span>Add an image for your profile</span>
                    </label>
                    <button >Sign up</button>
                    </form>
                    <p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Search;