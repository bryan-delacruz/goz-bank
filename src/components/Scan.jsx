import { useState } from "react";
import { QrReader } from "react-qr-reader";

const Scan = () => {
  const [scanResultWebCam, setScanResultWebCam] = useState([""]);

  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {
    if (result) {
      console.log(result);
      setScanResultWebCam(result.text);
    }
  };
  return (
    <div>
      <QrReader
        delay={300}
        style={{ width: "100%" }}
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}
        onResult={handleScanWebCam}
      />
      <p>{scanResultWebCam}</p>
    </div>
  );
};

export default Scan;
