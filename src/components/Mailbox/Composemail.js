import { Button } from "@mui/material";
import React, { useState } from "react";
import "../../styles/ComposeMail.css";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

const Composemail = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const composeHandler = (e) => {
    e.preventDefault();
    if (email === "" || subject === "" || message === "") {
      alert("please fill all the details");
    }
    const string = localStorage.getItem("id");
    const mailId = string.replace(/[&,+()$~%@.'":*?<>{}]/g, "");
    axios
      .post(
        `https://userdatamailbox-default-rtdb.firebaseio.com/${mailId}.json`,
        {
          To: email,
          Subject: subject,
          message: message,
        }
      )
      .then((res) => res.data)
      .catch((err) => console.Console.log(err));

    alert("email sent successful");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__header__left">
          <span>New Message</span>
        </div>
        <div className="compose__header__right">close</div>
      </div>
      <form onSubmit={composeHandler}>
        <div className="compose__body">
          <div className="compose__bodyForm">
            <input
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="To"
            />
            <input
              type={"text"}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
            />{" "}
            {message}
            <textarea
              rows={"34"}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
            ></textarea>
          </div>
        </div>
        <div className="compose__footer">
          <div className="compose__footerLeft">
            <Button
              type="submit"
              variant="contained"
              size="small"
              endIcon={<SendIcon />}
            >
              send
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Composemail;
