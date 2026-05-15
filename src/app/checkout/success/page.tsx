export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-white mb-2">Welcome to Moniple Pro</h1>
        <p className="text-gray-400 mb-8">
          Your subscription is active. You can now access unlimited clusters and AI diagnostics.
        </p>
        <a
          href="https://app.moniple.com"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Open Moniple App
        </a>
      </div>
    </main>
  );
}
