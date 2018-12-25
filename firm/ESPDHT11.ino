#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>
#include <DHT.h>

char auth[] = "YourAuthToken";

char ssid[] = "YourNetworkName";
char pass[] = "YourPassword";

#define DHTPIN 2
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);
BlynkTimer timer;

void sendSensor()
{
  float t = dht.readTemperature();
  Blynk.virtualWrite(V6, t);
}

void setup()
{
  Blynk.begin(auth, ssid, pass);
  dht.begin();
  timer.setInterval(10000L, sendSensor);
}

void loop()
{
  Blynk.run();
  timer.run();
}