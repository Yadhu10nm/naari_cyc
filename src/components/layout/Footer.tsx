import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { Globe, Link as LinkIcon, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-lavender-50 pt-16 pb-8 border-t border-lavender-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-500 to-lavender-400 flex items-center justify-center text-white font-bold text-xl">
                N
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">Naari Cycle</span>
            </Link>
            <p className="text-gray-600 max-w-sm mb-6">
              Empowering young women through AI-driven preventive menstrual healthcare. Beyond tracking. Towards prevention.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-500 hover:bg-brand-50 transition-colors shadow-sm">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-500 hover:bg-brand-50 transition-colors shadow-sm">
                <LinkIcon size={20} />
              </a>
              <a href="mailto:hello@naaricycle.com" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-500 hover:bg-brand-50 transition-colors shadow-sm">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(function(link) {
                return (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-600 hover:text-brand-600 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-lavender-200 text-center text-gray-500 text-sm">
          <p>© 2026 Naari Cycle — Empowering Women Through Preventive Menstrual Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
