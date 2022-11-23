import Header from "../components/HeaderComponent/Header";
import LeftBar from "../components/Home/LeftBar";

export default function HomePage() {
  return (
    <>
      <Header></Header>
      <div className="home">
        <div className="home__body">
          <LeftBar></LeftBar>
        </div>
      </div>
    </>
  )
}
