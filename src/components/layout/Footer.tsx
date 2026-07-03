import Image from 'next/image';
import Link from 'next/link';
import GitHubIcon from '@/components/GitHubIcon';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              Kubernetes monitoring with AI-powered diagnostics. Real-time
              metrics, multi-cluster management, on-premise ready.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/features"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://app.moniple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Launch App
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nairotech/moniple-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2"
                >
                  <GitHubIcon className="w-4 h-4" />
                  Open Source Agent
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nairotech/moniple-agent/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Community
                </a>
              </li>
              <li>
                <Link
                  href="/status"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Apps */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Apps
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://app.moniple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2"
                >
                  Web App
                  <span className="text-xs text-emerald-400">Available</span>
                </a>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/tr/app/moniple-k8s-monitoring/id6761530619?l=tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2"
                >
                  iOS
                  <span className="text-xs text-emerald-400">Available</span>
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.nairotech.moniple"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2"
                >
                  Android
                  <span className="text-xs text-emerald-400">Available</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@moniple.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
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
