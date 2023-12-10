# from flask import Flask
# from pymongo import MongoClient

# app = Flask(__name__)
MONGODB_PWD='g8ruK1eT7rc7UOeH'

# CONNECTION_STRING =f'mongodb+srv://shiva35143:{MONGODB_PWD}@chatdatabase.ljdetll.mongodb.net/?retryWrites=true&w=majority'




# @app.route('/')
# def hello():
#     try:
#         print("hyy")
#         client = pymongo.MongoClient(CONNECTION_STRING)
#         db = client.get_database('chatdatabase')
#         print("yes")
#         # user_collection = pymongo.collection.Collection(db, 'user_collection')
#         return "done"
#     except:
#         return "not"


# if __name__ == '__main__':
#     app.run(debug=True,port=5001)



from pymongo.mongo_client import MongoClient
from pprint import pprint

uri = f"mongodb+srv://shiva35143:{MONGODB_PWD}@admindb.jlux2cv.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(uri)

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
    db = client['AdminDB']
    collection = db['Users']

    data_to_insert = {
    "name": "John Doe",
    "age": 30,
    "city": "New York"}
    # result=collection.find() ------------------------------------------select all
    # result = collection.insert_one(data_to_insert) #--------------------insert one data
    print("done")
    # collection.update_one({"name":"John Doe"},{"$set":{"data":[]}})#-----update one
    # data=collection.find({"name":"John Doe"},{"data":1})           -----filter 
    # result = collection.update_one({"name": "John Doe"}, {"$push": {"data": "Hello world"}})
    # result = collection.update_one({"name": "John Doe"}, {"$pull": {"data": "Hello world"}})
    # collection.delete_one({"name": "John Doe"})
    # collection.update_one({"name": "John Doe"}, {"$unset": {"data": ""}})
    # collection.update_one({"name": "John Doe"}, {"$unset": {"data": ""}})
    result = collection.find_one({"name":"John Doe"})
    print(result['_id'])
    # data=collection.find()
    # data=collection.update({"name":"John Doe"},)

    

    # for i in data:
    #     pprint(i)

except Exception as e:
    print(e)





