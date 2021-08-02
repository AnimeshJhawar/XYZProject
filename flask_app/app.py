from os import EX_CANTCREAT
from flask import Flask, request, jsonify
from main import api_admin, api_client
import sys

app = Flask(__name__)
app.debug = True


@app.route('/admin')
def admin():
    username = request.args.get('username')
    start = request.args.get('start')
    try:
        api_admin(username, start)
        return "Success"
    except:
        print(sys.exc_info())
        return "error"


@app.route('/client')
def client():
    username = request.args.get('username')
    start = request.args.get('start')
    end = request.args.get('end')

    try:
        sentiments = api_client(username, start, end)
        return jsonify(sentiments)
    except:
        return "error: " + str(sys.exc_info())


if __name__ == '__main__':
    app.run()
