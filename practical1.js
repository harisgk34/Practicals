function validateCaptcha() {
    var captchaInput = document.getElementById('captcha-input').value;
    
    
    var captchaValue = 'EqFtlz';
    
    if (captchaInput === captchaValue) {
      alert('CAPTCHA Verification is correct!');
    } else {
      alert('CAPTCHA Verification  is incorrect!');
    }
  }