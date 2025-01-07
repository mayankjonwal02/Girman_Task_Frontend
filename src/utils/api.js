export const fetchUserData = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/userdata/");
    console.log(response);
    return response.json();
  };
  
  export const postUserData = async (data) => {
    const response = await fetch("http://127.0.0.1:8000/api/userdata/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  