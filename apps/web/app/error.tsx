'use client';

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Error</h1>
        <p className="text-gray-600 mb-4">Something went wrong</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}