import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import RankingArea from "@containers/ranking";

// Demo data for the ranking page
import popularData from "../data/popular.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Popular = () => (
    <Wrapper>
        <SEO pageTitle="Popular" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Our Top NFTs" currentPage="Ranking" />
            <RankingArea data={{ ranking: popularData }} />
        </main>
        <Footer />
    </Wrapper>
);

export default Popular;
