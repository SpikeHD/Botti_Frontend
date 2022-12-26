/**
 * Helper API request function, does the annoying stuff for us
 * 
 * @param path 
 * @param method 
 * @param data 
 */
export async function apiRequest(path: string, method: 'GET' | 'POST', data: Record<string, unknown>) {
  const apiKey = window.localStorage.getItem('auth_key');
  const url = `${process.env.API_URL}${path}`

  if (method === 'GET') {
    const querydata = data && Object.keys(data).map(k => `${k}=${data[k]}`).join('&')
    
    return (await fetch(`${url}?api_key=${apiKey}&${querydata ? querydata : ''}`)).body
  } else if (method === 'POST') {
    const postbody = data

    return (await fetch(`${url}?api_key=${apiKey}`, {
      body: JSON.stringify(postbody),
    })).body
  }
}

export async function getProfile(uid: number) {
  const user = await apiRequest('/profile', 'GET', {
    uid,
  })
  const posts = await apiRequest('/getPosts', 'GET', {
    uid,
    limit: 20
  })

  return {
    ...user,
    posts,
  }
}