import React, {useEffect} from "react";
import "../Style/Sidebar.css"

function Sidebar(){


   
        const showNavbar = (toggleId, navId, bodyId, headerId) =>{
            const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId)
            
            // Validate that all variables exist
            if(toggle && nav && bodypd && headerpd){
                toggle.addEventListener('click', ()=>{
                // show navbar
                nav.classList.toggle('show')
                // change icon
                toggle.classList.toggle('bx-x')
                // add padding to body
                bodypd.classList.toggle('body-pd')
                // add padding to header
                headerpd.classList.toggle('body-pd')
                })
            }
        }
        
        showNavbar('header-toggle','nav-bar','body-pd','header')
        
        /*===== LINK ACTIVE =====*/
        const linkColor = document.querySelectorAll('.nav_link')
        
        function colorLink(){
        if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
        }
        }
        linkColor.forEach(l=> l.addEventListener('click', colorLink))
        
         // Your code to run since DOM is loaded and ready

        
    return(
        <div>
            <body id="body-pd">
                <header class="header" id="header">
                    <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
                </header>

                <div class="l-navbar" id="nav-bar">
                    <nav class="nav">
                        <div> 
                            <button href="#" class="nav_logo"> 
                                <i class='bx bx-layer nav_logo-icon'></i> 
                                <span class="nav_logo-name">CBBootstrap</span> 
                            </button>

                            <div class="nav_list"> 
                                <button href="#" class="nav_link active"> 
                                    <i class='bx bx-grid-alt nav_icon'></i> 
                                    <span class="nav_name">Dashboard</span> 
                                </button> 
                                
                                <button href="#" class="nav_link"> 
                                    <i class='bx bx-user nav_icon'></i> 
                                    <span class="nav_name">Users</span> 
                                </button> 
                                
                                <button href="#" class="nav_link"> 
                                    <i class='bx bx-message-square-detail nav_icon'></i>
                                    <span class="nav_name">Messages</span> 
                                </button> 
                                
                                <button href="#" class="nav_link"> 
                                    <i class='bx bx-bookmark nav_icon'></i> 
                                    <span class="nav_name">Bookmark</span> 
                                </button> 
                                
                                <button href="#" class="nav_link"> 
                                    <i class='bx bx-folder nav_icon'></i> 
                                    <span class="nav_name">Files</span> 
                                </button> 
                            </div>
                        </div> 

                        <button href="#" class="nav_link"> 
                            <i class='bx bx-log-out nav_icon'></i> 
                            <span class="nav_name">SignOut</span> 
                        </button>
                    </nav>
                </div>
        
                <div class="height-100 bg-light">
                    <h4>Main Components</h4>
                </div>
            </body>
        </div>
    );
}

export default Sidebar;