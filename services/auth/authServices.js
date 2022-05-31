import axiosClient from "../../config/axios/axios";
import Cookies from "js-cookie";

export const login = async ({ identifier, password, remember }) => {
  try {
    const res = await axiosClient.post("/auth/local", { identifier, password });
    console.log(res);

    if (remember) {
      Cookies.set(
        "session",
        JSON.stringify({
          user: {
            username: res.data.user.username,
            email: res.data.user.email,
          },
          jwt: res.data.jwt,
        }),
        { secure: true, expires: 7 }
      );
    } else {
      Cookies.set(
        "session",
        JSON.stringify({
          user: {
            username: res.data.user.username,
            email: res.data.user.email,
          },
          jwt: res.data.jwt,
        }),
        { secure: true }
      );
    }

    return {
      user: {
        username: res.data.user.username,
        email: res.data.user.email,
      },
      jwt: res.data.jwt,
    };
  } catch (error) {
    throw new Error(error?.response?.data?.error?.message);
  }
};

export const logout = async () => {
  Cookies.remove("session");
};
