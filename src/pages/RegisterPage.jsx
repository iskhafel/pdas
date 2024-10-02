import { useState } from "react";
import axios from "axios";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setNotification("");

    axios
      .post("https://reqres.in/api/register", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);

        if (response.data.token) {
          localStorage.setItem("token", response.data.token);

          setNotification("");

          navigate("/login");
        }
      })
      .catch((error) => {
        setNotification("Missing email or password");
        console.log(error);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800">
      <Card className="max-w-sm w-full mx-auto">
        <h1 className="text-3xl font-bold mx-auto">Register</h1>
        <form className="flex flex-col gap-4">
          <div>
            {!!notification.length && (
              <p className="text-red-500 text-center">{notification}</p>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="my@email.com"
              onChange={handleEmail}
              value={email}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              onChange={handlePassword}
              value={password}
              required
            />
          </div>
          <Label className="flex mx-auto gap-1">
            Already have an account?
            <Link className="text-blue-500" to="/login">
              Login
            </Link>
          </Label>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}