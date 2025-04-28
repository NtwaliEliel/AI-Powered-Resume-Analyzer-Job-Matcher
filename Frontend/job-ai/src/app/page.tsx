import Image from "next/image";
import Navbar from "../components/Navbar"; // Adjust the path if necessary

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <Image
            src="/Earn.png" // Replace with the actual path to your logo
            alt="Earn Logo"
            width={150}
            height={150}
            className="mx-auto"
          />
          <h2 className="text-2xl font-semibold mt-6">
            Your AI-Powered Career Assistant
          </h2>
          <p className="text-gray-600 mt-4">
            Simplify your job search with AI. Upload your resume, get personalized job matches, and track your applications in one place.
          </p>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-orange-100 shadow-md rounded-lg p-6 text-center">
            <Image
              src="/upload-icon.svg" // Replace with your upload icon
              alt="Upload Icon"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Upload Resume</h3>
            <p className="text-gray-600">
              Easily upload your resume in PDF or Word format.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-orange-100 shadow-md rounded-lg p-6 text-center">
            <Image
              src="/ai-icon.svg" // Replace with your AI icon
              alt="AI Icon"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
            <p className="text-gray-600">
              Our AI reads and understands your resume to extract key insights.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-orange-100 shadow-md rounded-lg p-6 text-center">
            <Image
              src="/job-matching-icon.svg" // Replace with your job matching icon
              alt="Job Matching Icon"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Job Matching</h3>
            <p className="text-gray-600">
              Get matched to jobs that fit your skills and experience.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-orange-100 shadow-md rounded-lg p-6 text-center">
            <Image
              src="/tracking-icon.svg" // Replace with your tracking icon
              alt="Tracking Icon"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Track Applications</h3>
            <p className="text-gray-600">
              Keep track of your job applications in one place.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-orange-500 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Earn Your Dream Job. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
