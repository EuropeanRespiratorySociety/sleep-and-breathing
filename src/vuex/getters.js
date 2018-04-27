export const slug = state => {
  return state.route.path.split('/').pop() || 'home'
}
