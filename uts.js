function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(135, 205, 235);
  
  //Gambar Matahari
  fill("yellow");
  stroke("orange");
  strokeWeight(10);
  circle(320, 170, 100);
    
  //Gambar Lahan
  fill("green");
  stroke("black");
  strokeWeight(1);
  rect(0, 300, 640, 180);
  
  //Gambar Gunung 1
  fill("grey");
  triangle(20, 300, 220, 100, 420, 300);
  
  //Gambar Gunung 2
  fill("grey");
  triangle(220, 300, 420, 100, 620, 300);
  
  //Gambar Sawah
  stroke("yellow");
  strokeWeight(5);
  line(20, 440, 100, 440);
  line(40, 460, 120, 460);
  line(500, 440, 620, 440);
  line(480, 460, 600, 460);

  //Gambar Awan
  drawCloud(100, 100);
  drawCloud(400, 150);

  //Gambar Burung
  drawBird(50, 50);
  drawBird(100, 70);
  drawBird(150, 50);
  drawBird(200, 90);
  drawBird(250, 70);

  //Gambar Jalan
  fill("black");
  rect(295, 300, 50, 180);
  
  //Garis Putih pada Jalan
  stroke("white");
  strokeWeight(4);
  for (let i = 0; i < 180; i += 20) {
    line(320, 300 + i, 320, 310 + i);
  }
}

function drawCloud(x, y) {
  fill(255);
  noStroke();
  ellipse(x, y, 60, 60);
  ellipse(x + 20, y, 60, 60);
  ellipse(x - 20, y, 60, 60);
  ellipse(x + 10, y - 20, 60, 60);
  ellipse(x - 10, y - 20, 60, 60);
}

function drawBird(x, y) {
  fill("black");
  noStroke();
  beginShape();
  vertex(x, y);
  vertex(x + 10, y - 10);
  vertex(x + 20, y);
  endShape();
}
