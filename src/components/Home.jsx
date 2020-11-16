import React from 'react'
import Logo1 from '../assets/wp.png'
import Logo2 from '../assets/wp-negativo.png'


export default function Home(){
    var options = {
        imgSrc1:{Logo1},
        imgSrc2:{Logo2},
        containerName : "placeholder",
        columns:16,
        margin:3
        }
          
    var cols = options.columns;
    var margin = options.margin;
    var img1 = options.imgSrc1;
    var img2 = options.imgSrc2;
    var placeholder = document.getElementsByClassName(options.containerName)[0];
    var directionX, directionY;
    
    var column, blind, blindImg;
    var bgImg, rot;
    var colL;
    var colW = (<placeholder className="offset"></placeholder> / cols) - margin;
    for (var i=0; i < cols; i++)
      {
        colL = ((colW + margin) * i);
        
        column = document.createElement('div');
        column.className = "column";
        column.style.width = colW + "px";
        column.style.left = colL + "px";
        placeholder.appendChild(column); 
        
        for (var j=0; j<4; j++)
          {
            blind = document.createElement('div');
            blind.className = "blind";
            blind.style.width = colW + "px";
            blindImg = document.createElement('div');
            blindImg.className = "blindImg";
            
            switch (j){
               case 0:
                  TweenMax.set(blind, {rotationY: "0"});
                  bgImg = img1;
                  break;
              case 1:
                  TweenMax.set(blind, {rotationY: "90"});
                  bgImg = img2;
                  break;
               case 2: 
                    TweenMax.set(blind, {rotationY: "180"});
                    bgImg = img1;
                    break;              
                case 3:
                    TweenMax.set(blind, {rotationY: "270"});
                    bgImg = img2;
                    break;
            }
            blindImg.style.width = placeholder.offsetWidth + "px";
            blindImg.style.backgroundImage = "url("+bgImg+")";
            blindImg.style.left = -colL + "px";
  
            column.appendChild(blind);
            blind.appendChild(blindImg);
            
            TweenMax.set(blind, { transformOrigin:"50% 50% " + -colW/2, transformStyle: "preserve-3d"});
          }
        
        TweenMax.set(column, {transformStyle:"preserve-3d", transformPerspective:1000, rotationY:0});
        
         column.addEventListener("mouseenter", function(event){
              var elem = event.currentTarget;
              var rotY = elem._gsTransform.rotationY;
           
              if(directionX > 0){
                TweenMax.to(elem, 1, {rotationY:Math.floor(rotY/90)*90+90, transformOrigin:"50% 50% -" + colW/2, ease:Back.easeOut});
              }else{
                TweenMax.to(elem, 1, {rotationY:Math.floor(rotY/90)*90-90, transformOrigin:"50% 50% -" + colW/2, ease:Back.easeOut});
              }
        })
      }
        document.addEventListener('mousemove', function (event) {
        directionX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
        directionY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
      });
  }
  
