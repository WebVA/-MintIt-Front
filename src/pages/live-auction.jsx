import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import LiveExploreArea from "@containers/live-explore/layout-02";

// Demo data
import liveAuction_Data from "../data/live-auction.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const LiveAuction = () => {
    const liveAuctionData = liveAuction_Data
        .filter(
            (prod) =>
                prod?.auction_date && new Date() <= new Date(prod?.auction_date)
        )
        .slice(0, 5);
    return (
        <Wrapper>
            <SEO pageTitle="Live Auction" />
            <Header />
            <main id="main-content">
                <Breadcrumb
                    pageTitle="Live Auction"
                    currentPage="Live Auction"
                />
                <LiveExploreArea
                    data={{
                        products: liveAuctionData,
                    }}
                />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default LiveAuction;
