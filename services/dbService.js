var MongoClient= require('mongodb').MongoClient;

var DataBaseURL="mongodb://dbadmin:dbadmin1@ds159100.mlab.com:59100/projectordb";

module.exports={
	createConnection: function(){
		console.log("inside createConnection");
		MongoClient.connect(DataBaseURL,(err,dBase) =>{
		if(err){
			console.log("error",err);
		}
		else{
			console.log("connected");
			module.exports.database=dBase.db("projectordb");
		}

		});
	}
}