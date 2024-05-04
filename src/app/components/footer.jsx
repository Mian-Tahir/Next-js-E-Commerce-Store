import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-400 w-full text-white p-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 gap-4 text-center sm:text-left">
        <div>
          <h4 className="font-bold text-lg mb-2">Contact Us</h4>
          <p>Email: miantahir1827@gmail.com</p>
          <p>Phone: 03061436931</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Quick Links</h4>
          <ul>
            <li>
              <Link href="/" passHref legacyBehavior>
                <a className="hover:text-blue-500 transition-colors">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/products" passHref legacyBehavior>
                <a className="hover:text-blue-500 transition-colors">
                  Products
                </a>
              </Link>
            </li>
            <li>
              <Link href="/categories" passHref legacyBehavior>
                <a className="hover:text-blue-500 transition-colors">
                  Categories
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Follow Us</h4>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100040927500381"
              className="hover:text-blue-500 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://x.com/MianTah16802713?s=09"
              className="hover:text-blue-500 transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/its_mian178?igsh=ZTR0eDVvZjlkbTk3"
              className="hover:text-blue-500 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t mt-4 border-gray-300">
        <p>© 2024 E-commerce Store All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
