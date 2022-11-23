import Header from "../components/HeaderComponent/Header";
import Article from "../components/Home/Article";
import LeftBar from "../components/Home/LeftBar";

export default function HomePage() {
  return (
    <>
      <Header></Header>
      <div className="home">
        <div className="home__body">
          <LeftBar></LeftBar>
          <div className="article-content">
            <Article title={'awd'} userName={'awd'} subtitle={'awd'} count={1} id={2} ></Article>
          </div>
        </div>
      </div>
    </>
  )
}
