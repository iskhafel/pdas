import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <section className="bg-slate-800">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">ReqRes Minpro</h1>
            <p className="mt-4 text-white">
              Discover our amazing services that will help your business grow.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
