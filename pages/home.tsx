import Article from "../components/Home/Article";
import HomeLayout from "../layout/HomeLayout";

export default function Home() {
    return (
        <HomeLayout>
            <div className="article-content">
                <Article title={'awd'} userName={'awd'} subtitle={'awd'} count={1} id={2} ></Article>
            </div></HomeLayout>
    )
}