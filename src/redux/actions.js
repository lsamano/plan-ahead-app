import { push } from 'connected-react-router'

export const getProfileFetch = token => {
  return dispatch => {
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
      if (data.errors) {
        localStorage.removeItem("token")
        console.log("Invalid token", data);
        dispatch(push('/login'))
      } else {
        console.log("fetched the profile", data)
        dispatch(loginUser(data.user))
      }
    });
  }
}

const loginUser = userObj => ({
  type: "LOGIN_USER",
  payload: userObj
})

const logoutUser = () => ({
  type: "LOGOUT_USER"
})

export const loginFetch = loginObj => {
  console.log("Now beginning signup fetch...");
  return dispatch => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(loginObj),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data.errors) {
        alert(data.errors)
      } else {
        localStorage.setItem("token", data.jwt);
        dispatch(loginUser(data.user))
      }
    })
  }
}

export const signupFetch = signupObj => {
  return dispatch => {
    console.log("Now beginning signup fetch...");
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(signupObj),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data.errors) {
        alert(data.errors)
      } else {
        localStorage.setItem("token", data.jwt);
        dispatch(loginUser(data.user))
      }
    })
  }
}

export const logoutUserDispatch = () => {
  return dispatch => dispatch(logoutUser())
}
