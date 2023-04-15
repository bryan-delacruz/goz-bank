import { useState, useEffect, useRef } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";

const Scan = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [audioSource, setAudioSource] = useState("");
  const [videoSource, setVideoSource] = useState("");

  const [audioSourceOptions, setAudioSourceOptions] = useState([]);
  const [videoSourceOptions, setVideoSourceOptions] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const prepareStream = async () => {
      const gotStream = (stream) => {
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      };
      const getStream = async () => {
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => {
            track.stop();
          });
        }
        const constraints = {
          audio: {
            deviceId: audioSource !== "" ? { exact: audioSource } : undefined,
          },
          video: {
            deviceId: videoSource !== "" ? { exact: videoSource } : undefined,
          },
        };
        try {
          const stream = await navigator.mediaDevices.getUserMedia(constraints);
          gotStream(stream);
        } catch (e) {
          setError(e);
        }
      };
      const getDevices = () => {
        return navigator.mediaDevices.enumerateDevices();
      };
      const gotDevices = (deviceInfos) => {
        const audioSourceOptions = [];
        const videoSourceOptions = [];
        for (const deviceInfo of deviceInfos) {
          if (deviceInfo.kind === "audioinput") {
            audioSourceOptions.push({
              value: deviceInfo.deviceId,
              label: deviceInfo.label || `Microphone ${deviceInfo.deviceId}`,
            });
          } else if (deviceInfo.kind === "videoinput") {
            videoSourceOptions.push({
              value: deviceInfo.deviceId,
              label: deviceInfo.label || `Camera ${deviceInfo.deviceId}`,
            });
          }
        }
        setAudioSourceOptions(audioSourceOptions);
        setVideoSourceOptions(videoSourceOptions);
      };
      await getStream();
      const mediaDevices = await getDevices();
      gotDevices(mediaDevices);
    };
    prepareStream();
  }, []);

  return (
    <QrScanner
      facingMode={"user"}
      onDecode={(result) => console.log(result)}
      onError={(error) => console.log(error?.message)}
    />
  );
};

export default Scan;
