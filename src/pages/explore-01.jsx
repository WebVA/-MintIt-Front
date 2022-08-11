import { useState } from "react";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ExploreProductArea from "@containers/explore-product/layout-01";
import LiveExploreArea from "@containers/live-explore/layout-02";

// Demo data
import productData from "../data/products.json";
import productData1 from "../data/products-02.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

function Home02 () {
    const [pageNumber, setPageNumber] = useState(1);

    const onPageChageHandler = (page) => {
        console.log('------haha-----', page);
        setPageNumber(page);
    }

    const liveAuctionData = productData1
        .filter(
            (prod) =>
                prod?.auction_date && new Date() <= new Date(prod?.auction_date)
        )
        .slice(0, 5);

    return (
    <Wrapper>
        <SEO pageTitle="Explore Filter" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Explore Filter"
                pageTitle1="Explore Filter1"
                currentPage="Explore With Filter"
                onPageChageHandler={onPageChageHandler}
            />
            {pageNumber === 1 && <ExploreProductArea
                data={{
                    section_title: {
                        title: "Explore Product",
                    },
                    products: productData,
                }}
            />}
            {pageNumber === 2 && <LiveExploreArea
                data={{
                    products: liveAuctionData,
                }}
            />}
        </main>
        <Footer />
    </Wrapper>
    )
    
};

export default Home02;
