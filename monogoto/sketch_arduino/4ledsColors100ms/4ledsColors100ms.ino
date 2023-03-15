int led_red = 0; // the red LED is connected to Pin 0 of the Arduino
int led_yellow = 1; // the yellow LED is connected to Pin 1 of the Arduino
int led_green = 2; // the green LED is connected to Pin 2 of the Arduino
int led_blue = 3; // the green LED is connected to Pin 2 of the Arduino

void setup() {
  // set up all the LEDs as OUTPUT
  pinMode(led_red, OUTPUT);
  pinMode(led_yellow, OUTPUT);
  pinMode(led_green, OUTPUT);
  pinMode(led_blue, OUTPUT);
}

void loop() {
  // turn the green LED on and the other LEDs off
  digitalWrite(led_red, LOW); 
  digitalWrite(led_yellow, LOW);
  digitalWrite(led_green, LOW);
  digitalWrite(led_blue, HIGH);
  delay(100);    // wait 100 milisegundos
  
  // turn the yellow LED on and the other LEDs off
  digitalWrite(led_red, LOW);   
  digitalWrite(led_yellow, LOW);
  digitalWrite(led_green, HIGH);
  digitalWrite(led_blue, LOW);
  delay(100);    // wait 100 milisegundos
  
  // turn the red LED on and the other LEDs off
  digitalWrite(led_red, LOW);  
  digitalWrite(led_yellow, HIGH);
  digitalWrite(led_green, LOW);
  digitalWrite(led_blue, LOW);
  
  // turn the red LED on and the other LEDs off
  digitalWrite(led_red, HIGH);  
  digitalWrite(led_yellow, LOW);
  digitalWrite(led_green, LOW);
  digitalWrite(led_blue, LOW);
  delay(100);    // wait 100 milisegundos    
}