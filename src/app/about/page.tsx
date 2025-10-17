export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About TaskFlow</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn more about our mission to make task management simple and effective for everyone.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At FlowTask, we believe that effective task management should be accessible to everyone. 
            Our mission is to provide a simple, intuitive, and powerful platform that helps individuals 
            and teams organize their work, reduce stress, and achieve their goals.
          </p>
          <p className="text-gray-600">
            We&apos;re committed to continuous improvement and innovation, always listening to our users 
            to create the best possible task management experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Simple & Intuitive</h3>
            <p className="text-gray-600">
              Clean design and straightforward functionality make task management a breeze, 
              not a chore.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Powerful Features</h3>
            <p className="text-gray-600">
              From priority settings to due dates, get the features you need without the complexity.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Your Data, Your Control</h3>
            <p className="text-gray-600">
              We respect your privacy. Your tasks and data are secure and under your control.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Always Evolving</h3>
            <p className="text-gray-600">
              Regular updates and new features based on user feedback and the latest technology.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">The Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h3 className="font-semibold text-gray-800">Aaron Jan Estacio</h3>
              <p className="text-gray-600 text-sm">Founder & Developer</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-gray-800">hahaha</h3>
              <p className="text-gray-600 text-sm">UI/UX Design</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-semibold text-gray-800">Everyone</h3>
              <p className="text-gray-600 text-sm">Our Users</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            We&apos;d love to hear from you. Get in touch with any questions or feedback.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}