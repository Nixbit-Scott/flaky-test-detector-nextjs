export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
        <a href="/" className="text-indigo-600 hover:text-indigo-800">Go home</a>
      </div>
    </div>
  );
}