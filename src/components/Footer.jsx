export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8 px-6 mt-">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Smart Courier</h3>
          <p className="text-sm text-gray-100">Efficient delivery across Bangladesh. Trusted by thousands daily.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/register" className="hover:underline">Register</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">Email: support@smartcourier.com</p>
          <p className="text-sm">Phone: +880 123 456 7890</p>
        </div>
      </div>
      <div className="text-center text-sm mt-8 text-gray-200">© 2025 Smart Courier. All rights reserved.</div>
    </footer>
)}