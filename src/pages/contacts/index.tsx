import React, { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"

const Contacts = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const data = {
      email: email,
      name: name,
      body: body
    }

    axios({
      method: "post",
      url: "https://komeiotake.microcms.io/api/v1/contacts",
      data: data,
      headers: {
        "Content-Type": "application/json",
        "X-WRITE-API-KEY": process.env.write_api_key
      }
    })
      .then(() => {
        router.push("/contacts/complete")
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <input
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <textarea
        name="body"
        value={body}
        onChange={e => setBody(e.target.value)}
      />
      <button onClick={handleSubmit}>お問い合わせする</button>
    </div>
  )
}

export default Contacts;
