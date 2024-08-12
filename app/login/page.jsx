"use client";

import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const loginHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = {
      username: form.get("username"),
      password: form.get("password"),
    };

    if (
      formData["username"] === "admin" &&
      formData["password"] === "admin01"
    ) {
      router.push("/");
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <form onSubmit={loginHandler}>
            <input type="text" placeholder="Username" name="username" />
            <input type="password" placeholder="Password" name="password" />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
