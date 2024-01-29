import React from 'react';
import { useNavigate } from 'react-router';

export default function LinkPage() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate('/Dashboard/LinkPage/CreteLinkPage');
      }}
    >
      Make Short Link
    </button>
  );
}
