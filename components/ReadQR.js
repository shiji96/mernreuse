import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import Footer from "./Footer";

function ReadQR(props) {
  const [data, setData] = useState();
  return (
    <>
      <h4>QR code reader </h4>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        className="dispvideo"
      />
      <div className="soutput">
        <h4>Scanned output:</h4>

        <a href={data}>{data}</a>
      </div>
      
      <Footer />
    </>
  );
}

export default ReadQR;
