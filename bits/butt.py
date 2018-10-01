import RPi.GPIO as GPIO
import time
import sys
import requests
import os
from dotenv import load_dotenv
from pathlib import Path  # python3 only
env_path = Path('..') / '.env'
load_dotenv(dotenv_path=env_path)

pin = sys.argv[1]

GPIO.setmode(GPIO.BCM)

GPIO.setup(pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)
load = {'pin': pin}

while True:
    input_state = GPIO.input(pin)
    if input_state == False:
        print(requests.post('http://localhost:' + os.getenv("PORT") +
                            '/'+os.getenv("APIKEY")+'/flat/butt', load))
        time.sleep(0.6)
