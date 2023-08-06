var image = null;
var up;
var canvas = document.getElementById("c1");
var origimg=null;
var file1=null;
var file2=null;
var file3=null;
var file4=null;
var file5=null;
var file6=null;

function check(image){
  if(image==null){
    alert("No image uploaded.");
    return null;
  }
  else{return image;}
}

function upload(){
  var canvas = document.getElementById("c1");
  var i = document.getElementById("upload");
  origimg=new SimpleImage(i);
  image = new SimpleImage(i);
  image.drawTo(canvas);
  file2=new SimpleImage(i);
  file3=new SimpleImage(i);
  file4=new SimpleImage(i);
  file5=new SimpleImage(i);
  file6=new SimpleImage(i);
}

function lossy(){
  if(check(image)!=null){
    var nimage = new SimpleImage(image.getWidth(),image.getHeight());
    
    for(var pixel of image.values()){
      var npixel = nimage.getPixel(pixel.getX(),pixel.getY());
      if(Math.random()>0.5){
        npixel.setRed(pixel.getRed());
        npixel.setGreen(pixel.getGreen());
        npixel.setBlue(pixel.getBlue());
      }
      else{
      }
    }
    var canvas = document.getElementById("c1");
    nimage.drawTo(canvas);
  }
}


function blurimage(){
  if(check(image)!=null){
    var nimage = new SimpleImage(image.getWidth(),image.getHeight());
    
    for(var pixel of image.values()){
      var npixel = nimage.getPixel(pixel.getX(),pixel.getY());
      if(Math.random()>0.5){
        npixel.setRed(pixel.getRed());
        npixel.setGreen(pixel.getGreen());
        npixel.setBlue(pixel.getBlue());
      }
      else{
        var spixel = randPixel(pixel,image);
        npixel.setRed(spixel.getRed());
        npixel.setGreen(spixel.getGreen());
        npixel.setBlue(spixel.getBlue());
      }
    }
    var canvas = document.getElementById("c1");
    nimage.drawTo(canvas);
  }
}
function randPixel(pixel,image){
  var check=false;
  while(check==false){
    var xshift = Math.round(Math.random()*10);
    if (Math.random()<0.5){
      xshift=xshift*-1;
    }
    var x = pixel.getX()+xshift;

    var yshift = Math.round(Math.random()*10);
    if (Math.random()<0.5){
      yshift=yshift*-1;
    }
    var y = pixel.getY()+yshift;
    if (x>=0 && x<image.getWidth() && y>=0 && y<image.getHeight()){
      check=true;
    }
  }
  var spixel = image.getPixel(x, y);
  return spixel;
}

function doGrey()
{
  if(file2==null)
    {
      alert("You have not loaded any image");
    }
  else
    {
      greyscale();
    }
}

function greyscale()
{  
  for(var pixel of file2.values())
  {
      var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
  var canvas = document.getElementById("c1");
  file2.drawTo(canvas);
}

function doRed()
{
  if(file3==null)
    {
      alert("You have not loaded any image");
    }
  else
    {
      redscale();
    }
}

function redscale()
{
  for(var pixel of file3.values())
    {
      var avg=(pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
      if(avg<128)
        {
          pixel.setRed(2*avg);
          pixel.setBlue(0);
          pixel.setGreen(0);
        }
      else
        {
          pixel.setRed(255);
          pixel.setBlue(2*avg-255);
          pixel.setGreen(2*avg-255);
        }
    }
  var canvas = document.getElementById("c1");
  file3.drawTo(canvas);
}

function doSepia()
{
  if(file4==null)
    {
      alert("You have not loaded any image");
    }
  else
    {
      sepiascale();
    }
}

function sepiascale()
{
  for(var pixel of file4.values())
    {
      var red=(pixel.getRed()*0.393) + (pixel.getGreen()*0.769) + (pixel.getBlue()* 0.189);
    
      var green=(pixel.getRed()*0.349) + (pixel.getGreen()*0.686) + (pixel.getBlue()* 0.168);
      
      var blue=(pixel.getRed()*0.272) + (pixel.getGreen()*0.534) + (pixel.getBlue()* 0.131);
      
      pixel.setRed(red);
      pixel.setBlue(blue);
      pixel.setGreen(green);
      
   if (red>255)
     {
       pixel.setRed(255);
     }
      
    if (green>255)
      {
        pixel.setGreen(255);
      }
    if(blue>255)
      {
        pixel.setBlue(255);
      }
    }
  var canvas = document.getElementById("c1");
  file4.drawTo(canvas);
  
  }

function doRainbow()
{
  if(file5==null)
    {
      alert("You have not loaded any image");
    }
  else
    {
      rainbowscale();
    }
}

function rainbowscale()
{
for (var pixel of file5.values())
{
    var avg=(pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    
    if(pixel.getY()<file5.getHeight()/7)
    { 
        if(avg<128)
        {
    pixel.setRed(2*avg);
    pixel.setGreen(0);
    pixel.setBlue(0);
        }
        else{
            pixel.setRed(255);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(2*avg-255);
        }
        
    }
    
    if(pixel.getY()>=file5.getHeight()/7 && pixel.getY()<2*file5.getHeight()/7) //orange
    {
        if(avg<128)
        {
              pixel.setRed(2*avg);
    pixel.setGreen(0.8*avg);
    pixel.setBlue(0);
        }
        else
        {
           pixel.setRed(255);
            pixel.setGreen(1.2*avg-51);
            pixel.setBlue(2*avg-255); 
        }
        
    }
    
    if(pixel.getY()>=2*file5.getHeight()/7 && pixel.getY()<3*file5.getHeight()/7)//yellow
    {
    if(avg>128)
    { 
        pixel.setRed(2*avg);
            pixel.setGreen(2*avg);
            pixel.setBlue(0);
    }
    else{
        pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(2*avg-255);
    }
    }
    
    if(pixel.getY()>=3*file5.getHeight()/7 && pixel.getY()<4*file5.getHeight()/7)//Green
    {
        if(avg<128)
        {
            pixel.setRed(0);
            pixel.setGreen(2*avg);
            pixel.setBlue(0);
        }
        else{
            pixel.setRed(2*avg-255);
            pixel.setGreen(255);
            pixel.setBlue(2*avg-255);
        }
        }
        
        if(pixel.getY()>=4*file5.getHeight()/7 && pixel.getY()<5*file5.getHeight()/7)//blue
        {
            if(avg<128)
            {
           pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(2*avg);
            }
            else
            {
                pixel.setRed(2*avg-255);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(255);
            }
        }
        if(pixel.getY()>=5*file5.getHeight()/7 && pixel.getY()<6*file5.getHeight()/7)//indigo
        {
              if(avg<128)
            {
           pixel.setRed(0.8*avg);
            pixel.setGreen(0);
            pixel.setBlue(2*avg);
            }
            else
            {
                pixel.setRed(1.2*avg-51);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(255);
            }
        }
        
        if(pixel.getY()>=6*file5.getHeight()/7 && pixel.getY()<7*file5.getHeight()/7)
        {
              if(avg<128)
            {
           pixel.setRed(1.6*avg);
            pixel.setGreen(0);
            pixel.setBlue(1.6*avg);
            }
            else
            {
                pixel.setRed(0.4*avg+153);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(0.4*avg+153);
            }
        }
        
        
        } 
  var canvas = document.getElementById("c1");
  file5.drawTo(canvas);
}

function clearCanvas(){
  var canvas = document.getElementById("c1");
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width, canvas.height);
  image=null;
  file1=null;
  file2=null;
  file3=null;
  file4=null;
  file5=null;
}

function doReset()
{
  if(origimg==null)
    {
      alert("You have not loaded an image");
    }
  else
  {
    origimg.drawTo(canvas);
    image=origimg;
    file2=origimg;
    file3=origimg;
    file4=origimg;
    file5=origimg;
    file6=origimg;
  }
}
function download() {
var download = document.getElementById("download");
var image = document.getElementById("c1").toDataURL("image/jpg")
    .replace("image/jpg", "image/octet-stream");
download.setAttribute("href", image);
}


//Type wrting

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};