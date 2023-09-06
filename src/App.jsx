import Header from "./components/Header";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import ArticleView from "./components/ArticleView";
import { Routes, Route, useSearchParams, useParams } from "react-router-dom";
import SortAndFilter from "./components/SortAndFilter";


const App = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<><SortAndFilter  setSearchParams={setSearchParams}/><Articles  searchParams={searchParams}/></>} />
        <Route path="/:topic_slug" element={<><SortAndFilter  setSearchParams={setSearchParams}/><Articles  searchParams={searchParams}/></>} />
        <Route path="/articles/:article_id" element={<ArticleView />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
