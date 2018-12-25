#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>

char auth[] = "YourAuthToken";

char ssid[] = "YourNetworkName";
char pass[] = "YourPassword";

#define RPIN 2

int v7, v8, v9;

BLYNK_WRITE(V7);
{
    v7 = param.asInt();
}
BLYNK_WRITE(V8)
{
    v8 = param.asInt();
}
BLYNK_WRITE(V9)
{
    v8 = param.asInt();
}

void setup()
{
    pinMode(RPIN, "OUTPUT");
    Blynk.begin(auth, ssid, pass);
}

void loop()
{
    digitalWrite(RPIN, v7 * v8 * v9);
    Blynk.run();
}