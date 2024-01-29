import React from 'react';
import { useNavigate } from 'react-router';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate('/Dashboard/ShortLink');
        }}
      >
        Make Short Link
      </button>
      <button
        onClick={() => {
          navigate('/Dashboard/QRCode');
        }}
      >
        Make QR Code
      </button>
      <button
        onClick={() => {
          navigate('/Dashboard/LinkPage');
        }}
      >
        Link Page
      </button>
    </>
  );
}
