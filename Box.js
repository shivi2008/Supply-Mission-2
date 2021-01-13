class Box{
constructor(x,y,width,height){
var options={
  isStatic:true
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body)
}
display(){
  var pos= this.body.position;
  push();
  rectMode(CENTER);
  strokeWeight(3);
  stroke("red");
  fill("red");
  rect(pos.x, pos.y,this.width,this.height);    
  pop();  
}
}