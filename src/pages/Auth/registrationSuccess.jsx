import React from 'react';
import './LoginSuccess.css'; // import the stylesheet
import maleImage from '../assets/mail-image.webp';
import { Link } from 'react-router-dom';

function RegistrationSuccess() {
  return (
    <div className="login-success">
      <img src={maleImage} className="mail-image" alt="login_success_image" />
      <h2> A verification link has been sent to your email </h2>
      <p style={{ color: 'gray', marginTop: '30px' }}>
        {' '}
        Please check your email{' '}
      </p>
    </div>
  );
}

export default RegistrationSuccess;
