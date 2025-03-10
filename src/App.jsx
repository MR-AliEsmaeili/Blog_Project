import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./Pages/Home"
import NotFoundPage from "./Pages/NotFoundPage"
import AuthorDetailPage from "./Pages/AuthorDetailPage"
import PostDetailPage from "./Pages/PostDetailPage"

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/blog/:slug" element={<PostDetailPage />} />
        <Route path="/author/:slug" element={<AuthorDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export default App
