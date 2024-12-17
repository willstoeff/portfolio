function overFunc() {
    var copy_btn = document.getElementById("copy_btn_id");
    var copy_btn_img = document.getElementById("copy_btn_img_id");
    copy_btn.innerHTML = "Copy to clipboard";
    copy_btn.style.width = "120px";
  }

  function clickFunc(){
    navigator.clipboard.writeText("willstoeff@gmail.com");
    var copy_btn = document.getElementById("copy_btn_id");
    var copy_btn_img = document.getElementById("copy_btn_img_id");
    copy_btn.innerHTML = "Copied!";
    copy_btn.style.width = "60px"; 
    copy_btn_img.src = "images/icons/check.svg";
    setTimeout(function() {
        copy_btn_img.src = "images/icons/copy_btn.svg";
    }, 1000);
  }