import express from 'express';

const router = express();

router.get('/', (req, res) =>
  res.status(200).json({
    status: res.statusCode,
    message: 'Welcome to Nodejs API starter Template',
  })
);

export default router;
