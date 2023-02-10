import Header from './Components/Header'
import Section from './Components/Section'
import Posts from './Posts'

function App() {
  const postContent = Posts.map(post => {
    return(
      <Section name={post.name}
      avatar={post.avatar} location={post.location}
      likes={post.likes} post={post.post}
      username={post.username} comment={post.comment}
      />
    )
  })
  return (
    <div>
      <Header />
      {postContent}
    </div>
  )
}

export default App
