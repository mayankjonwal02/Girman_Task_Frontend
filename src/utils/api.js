export const fetchUserData = async () => {
    const response = await fetch("https://girmantaskbackend.vercel.app/api/userdata/");
    console.log(response);
    return response.json();
  };
  
  export const postUserData = async (data) => {
    const response = await fetch("https://girmantaskbackend.vercel.app/api/userdata/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  