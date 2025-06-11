import { Film, Mail, Phone } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white px-10 py-10 mt-[30px]">
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Film className="text-white" />
            <p className="text-lg font-semibold">Movie Z</p>
          </div>
          <p className="text-sm">© 2024 Movie Z. All Rights Reserved.</p>
        </div>

        <div>
          <p className="font-semibold mb-2">Contact Information</p>
          <div className="flex items-center gap-2 mb-1">
            <Mail className="w-4 h-4" />
            <a
              href="https://mail.google.com/mail/u/0/#inbox:gantulgagamtuya30@gmail.com"
              className="hover:underline text-sm"
            >
              gantulgagamtuya30@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <Phone className="w-4 h-4" />
            <a href="tel:+97680688616" className="hover:underline text-sm">
              +976 80688616
            </a>
          </div>
        </div>

        <div>
          <p className="font-semibold mb-2">Follow us</p>
          <div className="flex flex-col gap-1 text-sm">
            <Link href="https://www.facebook.com/" className="hover:underline">
              Facebook
            </Link>
            <Link href="https://www.instagram.com/" className="hover:underline">
              Instagram
            </Link>
            <Link href="https://x.com/i/flow/login" className="hover:underline">
              Twitter
            </Link>
            <Link href="https://www.youtube.com/" className="hover:underline">
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
