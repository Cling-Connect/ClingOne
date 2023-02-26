import React from "react";
import "../Style/Dash.css"
import Sidebar from "./Sidebar";

import Sidemenu from "./Sidemenu";
import Explore from "./Explore";
import { useNavigate} from "react-router-dom";

function Dash(){
    const navigate = useNavigate();
    return(
        <div>
            <Sidemenu/>
            <div class="facts"> 
                <div class="facts-title">Cling <br /> Connect</div>

                <div class="facts-box">
                    <img src="./l1.png" alt="l1" class="facts-logo"/>
                    <div class="facts-infoz">Over 273,645 users worldwide</div>
                </div>
                

                <div class="facts-box">
                    <img src="./l3.png" alt="l1" class="facts-logo"/>
                    <div class="facts-infoz">Connect with over 500 Users</div>
                </div>

                <div class="facts-box">
                    <img src="./l2.png" alt="l1" class="facts-logo"/>
                    <div class="facts-infoz">Over 1 Billion Exchanges Done!</div>
                </div>
            </div>
            <div class="profile"> 
                <div class="profile-band">
                    <div class="blue-circle">
                        <img src="./i0.png" alt="i1" class="people-icon"></img>
                        <div class="profile-text">Anthony <br/>Gonzalvez</div>
                    </div>
                </div>
                <div class="prof-iconz">
                    <img src="./p1.png" alt='p1' class="avatar-icon"></img>
                    <div class="prof-textz">
                        Followers
                        <br/>
                        <div class="prof-num">
                            369, 5005
                        </div>
                    </div>

                    <div class="prof-follow">
                        <img src="./p2.png" alt='p2' class="avatar-icon"></img>
                        <div class="prof-textz">
                            Following
                            <br/>
                            <div class="prof-num">
                                531,8008
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="./s1.png" alt="s" class="social-icon"></img>
                    <img src="./s2.png" alt="s" class="social-icon"></img>
                    <img src="./s3.png" alt="s" class="social-icon"></img>
                    <img src="./s4.png" alt="s" class="social-icon"></img>
                    <img src="./s5.png" alt="s" class="social-icon"></img>
                </div>
            </div>
            <Explore />
        </div>
    );
}

export default Dash;