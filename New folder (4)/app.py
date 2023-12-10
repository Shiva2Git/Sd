from flask import Flask 
from flask_socketio import SocketIO,send


A=[]
app=Flask(__name__)
app.config['SECRET']="shiva143@@S"
socket_io=SocketIO(app,cors_allowed_origins="*")

@socket_io.on("message")
def handle_massage(message):
    print("recived message "+message)
    if message!="User connected":
        send(message,broadcast=True)

@app.route("/chats", methods=['GET','POST'])
def chats():
    if request.method == 'POST':
       data = request.get_json() 
       message = data.get('message')  
       A.append(message)
       return jsonify(A)
    elif request.method=='GET':
        return jsonify(A)

if __name__=="__main__":
    socket_io.run(app,host="192.168.1.8")