const localhost = "http://127.0.0.1:8000";
const globalhost = "https://girmantaskbackend.vercel.app";

export const fetchUserData = async () => {
    const response = await fetch(globalhost+"/api/userdata/");
    console.log(response);
    return response.json();
  };
  
export const postUserData = async (data) => {
    const response = await fetch(globalhost+"/api/userdata/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  export const fetchUserDataByName = async (name) => {
    const response = await fetch(globalhost+"/api/userdata_byname/"+name);
    console.log(response);
    return response.json();
  };