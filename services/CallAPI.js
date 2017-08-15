import fetch from 'isomorphic-unfetch'

export const getAPIService = async (url, headers, param) => {
  const urlCall = `${url}`
  const res = await fetch(urlCall, {
    method: 'GET',
    headers
  }).then(function (response) {
    return response.json()
  }).then((json) => {
    return { status: true, message: json }
  }).catch((ex) => {
    return { status: false, message: ex }
  })
  return res
}

export const postAPIService = async (url, headers, body) => {
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  }).then(function (response) {
    return response.json()
  }).then((json) => {
    return { status: true, message: json }
  }).catch((ex) => {
    return { status: false, message: ex }
  })
} 