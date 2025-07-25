import Link from "next/link";
import { TedxPashaStreet } from "./common/tedx-pasha-street";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <Link href="/" className="text-3xl font-bold mb-4 block">
              <TedxPashaStreet />
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              This independent <span className="text-[#e62b1e]"> TEDx</span>{" "}
              event is operated under license from TED.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#events"
                    className="hover:text-white transition-colors"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="#partners"
                    className="hover:text-white transition-colors"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="#team"
                    className="hover:text-white transition-colors"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Follow Us</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>xxxxxx@xxxx.com</li>
                <li>+216 xx xxx xxx</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} <TedxPashaStreet />. All rights
            reserved.
          </p>
          <p className="mt-2">
            <p className="mt-3 text-xs text-gray-500">
              Developed by 🤖 on behalf of
              <Link
                className="text-[#e62b1e]"
                href={
                  "https://www.linkedin.com/in/erij-maherzia-ben-brahim-04784a112"
                }
                target="_blank"
              >
                {" Erij Maherzia BEN BRAHIM"}
              </Link>
            </p>
          </p>
        </div>
      </div>
    </footer>
  );
}
