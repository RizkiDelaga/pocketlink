import { Fragment, useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { useNavigate } from 'react-router';

function HomePage() {
  const navigate = useNavigate();

  // const downloadQRCode = () => {
  //   const customSize = 400; // Set your custom size here
  //   const marginSize = 50; // Set your desired margin size here

  //   // Create a hidden canvas with a custom size and margin
  //   const canvas = document.createElement('canvas');
  //   const context = canvas.getContext('2d');
  //   canvas.width = customSize + 2 * marginSize;
  //   canvas.height = customSize + 2 * marginSize;

  //   // Draw the QR code on the hidden canvas with margins
  //   const qrCodeDataUrl = document.querySelector('canvas').toDataURL('image/png');
  //   const qrCodeImage = new Image();
  //   qrCodeImage.src = qrCodeDataUrl;
  //   qrCodeImage.onload = () => {
  //     context.fillStyle = '#ffffff'; // Set the margin background color (white in this case)
  //     context.fillRect(0, 0, canvas.width, canvas.height);
  //     context.drawImage(qrCodeImage, marginSize, marginSize, customSize, customSize);

  //     // Convert the hidden canvas to a data URL
  //     const customSizeDataUrl = canvas.toDataURL('image/png');

  //     // Create a download link
  //     const downloadLink = document.createElement('a');
  //     downloadLink.href = customSizeDataUrl;
  //     downloadLink.download = 'qrcode_custom.png';
  //     downloadLink.click();
  //   };
  // };

  return (
    <Fragment>
      {/* <QRCodeCanvas
        value={'https://picturesofpeoplescanningqrcodes.tumblr.com'}
        size={250}
        bgColor={'#ffffff'}
        fgColor={'#000000'}
        level={'L'}
        // includeMargin={true}
      />
      <button onClick={downloadQRCode}>Download QR Code</button> */}

      {localStorage.getItem('accessToken') ? (
        <>
          <button
            onClick={() => {
              navigate('/ShortLink');
            }}
          >
            Make Short Link
          </button>

          <button
            onClick={() => {
              navigate('/QRCode');
            }}
          >
            Make QR Code
          </button>
          <button
            onClick={() => {
              localStorage.removeItem('accessToken');
              navigate('/');
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              navigate('/Login');
            }}
          >
            Login
          </button>

          <button
            onClick={() => {
              navigate('/Register');
            }}
          >
            Register
          </button>
        </>
      )}
    </Fragment>
  );
}

export default HomePage;
