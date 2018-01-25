var mongoose = require('mongoose');
var QuoteSchema = new mongoose.Schema({
    quote: { type: String, required: [true, 'Quote is required'], min: [4, 'Quote length must be 4 characters long']},
    author: { type: String, require: [true, 'Author is required'], min: [1, 'Author length must be at least 1 characte long']},
    votes: { type: Number }
})

var Quote = mongoose.model('Quote', QuoteSchema);