from flask import Flask,render_template,jsonify
from flask_socketio import SocketIO,send,emit,join_room
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy import func
from pymongo.mongo_client import MongoClient
import json
import random
import string
import time
from bson import ObjectId


app=Flask(__name__)

# SQLALACHEMY CONNECTION ---------------------------------------------------

app.config['SECRET']="secret!123"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
socket_io=SocketIO(app,cors_allowed_origins="*")
CORS(app)

# MongoDB connection ---------------------------------------------------------

uri = "mongodb+srv://shiva143:WdaLHr2iyJHQkb6g@admindb.h8gckwm.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri)
MONGO_DB=client['AdminDB']
collection = MONGO_DB['Users']
mongo_mgs=MONGO_DB['message']


# ORM FOR SQLALACHEMY --------------------------------------------------------


class Subcriber(db.Model):
    id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(30), nullable=False)
    phoneNo = db.Column(db.String(20), nullable=False)
    userName=db.Column(db.String(80), nullable=False)
    plan = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String(80), nullable=False)
    chatAddress=db.Column(db.String(24),nullable=False)
    


# UPDATE DATE INTO SQLALACHEMY DATABASE ---------------------------------------------

id_count=1

def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    return response

@app.after_request
def after_request(response):
    return add_cors_headers(response)


with app.app_context():
    # db.drop_all()
    # db.session.commit()
    db.create_all()
    # user=Subcriber(id= 2,name= "karthi",email="karthi123@gmail.com" ,phoneNo="9978902657",userName="karthi123",plan=400,category="ecommerce")
    # db.session.add(user)
    # user=Subcriber(id= 3,name= "naveen",email="naveen123@gmail.com" ,phoneNo="9978902757",userName="naveen123",plan=400,category="ecommerce")
    # db.session.add(user)
    # user=Subcriber(id= 4,name= "saw",email="saw123@gmail.com" ,phoneNo="9970902757",userName="saw123",plan=400,category="ecommerce")
    # db.session.add(user)
    # db.session.add(user)
    
    # db.session.add(doctor2)
    #  db.session.commit()
    # db.session.query(Subcriber).delete()
    #  db.session.query(Appointment).delete()
    # db.session.commit()


#  FUNCTION FOR INSERT DATA INTO SQLALACHEMY DATABASE -------------------------------------


def insert_data_SQLALACHEMY(id,name,email,phoneNo,userName,plan,category):
    userName=generate_username(name)
    valid=validUser(userName)
    while True:
        if valid=="":
            break
        else:
            userName=generate_username(name)
            valid=validUser(userName)
    user=Subcriber(id=id_count,name=name,email=email ,phoneNo=phoneNo,userName=userName,plan=plan,category=category)
    db.session.add(user)
    db.session.commit()
    id_count+=1





def generate_username(name):
    random_ = ''.join(random.choices(string.digits, k=4))
    random_suffix = ''.join(random.choices(string.ascii_lowercase, k=2))
    username = name.lower() +random_ + random_suffix
    return username



def trys():
    # sub=Subcriber.query.get(2)
    # db.session.delete(sub)

    # for sub in sub:
    #     sub.chatAddress="6572b670483d45e47f7c943a"
    # db.session.commit()

    chat_address = insert_data_MONGODB(2,"naveen123")
    time.sleep(2)
    chat_address=str(chat_address)
    # print(chat_address)
    # user = Subcriber(id=1,name= "admin",email="admin123@gmail.com" ,phoneNo="9978982757",userName="admin123",plan=0,category="admin",chatAddress=chat_address)
    user = Subcriber(id=2,name= "naveen",email="naveen123@gmail.com" ,phoneNo="9978902757",userName="naveen123",plan=400,category="ecommerce",chatAddress=chat_address)
    db.session.add(user)
    db.session.commit()



def insert_data_MONGODB(id,username):
    data = {
        "SQL_id": id,
        "Username": username,
        "Chat": []
    }
    collection.insert_one(data)
    result=collection.find_one({"Username":username})
    return result['_id']


@app.route("/auto")
def auto():
    return render_template("new.html")



@app.route('/autocomplete/<string:prefix>')
def autocomplete(prefix):
    subscribers = Subcriber.query.filter(Subcriber.userName.like(f'{prefix}%')).all()
    suggestions = [subscriber.userName for subscriber in subscribers]
    return jsonify(suggestions)




@socket_io.on('message')
def handle_mgs(message):
        mgs=message
        if isinstance(message,dict):
            print(message)
            sub=Subcriber.query.filter_by(userName=message['sender']).first()
            MongoDB_Insert(sub.chatAddress,message)
            send(message,broadcast=True)



def chat_address_Create(mgs):
    data = {
        "chats": [mgs]
    }
    result = mongo_mgs.insert_one(data).inserted_id
    return result        




def MongoDB_Insert(address,mgs):
    from pprint import pprint
    id=ObjectId(address)
    existing_entry = collection.find_one({"_id":id, f"Chat.{mgs["resiver"]}": {'$exists': True}})
    sub=Subcriber.query.filter_by(userName=mgs['resiver']).first()
    id_2=ObjectId(sub.chatAddress)
    existing_entry_2 = collection.find_one({"_id":id_2, f"Chat.{mgs["sender"]}": {'$exists': True}})

    if existing_entry:
        existing_entry=existing_entry['Chat'] 
        string_keys = [next(iter(dictionary.keys())) for dictionary in existing_entry if dictionary]
        id=existing_entry[string_keys.index(f'{mgs["resiver"]}')][f'{mgs["resiver"]}']
        id=ObjectId(id)
        mongo_mgs.update_one({"_id":id},{'$push':{'chats':mgs}})
        return

    elif existing_entry_2:
            
            existing_entry_2=existing_entry_2['Chat'] 
            string_keys = [next(iter(dictionary.keys())) for dictionary in existing_entry_2 if dictionary]
            id_2=existing_entry_2[string_keys.index(f'{mgs["sender"]}')][f'{mgs["sender"]}']
            print(id_2)
            id_2=ObjectId(id_2)
            collection.update_one({"_id":id},{'$push': {'Chat': {mgs["resiver"]:id_2}}})
            result=collection.find_one({"_id":id})
            mongo_mgs.update_one({"_id":id_2},{'$push':{'chats':mgs}})
            return
    else:
        chat_address=chat_address_Create(mgs)
        collection.update_one({"_id":id},{'$push': {'Chat': {mgs["resiver"]:chat_address}}})
        return




@app.route("/<string:name>", methods=['GET', 'POST'])
def validUsername(name):
    count = db.session.query(func.count()).filter(Subcriber.userName ==name).scalar()
    if Subcriber.query.filter_by(userName=name).all():
        print(count)
        if count==1:
            return ''
        else:
           return jsonify('you cant use this service contact admin ! UserName Limit error phone number: +91 6374876353 and  email id: shiva35143@gmail.com') 
    else:
        return jsonify('you cant use this service contact admin !phone number: +91 6374876353 and  email id: shiva35143@gmail.com')


def validUser(name):
    if Subcriber.query.filter_by(userName=name).all():
        return True
    else:
        return False






@app.route('/')
def index():
    return render_template('admin.html') 



@app.route('/subcribers', methods=['GET'])
def subcribers():
    trys()
    subcribers = Subcriber.query.all()
    output=[]
    for user in subcribers:
        output.append({
            "id":user.id,
            "name":user.name,
             "email":user.email,
             "phoneNo":user.phoneNo,
             "userName":user.userName,
             "plan":user.plan,
             "category":user.category,
             "chat_address":user.chatAddress
        })
    return jsonify(output)


if __name__=='__main__':
    socket_io.run(app,debug=True)

# host='192.168.1.8'