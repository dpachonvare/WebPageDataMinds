import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">Data Minds</h3>
            <p className="text-sm mb-4">
              Microsoft Fabric & Power BI consulting for Australian businesses.
            </p>
            <p className="text-sm">
              <a href="mailto:hello@dataminds.au" className="hover:text-azure-400 transition-colors">
                hello@dataminds.au
              </a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#consulting" className="hover:text-azure-400 transition-colors">
                  Consulting & Audit
                </Link>
              </li>
              <li>
                <Link href="/services#implementation" className="hover:text-azure-400 transition-colors">
                  Implementation
                </Link>
              </li>
              <li>
                <Link href="/services#ai-ml" className="hover:text-azure-400 transition-colors">
                  AI & ML
                </Link>
              </li>
              <li>
                <Link href="/services#managed" className="hover:text-azure-400 transition-colors">
                  Managed Services
                </Link>
              </li>
              <li>
                <Link href="/services#training" className="hover:text-azure-400 transition-colors">
                  Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions#utilities" className="hover:text-azure-400 transition-colors">
                  Utilities
                </Link>
              </li>
              <li>
                <Link href="/solutions#asset-management" className="hover:text-azure-400 transition-colors">
                  Asset Management
                </Link>
              </li>
              <li>
                <Link href="/solutions#retail" className="hover:text-azure-400 transition-colors">
                  Retail
                </Link>
              </li>
              <li>
                <Link href="/solutions#d365" className="hover:text-azure-400 transition-colors">
                  Microsoft D365
                </Link>
              </li>
              <li>
                <Link href="/solutions#sap" className="hover:text-azure-400 transition-colors">
                  SAP
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-azure-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-azure-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-azure-400 transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-azure-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Data Minds. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-azure-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-azure-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
