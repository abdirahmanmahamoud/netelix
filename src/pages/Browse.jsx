import MoieModal from "../components/MoieModal";
import Banner from "../components/browse/Banner";
import Header from "../components/browse/Header";
import Row from "../components/browse/Row";
import requests from "../request";

const Browse = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Header />
      <main className="relative space-y-24 pl-4 lg:pl-10">
        <Banner />
        <Row title={"Trending Now"} url={requests.fetchTrending} />
        <Row title={"Actions Movies"} url={requests.fetchActionMovies} />
        <Row title={"Top Roted"} url={requests.fetchTopRated} />
        <Row title={"Romance Movies"} url={requests.fetchRomanceMovies} />
        <Row title={"Horrer Movies"} url={requests.fetchHorrorMovies} />
        <Row title={"Documentaries Movies"} url={requests.fetchDocumantaries} />
        <Row title={"Comedy Movies"} url={requests.fetchComedyMovies} />
        <MoieModal />
      </main>
    </div>
  );
};

export default Browse;
