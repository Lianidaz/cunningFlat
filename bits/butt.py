import RPi.GPIO as GPIO
import time
import sys
import requests

pin = sys.argv[1]
room = sys.argv[2]

GPIO.setmode(GPIO.BCM)

GPIO.setup(pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)
load = {'room': room}

while True:
    input_state = GPIO.input(pin)
    if input_state == False:
        print(requests.post('http://localhost:5000/flat/butt', load))
        time.sleep(0.6)