const mongodb=require('mongodb')
const mongoClient=mongodb.MongoClient
const connectionURL='mongodb://127.0.0.1:27017'
const dbname="task"

mongoClient.connect(connectionURL, (error, response1)=>{
    if(error){
        return console.log("An error occured")
    }
    console.log("Data is working!")
    const db=response1.db(dbname)

    db.collection('users').insertOne({
        name:"aya",
        age:22,
        city:"egypt"
    },(error,data)=>{
if(error){
    console.log('unable to insert data')
}
console.log(data.insertedId)
    })
//////////////////////////////////////////////////////////////
    db.collection('users').insertOne({
        name:"abdalla",
        age:22,
        city:"beni suef"
    },(error,data)=>{
if(error){
    console.log('unable to insert data')
}
console.log(data.insertedId)
    })



db.collection('users').insertMany([{
        name:"mahmoud",
        age:25,
        city:"egypt"
    },{
        name:"sayed",
        age:25,
        city:"beni suef"
    },{
        name:"salma",
        age:25,
        city:"cairo"
    },{
        name:"ahmed",
        age:25,
        city:"wasta"
    },{
        name:"osama",
        age:25,
        city:"cairo"
    },{
        name:"helmy",
        age:32,
        city:"Fayoum"
    },{
        name:"tarek",
        age:23,
        city:"dubai"
    },{
        name:"alfie",
        age:21,
        city:"bush"
    },{
        name:"saad",
        age:23,
        city:"beni suef"
    },{
        name:"ali",
        age:29,
        city:"cairo"
    }
], (error,data)=>{
    if(error){
        console.log('unable to insert data')
    }
    console.log(data.insertedCount)
})

db.collection('users').find({age:25}).toArray((error,users)=>{
    if(error){
        console.log('unable to get the id')
    }
    console.log(users)
})
//////////////////////////////////////////////////////////////////////////////////
db.collection('users').find({age:25}).limit(3).toArray((error,users)=>{
    if(error){
        console.log('unable to get the id')
    }
    console.log(users)
})
////////////////////////////////////////////////////////////////////////////////
db.collection('users').updateMany({age:25},{
    $set:{name:"abdalla"}
}).then((data1)=>{
    console.log(data1.modifiedCount)
}).catch((error)=>{
    return console.log(error)
})

//////////////////////////////////////////////////////////////

db.collection("users").updateOne({_id:mongodb.ObjectId("64dcf4ea24ec64e2cce1ff50")},{
    $inc:{age:20}
})

////////////////////////////////////////////////////////////////////////////////////

db.collection("users").updateMany({},{
    $inc:{age:10}
})

///////////////////////////////////////////////////////////////////////////////

db.collection("users").deleteOne({_id:mongodb.ObjectId("64dcf4ea24ec64e2cce1ff50")}).then((data1)=>{
    console.log(data1.modifiedCount)
}).catch((error)=>{
    console.log(error)
})

////////////////////////////////////////////////////////////////////////////////

db.collection("users").deleteMany({age:35}).then((data1)=>{console.log(data1.deletedCount)}).catch((error)=>{
    console.log(error)
})

})




