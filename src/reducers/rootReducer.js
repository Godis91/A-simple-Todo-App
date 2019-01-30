const initState = {
  posts: [
    { id: '1', title: 'My first day in school', body: 'Lorem ipsum dolor  enetur ad at! Mollitia fugit elit. Perferendis, nisi temporibus. Aliquam, minus ullamsit amet consectetur adipisicing elit. Facere, magni. Voluptates quibusdam impedit dolores!'},
    { id: '2', title: 'The journey begins', body: 'exercitationem illo voluptate tenetur ad at! Mollitia fugit elit. Perferendis,  neque architecto facilis veniam nemo eligendi reiciendis ratione solutanisi temporibus. Aliquam, minus ullam.'},
    { id: '3', title: 'The lord of the rings', body: 'Fugit, neque architecto facilis veniam nemo  Mollitia fugit elit. Perferendis,eligendi reiciendis ratione soluta itaque in maiores molestias vero nostrum'}
  ]
}

const rootReducer = (state = initState, action) => {
  if(action.type === 'DELETE_POST'){
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    });

    return {
      ...state,
      posts:newPosts
    }
  }
  return state;
}

export default rootReducer;