import { useLocation } from "react-router-dom";
import Navbar from "../component/Navbar";

function ResultPage() {
  const location = useLocation();

  const { result, formData } = location.state;

  return (
    <>
    <div>
      <Navbar />
      </div>
      

      <div className="min-h-screen mx-24 bg-gray-100 py-10" style={{ marginTop: "50px", marginLeft: "30px"}}>
        <div className="mx-auto max-w-6xl flex flex-col gap-6">

          {/* Success Card */}
          <div className="bg-white rounded-xl w-full mt-20 shadow-xl border border-gray-200 p-8">

            <div className="flex items-center mt-12 gap-8">

              <div className="w-15  h-15 rounded-full bg-green-100 flex items-center justify-center text-xl">
                ✅
              </div>

              <div>
                <h1 className="text-xl font-bold text-green-700">
                  We found {result.totalEligibleSchemes} scheme(s)!
                </h1>

                <p className="text-gray-700 mt-2 text-sm">
                  Based on your details, you are eligible for the following
                  government schemes.
                </p>
              </div>

            </div>

          </div>

        <div>
              {/* User Details */}
               <div className="text-3xl font-bold flex items-center gap-3 mb-10 mr-16">
            <span>👤</span>
            <h1>Your Details</h1>
          </div>
          <div className="bg-white rounded-xl  shadow-xl border border-gray-200 p-8">

          

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-500 text-sm">Gender</p>
                <p className="font-bold text-sm">{formData.gender}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-500 text-sm">Age</p>
                <p className="font-bold text-sm">{formData.age}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-500 text-sm">Income</p>
                <p className="font-bold text-sm">
                  ₹ {Number(formData.income).toLocaleString()}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-500 text-sm">Occupation</p>
                <p className="font-bold text-sm">{formData.occupation}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-500 text-sm">State</p>
                <p className="font-bold text-sm">{formData.state}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-500 text-sm">Category</p>
                <p className="font-bold text-sm">{formData.category}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-500 text-sm">BPL Family</p>
                <p
                  className={`font-bold text-sm ${
                    formData.isBPL ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {formData.isBPL ? "Yes" : "No"}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-500 text-sm">Disability</p>
                <p
                  className={`font-bold text-sm ${
                    formData.isDisable ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {formData.isDisable ? "Yes" : "No"}
                </p>
              </div>

            </div>

          </div>

          {/* Eligible Schemes */}

          <div className="flex flex-col gap-6">

            <h2 className="text-2xl border-white font-bold text-gray-800 mb-6">
               Eligible Schemes
            </h2>

            <div className="flex flex-col gap-6">

              {result.eligibleSchemes.map((scheme) => (

                <div
                  key={scheme.schemeId}
                 className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8 hover:shadow-xl transition-all duration-300"
                >

                  <div className="flex justify-between items-start">

                    <div>

                      <h3 className="text-xl font-bold text-green-700">
                        {scheme.schemeName}
                      </h3>

                      <p className="text-gray-600 mt-3 leading-7">
                        {scheme.description}
                      </p>

                    </div>

                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                      Eligible
                    </span>

                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">

                    <div className="bg-green-50 rounded-xl p-5">

                      <h4 className="font-bold text-green-700 mb-3">
                        🎁 Benefits
                      </h4>

                      <p className="text-gray-700">
                        {scheme.benefits}
                      </p>

                    </div>

                    <div className="bg-blue-50 rounded-xl p-5">

                      <h4 className="font-bold text-blue-700 mb-3">
                        📄 Required Documents
                      </h4>

                      <p className="text-gray-700">
                        {scheme.documentsRequired}
                      </p>

                    </div>

                  </div>

                  <div className="mt-8">

                    <a
                      href={scheme.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                    >
                      Visit Official Website →
                    </a>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>
      </div>
        </div>
    </>
  );
}

export default ResultPage;