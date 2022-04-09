import express from express;
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/",(req,res) => {
    res.setEncoding("Ckrilf API")
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
