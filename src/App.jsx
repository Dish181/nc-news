import Header from "./components/Header";
import Articles from "./components/Articles";
import ArticleView from "./components/ArticleView";
import { Routes, Route, useSearchParams } from "react-router-dom";
import SortAndFilter from "./components/SortAndFilter";
import ErrorPage from "./components/ErrorPage";


const App = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<><SortAndFilter  setSearchParams={setSearchParams}/><Articles  searchParams={searchParams}/></>} />
        <Route path="/articles/:article_id" element={<ArticleView />} />
        <Route path="*" element={<ErrorPage />} />
        </Routes>

    </>
  );
};

export default App;
