const localhost = "http://127.0.0.1:8000";
const global = "https://girmantaskbackend.vercel.app";

export const fetchUserData = async () => {
    const response = await fetch(localhost+"/api/userdata/");
    console.log(response);
    return response.json();
  };
  
export const postUserData = async (data) => {
    const response = await fetch(localhost+"/api/userdata/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  export const fetchUserDataByName = async (name) => {
    const response = await fetch(localhost+"/api/userdata_byname/"+name);
    console.log(response);
    return response.json();
  };