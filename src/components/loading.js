import React from 'react';
import ReactLoading from "react-loading";

const Loading = props => {
    return(
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //opacity: "0.5",
          //backgroundColor:  '#00000050',
        }}
      >
        <ReactLoading type={"bubbles"} color="#349eeb" />
      </div>
      )
  };

  export default Loading