import React from "react";
import '../Style/Sidemenu.css';
import { useNavigate} from "react-router-dom";

function Sidemenu(){
    const navigate = useNavigate();
    function openUsers(){
        navigate("/2");
    }
    function openNav() {
            document.getElementById("mySidebar").style.width = "200px";
            document.getElementById("main").style.marginLeft = "0px";
        }
        
        function closeNav() {
            document.getElementById("mySidebar").style.width = "0px";
            document.getElementById("main").style.marginLeft= "0px";
        }
    return(
        <div>
            <div id="mySidebar" class="sidebar">
                <div class="closebtn" onClick={closeNav}>×</div>
                <div class="nav-div" onClick={openUsers}>Users</div>
                <div class="nav-div">About</div>
                <div class="nav-div">Clients</div>
                <div class="nav-div">GroupChat</div>
            </div>

            <div id="main">
                <button class="openbtn" onClick={openNav}>Open</button> 
            </div>

        </div>
    );
}

export default Sidemenu;