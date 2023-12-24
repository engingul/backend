const database = 'mekanbul';
use(database);
db.venues.updateOne({"name":"Starbucks"},
  {$push: {"comments": 
    {
      "_id": ObjectId(),
      "author": "Sinan",
      "rating": 5,
      "text": "Kahveler harika",
      "date": new Date()
    }
  }
}
)