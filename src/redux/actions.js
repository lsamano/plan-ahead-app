import { push } from 'connected-react-router'

export const getProfileFetch = token => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
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
  console.log("Now beginning login fetch...");
  return dispatch => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      body: JSON.stringify({user: loginObj}),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
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
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      body: JSON.stringify({user: signupObj}),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
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
