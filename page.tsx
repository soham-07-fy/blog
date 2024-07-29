import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-green-200 flex items-center justify-center">
      <Head>
        <title>User Profile</title>
      </Head>
      <div className="bg-green-500 p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="ml-4 flex-1">
            <div className="bg-gray-200 p-2 rounded mb-2">
              <p className="text-gray-700">Username</p>
            </div>
            <div className="bg-gray-200 p-2 rounded">
              <p className="text-gray-700">User ID</p>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-700"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Content"
            className="w-full p-4 h-40 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-700"
          />
        </div>
        <div className="mb-0.5">
          <input
            type="text"
            placeholder="Tags"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-700 mt-4"
          />
        </div>
      </div>
    </div>
  );
}
