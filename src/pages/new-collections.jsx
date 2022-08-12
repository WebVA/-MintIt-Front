import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import UpcomingProjectsArea from "@containers/upcoming-projects";

// Demo Data
import newCollectionData from "../data/new-collection.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const NewCollection = () => (
    <Wrapper>
        <SEO pageTitle="New Collection" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="New Collection Projects"
                currentPage="New Collection"
            />
            <UpcomingProjectsArea data={{ upcomingProjects: newCollectionData }} />
        </main>
        <Footer space={2} />
    </Wrapper>
);

export default NewCollection;
