import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ProductArea from "@containers/product/layout-02";

// Demo data
import exploreData from "../data/explore.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home02 = () => (
    <Wrapper>
        <SEO pageTitle="Explore" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Explore" currentPage="Explore" />
            <ProductArea
                data={{
                    section_title: {
                        title: "OUR All NFT'S",
                    },
                    products: exploreData,
                }}
            />
        </main>
        <Footer />
    </Wrapper>
);

export default Home02;
