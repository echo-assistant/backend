import app from './app';
import router from './routes';

const PORT = process.env.PORT || 3000;

router.routes(app);

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}! 🚀`);
});
