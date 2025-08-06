import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import sendMail from "./utils/sendMail";
dotenv.config();

const app = express();
app.use(express.json());
app.post("/attendance", async (req, res) => {
    const phno = req.body.phno;
  if (!phno) {
    throw new Error("Missing phone Number");
  }

  const attendance = await axios.post(`${process.env.SLCM_API_URL}/attendance`, {
    phno,
  });

  if (attendance) {
    await sendMail(attendance.data.data);
  }
  res.json({
    message: "mail sent",
  });
});

app.listen(3001, () => {
  console.log("app started at port 3000");
});
