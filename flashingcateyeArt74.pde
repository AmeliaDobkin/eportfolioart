void setup(){
size(500,500);
fill(0);
background(0);
smooth();
noStroke();
}


//flashing eye
void draw(){
  if (mousePressed){
fill(mouseX);
fill(random(255), random(255),random(255));
ellipse(250,250,300,300);
  }
  else{
    fill(0);
ellipse(250,250,300,300);
  }

//pupil
fill(0); 
ellipse(250,250,50,300);

fill(0,0,mouseY);
ellipse(mouseX,mouseY,4,4);


//makes eye close when one clicks on top half of screen
mousePressed();{
  if (mouseY < 200){
  fill(0);
  rect(10,10,400,200);
  }
  if (mouseY < 100){
    fill(0);
    rect(10,10,500,200);
  }
    else{ 
      fill(0,0,0,0);
  rect(10,10,400,200);
        }
  }
 


    fill(0,0,0,0);
  rect(10,10,400,200);

}
