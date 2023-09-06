import Header from "./components/Header";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import ArticleView from "./components/ArticleView";
import { Routes, Route } from "react-router-dom";
import SortAndFilter from "./components/SortAndFilter";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/:topic_slug" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticleView />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
