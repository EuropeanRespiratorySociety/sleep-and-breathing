export const slug = state => {
  console.log(state)
  return state.route.path.split('/').pop() || 'home'
}
