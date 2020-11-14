const mongoose = require("mongoose");


const PirateSchema = new mongoose.Schema(
    {
       name:{
        type:String,
        required: [true, "{PATH} is required"],
        minlength: [1, "{PATH} must be at least {MINLENGTH}"]
        },
        image:{
            type:String
        },
        chests:{
            type:Number,
            required: [true, "{PATH} is required."],
            min:[0, "{PATH}, can only be minimum of 0."]
        },
        phrase:{
            type:String,
            required: [true, "{PATH} is required."],
            minlength: [2, "{PATH} must be atleast {MINLENGTH}."],
            maxlength: [20, "{PATH} must be max of {MAXLENGTH}."]
        },
        position:{
            type:String,
            required: [true, "{PATH} is required."]
        },
        pegleg:{
            type:Boolean,
            default: false
        },
        eyepatch:{
            type:Boolean,
            default: false
        },
        hook:{
            type:Boolean,
            default: false
        }


},{timestamps: true});


const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;