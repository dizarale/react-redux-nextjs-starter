import fetch from 'isomorphic-unfetch'
import { getAPIService } from '../services/CallAPI'

export const setAboutUs = (aboutUs) => {
  return {
    type: 'INIT_ABOUT_US',
    aboutUs
  }
}
export const initAboutUs = () => async (dispatch) => {
  console.log('ssssssssssssssssssss')
  const url = 'https://jsonplaceholder.typicode.com/photos'
  // const url = 'http://demo9175863.mockable.io/aboutus'
  
  const res = await getAPIService(url, {}, '')
  if (res.status) {
    dispatch(setAboutUs(res.message))
  } else {

  }
}