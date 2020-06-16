import React from 'react';
import ReactLoading from "react-loading";
//import './loadingOverlay.css'
const LoadingOverlay = props => {
    return(
      <div
        style={{
          position: "fixed",
          width: "100%",
          left: "0", 
          right: "0",
          top:"0",
          bottom: "0",
          backgroundColor: "rgba(255,255,255,0.7)",
          zIndex:9999,
          justifyContent: "center",
          alignItems: "center",
          display: props.visible ? '' : 'none'
        }}
      >
        <div
          style={{
          width: "64px",
          height: "64px",
          position: "absolute",
          left: "50%",
          top: "50%",
          margin:"auto"
        }}>
            <ReactLoading type={"bubbles"} color="#349eeb" />
        </div>
        
      </div>
      )
  };

  export default LoadingOverlay