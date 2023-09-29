const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {username: username, secret: username, first_name: username},
      {headers: {"private-key": "87bb6724-89c6-4003-809d-2b3f42765da1"}}
    );
    return res.status(r.status).json(r.data);
  }
  catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);

/* use 
  sudo lsof -i :3001 to find what the port is doing
  kill -9 PID for freeing up the port

  cd Backend/
  npm run start  (to start the backend server)

  cd frontend/
  npm run dev    (to host the chat app)
*/
