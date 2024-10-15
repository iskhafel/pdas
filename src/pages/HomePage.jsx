import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      <Header />

      <section className="bg-gray-900">
        <div className="container mx-auto px-6 py-12 flex flex-col items-center justify-center">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-teal-400 animate-pulse">
              ReqRes API
            </h1>
            <p className="mt-4 text-lg text-teal-200 max-w-md mx-auto">
              Explore a powerful API designed for developers to test frontend
              and backend interactions effortlessly. Start your journey with
              mock data today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-bold text-gray-900">Mock API</h3>
              <p className="mt-2 text-gray-700">
                Use pre-defined user data for testing and development without
                setting up a backend.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-bold text-gray-900">
                Seamless Integration
              </h3>
              <p className="mt-2 text-gray-700">
                Integrate ReqRes API with your frontend projects in no time and
                simulate real-world scenarios.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-bold text-gray-900">
                Realistic Responses
              </h3>
              <p className="mt-2 text-gray-700">
                Get structured, realistic responses in JSON format to ensure
                smooth testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Why Use ReqRes API?
            </h2>
            <p className="mt-4 text-gray-600">
              Simplify your development process with our mock API tailored for
              testing, learning, and prototyping.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Mock Data for Testing
              </h3>
              <p className="mt-4 text-gray-600">
                Utilize our user data and resources for realistic test
                environments.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Easy Prototyping
              </h3>
              <p className="mt-4 text-gray-600">
                Build your app prototypes with ready-to-use API calls.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Developer Friendly
              </h3>
              <p className="mt-4 text-gray-600">
                Access detailed documentation and examples to streamline your
                API integration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
