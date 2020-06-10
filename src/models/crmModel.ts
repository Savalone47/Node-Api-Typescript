import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

export const ContactSchema = new Schema({

	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	email: {
		type: String
	}, 
	company: {
		type: String
	},
	phone: {
		type: Number
	},
	created_data: {
		type: Date,
		default: Date.now
	}
});