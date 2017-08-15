const initState = {}
const aboutUs = (state = initState, action) => {
  switch (action.type) {
    case 'INIT_ABOUT_US':
      return action.aboutUs
    case 'CLEAR_ABOUT_US':
      return {}
    default: return state
  }
}

export default aboutUs