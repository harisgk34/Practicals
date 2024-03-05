function showPopup(title, imageUrl) {
    var popup = document.getElementById('popup');
    var popupImage = document.getElementById('popup-image');
    var overlay = document.getElementById('overlay');
    
    popupImage.src = imageUrl;
    popup.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
  }

  function closePopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');
    
    popup.style.display = 'none';
    overlay.style.display = 'none';
   
  }