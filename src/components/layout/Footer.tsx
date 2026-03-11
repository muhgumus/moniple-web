import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Moniple"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">Moniple</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm max-w-xs">
              Monitor your Kubernetes clusters from anywhere. Real-time metrics, multi-cluster management, all in one place.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Get Started</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://app.moniple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Launch App
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@moniple.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@moniple.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Moniple. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
