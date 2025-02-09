export const registerUser = async ({ username, email, password }) => {
  try {
    // CALLING API
    // console.log(username, email, password);
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      }
    );

    const data = await response.json();

    console.log("THIS IS RESPONSE", response);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
