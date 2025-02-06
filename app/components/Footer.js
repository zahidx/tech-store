// components/Footer.js

const Footer = () => {
    return (
      <footer className="bg-[#1E2A47] text-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          {/* Footer Top Section */}
          <div className="flex flex-wrap justify-between mb-10">
            {/* About Us */}
            <div className="w-full sm:w-1/3 md:w-1/4 mb-6 sm:mb-0">
              <h3 className="text-2xl font-semibold mb-4 text-[#A5D6A7]">About Us</h3>
              <p className="text-sm leading-relaxed">
                Our mission is to provide high-quality, affordable products to help enhance your life. Discover premium
                items in various categories, from fashion to electronics.
              </p>
            </div>
  
            {/* Customer Service */}
            <div className="w-full -mr-24 sm:w-1/3 md:w-1/4 mb-6 sm:mb-0">
              <h3 className="text-2xl font-semibold mb-4 text-[#A5D6A7]">Customer Service</h3>
              <ul className="text-sm space-y-2">
                <li><a href="/contact" className="hover:text-[#81C784] transition duration-300">Contact Us</a></li>
                <li><a href="/shipping" className="hover:text-[#81C784] transition duration-300">Shipping & Returns</a></li>
                <li><a href="/faq" className="hover:text-[#81C784] transition duration-300">FAQ</a></li>
                <li><a href="/privacy-policy" className="hover:text-[#81C784] transition duration-300">Privacy Policy</a></li>
              </ul>
            </div>
  
            {/* Quick Links */}
            <div className="w-full sm:w-1/3 md:w-1/4 mb-6 sm:mb-0">
              <h3 className="text-2xl font-semibold mb-4 text-[#A5D6A7]">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li><a href="/shop" className="hover:text-[#81C784] transition duration-300">Shop Now</a></li>
                <li><a href="/offers" className="hover:text-[#81C784] transition duration-300">Special Offers</a></li>
                <li><a href="/blog" className="hover:text-[#81C784] transition duration-300">Our Blog</a></li>
                <li><a href="/careers" className="hover:text-[#81C784] transition duration-300">Careers</a></li>
              </ul>
            </div>
  
            {/* Follow Us */}
            <div className="w-full sm:w-1/3 md:w-1/4">
              <h3 className="text-2xl font-semibold mb-4 text-[#A5D6A7]">Follow Us</h3>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#" className="text-2xl hover:text-[#81C784] transition duration-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-2xl hover:text-[#81C784] transition duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-2xl hover:text-[#81C784] transition duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-2xl hover:text-[#81C784] transition duration-300">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom Section */}
          <div className="border-t border-[#81C784] pt-6 mt-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-center md:text-left">
                &copy; 2025 <strong>Your E-Commerce Website</strong>. All Rights Reserved.
              </p>
              <div className="text-sm space-x-4 mt-4 md:mt-0">
                <a href="/terms" className="hover:text-[#81C784] transition duration-300">Terms of Service</a>
                <a href="/privacy-policy" className="hover:text-[#81C784] transition duration-300">Privacy Policy</a>
                <a href="/cookies" className="hover:text-[#81C784] transition duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  