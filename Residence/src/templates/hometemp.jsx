import Search from "../sections/home/Search";
import ProductSection from "../sections/home/Products";
import AgencySection from "../sections/home/Agency";
import CategorySection from "../sections/home/CategorySection";
import OurTeamsSection from "../sections/home/OurTeams";
import DealsSection from "../sections/home/ExclusiveDeals";
import BannerSection from "../sections/home/Banner";
import FeedBackSection from "../sections/home/FeedBacks";
import ArticleSection from "../sections/home/ArticlesSection";

const HomeTemplate = () => {
  return (
    <div>
      <Search />
      <ProductSection />
      <AgencySection />
      <CategorySection />
      <OurTeamsSection />
      <DealsSection />
      <BannerSection />
      <FeedBackSection />
      <ArticleSection />
    </div>
  );
};

export default HomeTemplate;
