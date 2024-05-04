import { useState, useEffect } from "react";
import { Button, Box } from "@material-ui/core";
import "./style.css";
import VideoCall from "./VideoCall";
import { channelName } from "./Settings";
import axios from 'axios';
// const response = await axios.get('https://test.teledental.com/generateToken'
function AgoraToken(props) {
  const { text } = props;
  const [inCall, setInCall] = useState(false);
  const [token, setToken] = useState(null);

  const generateToken = async () => {
    try {
      const response = await axios.get('https://test.teledental.com/generateToken',
        {
          params: { channelName: text }
        });
      const [part1] = response.data.token.split(':')
      setToken(part1);
    } catch (error) {
      console.error('Error generating token:', error.message);
    }
  };


  useEffect(() => {
    if (text !== '') {
      generateToken();
    }
  }, [text]);

  return (
    <>
      <div className="App" style={{ height: "100%", width: "100%", marginTop: "0px" }}>
        {inCall ? (
          <VideoCall setInCall={setInCall} token={token} channel={text} />
        ) : (
          <Box textAlign='center'>
            <Button
              style={{ cursor: "pointer" }}
              variant="contained"
              color="secondary"
              onClick={() => setInCall(true)}
            >
              Join Meeting
            </Button>
          </Box>
        )}
      </div>
    </>

  );
}

export default AgoraToken;
