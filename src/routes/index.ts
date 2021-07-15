import express from 'express';
import UserRouter from './user.routes';
import PostRouter from './post.routes';
import CommentRouter from './comment.routes';

const router = express.Router();

router.use('/users', UserRouter);
router.use('/posts', PostRouter);
router.use('/comments', CommentRouter);

export default router
