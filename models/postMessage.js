import mongoose from 'mongoose' ; 

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default: 0
    } ,
    createdAt:{
        type: Date,
        default: new Date() 
    },  

}) ; 

const PostMessage = mongoose.model('postMessage',postSchema);  //turn my schema to a model 

export default PostMessage ; 