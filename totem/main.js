$("#skin").change(function(e) {

    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {
        
        var file = e.originalEvent.srcElement.files[i];
        
        var img = document.createElement("img");
        var reader = new FileReader();
        reader.onloadend = function() {
             img.src = reader.result;
             img.id = "skinGot";
             $("#skinCanvas").append($("#skinGot"));

        }
        reader.readAsDataURL(file);
        $("#skin").after(img);
        
    }
  img.onload = function(){
    var skin = document.getElementById("skin");
    var txt = "";
    var file = skin.files[0];
    var img = document.getElementById("skinGot");
    var c = document.getElementById("skinCanvas");
    var ctx = c.getContext("2d");

    ctx.drawImage(img, 0, 0);
    var imgData = ctx.getImageData(0, 0, c.width, c.height);

    // invert colors
    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
      imgData.data[i] = 255 - imgData.data[i];
      imgData.data[i+1] = 255 - imgData.data[i+1];
      imgData.data[i+2] = 255 - imgData.data[i+2];
      if (imgData.data[i+3] > 0){
        imgData.data[i+3] = 255;
      }
      else {
        imgData.data[i+3] = 0;
      }
    }
    ctx.putImageData(imgData, 0, 0);




    document.getElementById("textOutput").innerHTML = txt;
  }


});


