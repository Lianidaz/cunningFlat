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

WidgetBridge bridge1(V9);
BLYNK_CONNECTED()
{
  bridge1.setAuthToken("OtherAuthToken");
}

void sendSensor()
{
  float t = dht.readTemperature();
  Blynk.virtualWrite(V6, t);
  if (t >= 25)
  {
    bridge1.virtualWrite(V8, 1)
  }
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