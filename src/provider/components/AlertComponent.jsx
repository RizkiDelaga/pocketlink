import React, { useState } from 'react';
import AlertContext from '../contexts/AlertContext';
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AlertComponent({ children }) {
  const MyToastContainer = () => {
    return (
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        limit={5}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    );
  };

  const alertToastEmitter = (position) => {
    return {
      position: position || 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Flip,
    };
  };

  const showAlert = (message, type, position) => {
    switch (type) {
      case 'info':
        toast.info(message, alertToastEmitter(position));
        break;
      case 'success':
        toast.success(message, alertToastEmitter(position));
        break;
      case 'warning':
        toast.warn(message, alertToastEmitter(position));
        break;
      case 'error':
        toast.error(message, alertToastEmitter(position));
        break;
      default:
        toast(message, alertToastEmitter(position));
        break;
    }
  };

  const alertContextValue = { showAlert };

  return (
    <AlertContext.Provider value={alertContextValue}>
      <MyToastContainer />
      {children}
    </AlertContext.Provider>
  );
}
