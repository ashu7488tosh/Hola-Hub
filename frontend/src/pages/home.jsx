import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import withAuth from "../utils/withAuth";
import "../App.css";
import IconButton from "@mui/material/IconButton";
import RestoreIcon from "@mui/icons-material/Restore"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AuthContext } from "../contexts/AuthContext";


function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    let {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
         await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`);
    }

    return(
        <>

              <div className="navBar"> 
                     
                     <div style={{display:"flex", alignItems: "center", }}>

                         <h2>Hola Hub</h2>

                     </div>

                     <div style={{display: "flex", alignItems: "center"}}>
                        <IconButton onClick={() => {
                            navigate("/history")
                        }}>
                            <RestoreIcon/>
                        </IconButton >
                        <p>History</p>
                        <Button onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/")
                        }}>Logout</Button>
                     </div>

              </div>

              <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Providing Quality Video Call Just Like Quality Your Character !</h2>

                        <div style={{display: "flex", gap: "10px"}}>
                            <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined"></TextField>
                            <Button onClick={handleJoinVideoCall} variant="contained">Join</Button>
                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img srcSet='/logo3.png' alt="" />
                </div>
              </div>

        </>
    )
}

export default withAuth(HomeComponent)