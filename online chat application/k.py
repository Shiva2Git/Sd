
from pymongo.mongo_client import MongoClient
from bson import ObjectId

uri = "mongodb+srv://shiva143:WdaLHr2iyJHQkb6g@admindb.h8gckwm.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri)

# Send a ping to confirm a successful connection
try:
    db = client['AdminDB']
    collection = db['Users']
    collection.update_one({"_id":ObjectId("6573f775d2d6d715cf9cd4fb")},{"$set": {"Chat":[]}})
    # result=collection.insert_one({"name":"hello"})
    # result=collection.find_one({"name":"hello"})
    # print(result["_id"])
    # client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)






#   WdaLHr2iyJHQkb6g 