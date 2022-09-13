import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import CollectionArea from "@containers/collection/layout-03";

// demo data
import collectionsData from "../data/collections.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Collection = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Discover Collections" />
            <Header />
            <main id="main-content">
                <Breadcrumb
                    pageTitle="Discover Collections"
                    currentPage="Collection"
                />
                <CollectionArea
                    data={{
                        collections: collectionsData,
                        section_title: {
                            title: "Discover Collections",
                        },
                    }}
                />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Collection;
