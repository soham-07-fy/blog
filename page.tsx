import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center overflow-y-auto">
      <Head>
        <title>Profile</title>
      </Head>
      <div className="space-y-8 max-w-3xl w-full p-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-green-300 p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="ml-4 flex-1">
                <div className="bg-gray-200 p-3 rounded-xl mb-2">
                  <p className="text-gray-700">Sample User profile</p>
                </div>
                <div className="bg-gray-200 p-3 rounded-xl">
                  <p className="text-gray-700">Sample User ID</p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Title"
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-900"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Content"
                className="w-full p-4 h-56 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-900"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Tags"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-900"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

