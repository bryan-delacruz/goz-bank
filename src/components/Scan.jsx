import { useState, useEffect, useRef } from "react";

const constraints = {
  video: {
    width: {
      min: 1280,
      ideal: 1920,
      max: 2560,
    },
    height: {
      min: 720,
      ideal: 1080,
      max: 1440,
    },
  },
};

const defaultOptionValue = "default";

const Scan = () => {
  const [videoDevices, setVideoDevices] = useState([]);

  const cameraSelectedRef = useRef(null);
  const videoRef = useRef(null);
  const streamStartedRef = useRef(false);

  if (streamStartedRef.current) {
    videoRef.current.play();
    return;
  }

  const getCameraSelection = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    setVideoDevices(devices.filter((device) => device.kind === "videoinput"));
  };

  useEffect(() => {
    getCameraSelection();
  }, []);

  const handleCameraSelected = (e) => {
    cameraSelectedRef.current = e.target.value;
  };

  const handleStream = (stream) => {
    videoRef.current.srcObject = stream;
    videoRef.current.play();
    streamStartedRef.current = true;
  };
  const startStream = async (constraints) => {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleStream(stream);
  };

  const playBtn = () => {
    if (streamStartedRef.current) {
      videoRef.current.play();
      return;
    }
    if ("mediaDevices" in navigator && navigator.mediaDevices.getUserMedia) {
      const updatedConstraints = {
        ...constraints,
        deviceId: {
          exact: cameraSelectedRef.current.value,
        },
      };
      console.log(cameraSelectedRef.current.value);
      startStream(updatedConstraints);
    }
  };

  return (
    <div>
      <video ref={videoRef}></video>
      <select ref={cameraSelectedRef} onChange={(e) => handleCameraSelected(e)}>
        <option key="default" value={defaultOptionValue}>
          Select camera
        </option>
        {videoDevices?.map((vd) => (
          <option key={vd.deviceId} value={vd.deviceId}>
            {vd.label}
          </option>
        ))}
      </select>
      <div className="flex gap-4 ">
        <button className="border" title="Play" onClick={playBtn}>
          Play
        </button>
        <button className="border btn btn-info pause d-none" title="Pause">
          Pause
        </button>
        <button
          className="border btn btn-outline-success screenshot d-none"
          title="ScreenShot"
        >
          ScreenShot
        </button>
      </div>
    </div>
  );
};

export default Scan;
