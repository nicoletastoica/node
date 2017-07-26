var mongoose = require ('mongoose');
	Schema  = mongoose.Schema;
	
var BookModel = new Schema({
	
	title : {
		
		type :String
	},
	author :
	{
		type : String
	},
	read : {
		type :Boolean, default:false
	}
	
});


module.export =mongoose.model('Book', BookModel);