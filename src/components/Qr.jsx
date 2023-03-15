import React, { useEffect, useState } from "react";
import QRCode from "qrcode";

export const Qr = () => {
  const phoneNumber = "983854029";
  const [imageUrl, setImageUrl] = useState("");

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(phoneNumber);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    generateQrCode();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center h-screen">
      <section className="flex flex-col justify-center items-center mb-10  bg-bg-primary rounded-md px-16 py-16 gap-16 text-white font-bold ">
        <h2 className="w-56 text-4xl text-center">Mi QR</h2>
        <img className="w-56" src={imageUrl} alt="qr-image" />
        <div className="w-56 text-xl text-center">Bryan De La Cruz Amar</div>
      </section>
    </div>
  );
};
