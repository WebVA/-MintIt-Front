import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import ActivityArea from "@containers/activity";

// Demo Data
import notificationData from "../data/notification.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}
const Home = () => (
    <Wrapper>
        <SEO pageTitle="Notifications" />
        <Header />
        <main id="main-content">
            <ActivityArea data={{ activities: notificationData }} />
        </main>
        <Footer />
    </Wrapper>
);

export default Home;
