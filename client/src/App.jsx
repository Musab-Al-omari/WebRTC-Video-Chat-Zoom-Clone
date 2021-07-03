import React from "react";
import Notifications from "./component/Notifications";
import Options from "./component/Options";
import VideoPlayer from "./component/VideoPlayer";
import { Typography, AppBar } from '@material-ui/core';
export const App = () => {
  return (
    <div >
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Video Chat</Typography>
      </AppBar>
      {/* <VideoPlayer />
      <Options>
        <Notifications />
      </Options> */}
    </div>
  );
};

export default App;
