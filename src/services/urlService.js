const server = 'https://url-shortener-pipe.herokuapp.com/api/v1/quick-access'
export const postUrl = async (url) => {
  const req = await fetch(server, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url })
  })
  return req
}
export const getUrl = async (params) => {
  const reqParams = `${server}/${params}`
  const req = await fetch(reqParams, {
    method: 'GET'
  })
  return req
}
