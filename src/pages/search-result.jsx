import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ExploreProductArea from "@containers/explore-product/layout-08";

// Demo data
import productData from "../data/search-result.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const SearchResult = () => (
    <Wrapper>
        <SEO pageTitle="Search Result" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Search Result" currentPage="Search Result" />
            <ExploreProductArea
                data={{
                    products: productData,
                }}
            />
        </main>
        <Footer />
    </Wrapper>
);

export default SearchResult;
