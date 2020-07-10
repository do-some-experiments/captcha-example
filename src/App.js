import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function App() {
  const onChange = (value) => {
    console.log('Captcha value:', value);
  };

  return (
    <ReCAPTCHA
      sitekey={process.env.REACT_APP_CAPTCHA_KEY}
      onChange={onChange}
    />
  );
}

export default App;
