import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-black text-slate-900 mb-2">404</h1>
      <p className="text-sm text-slate-600 mb-6">Page Not Found</p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs"
      >
        Back to Home
      </Link>
    </div>
  );
}
