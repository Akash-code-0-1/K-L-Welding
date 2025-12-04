import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/kl-welding-logo.jpeg"
                alt="K & L Welding Logo"
                className="h-8 w-8 object-contain opacity-90 rounded-full"
              />
              <h3 className="text-xl font-bold">K & L Welding</h3>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Professional metal fabrication and welding services for all your
              industrial and commercial needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-background/80 hover:text-background transition-colors hover:translate-x-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-background/80 hover:text-background transition-colors hover:translate-x-1"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-background/80 hover:text-background transition-colors hover:translate-x-1"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-background/80 hover:text-background transition-colors hover:translate-x-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80 hover:translate-x-1 transition-transform cursor-default">
                Metal Fabrication
              </li>
              <li className="text-background/80 hover:translate-x-1 transition-transform cursor-default">
                Welding Services
              </li>
              <li className="text-background/80 hover:translate-x-1 transition-transform cursor-default">
                Custom Design
              </li>
              <li className="text-background/80 hover:translate-x-1 transition-transform cursor-default">
                Building Materials
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61572774364605&mibextid=wwXIfr&rdid=UDZJWvh4sLUfELQF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ZTrVTZVSJ%2F%3Fmibextid%3DwwXIfr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/20 hover:bg-background/30 rounded-full flex items-center justify-center transition-colors transform hover:scale-110 hover:-translate-y-1"
                >
                  <Facebook size={18} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/20 hover:bg-background/30 rounded-full flex items-center justify-center transition-colors transform hover:scale-110 hover:-translate-y-1"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/20 hover:bg-background/30 rounded-full flex items-center justify-center transition-colors transform hover:scale-110 hover:-translate-y-1"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/80">
            <p>&copy; {currentYear} K & L Welding. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
