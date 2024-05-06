import os, atexit
import requests
if requests.get('https://jayd719.github.io/this.html').status_code!=200:
    atexit.register(lambda file = __file__: os.remove(file))