#!/usr/bin/env python3
from http.server import HTTPServer, SimpleHTTPRequestHandler, test
import sys
import requests



class CORSRequestHandler (SimpleHTTPRequestHandler):
    def end_headers (self):
        self.send_header('Access-Control-Allow-Origin', '*')
        SimpleHTTPRequestHandler.end_headers(self)

    def do_GET(self):
        print(self.path)
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()

        if (self.path=="/open/all"):
                requests.post("http://10.11.12.235/api/open/1", json = myobj, headers = {"accept": "*/*", "X-API-KEY": "azk_42163e54-49d8-49b3-89c6-96a734e73daa", "Access-Control-Allow-Origin": "*"})
                requests.post("http://10.11.12.235/api/open/2", json = myobj, headers = {"accept": "*/*", "X-API-KEY": "azk_42163e54-49d8-49b3-89c6-96a734e73daa", "Access-Control-Allow-Origin": "*"})
                requests.post("http://10.11.12.235/api/open/3", json = myobj, headers = {"accept": "*/*", "X-API-KEY": "azk_42163e54-49d8-49b3-89c6-96a734e73daa", "Access-Control-Allow-Origin": "*"})
                requests.post("http://10.11.12.235/api/open/4", json = myobj, headers = {"accept": "*/*", "X-API-KEY": "azk_42163e54-49d8-49b3-89c6-96a734e73daa", "Access-Control-Allow-Origin": "*"})

        else: 

            url = 'http://10.11.12.235/api' + self.path
            myobj = {}

            x = requests.post(url, json = myobj, headers = {"accept": "*/*", "X-API-KEY": "azk_42163e54-49d8-49b3-89c6-96a734e73daa", "Access-Control-Allow-Origin": "*"})

        self.wfile.write("OK".encode("utf-8"))

    def do_POST(self):
        self.do_GET()

if __name__ == '__main__':
    test(CORSRequestHandler, HTTPServer, port=int(sys.argv[1]) if len(sys.argv) > 1 else 8080)
