import express from 'express' ; 
import { getPosts,createPost ,UpdatePost} from '../controllers/posts.js';

const router = express.Router() ; 

router.get('/', getPosts) ; 
router.post('/', createPost) ;
router.patch('/:id',UpdatePost) ; 


export default router ; 