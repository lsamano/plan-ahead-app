import { push } from 'connected-react-router'

export const getProfileFetch = () => {
  return (dispatch) => {
    let token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            localStorage.removeItem("token")
            console.log("invalid token", data);
            dispatch(push('/login'))
          } else {
            console.log("fetched the profile", data)
            // dispatch(loginUser(data.user))
          }
        });
    } else {
      console.log("No one is signed in.");
    }
  }
}
