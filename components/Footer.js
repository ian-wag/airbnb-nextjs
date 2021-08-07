function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 text-gray-600">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p className="hover:underline hover:cursor-pointer">
            How Airbnb works
          </p>
          <p className="hover:underline hover:cursor-pointer">Newsroom</p>
          <p className="hover:underline hover:cursor-pointer">Investors</p>
          <p className="hover:underline hover:cursor-pointer">Airbnb Plus</p>
          <p className="hover:underline hover:cursor-pointer">Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p className="hover:underline hover:cursor-pointer">
            Diversity & Belonging
          </p>
          <p className="hover:underline hover:cursor-pointer">
            Airbnb Associates
          </p>
          <p className="hover:underline hover:cursor-pointer">Gift cards</p>
          <p className="hover:underline hover:cursor-pointer">
            Frontline Stays
          </p>
          <p className="hover:underline hover:cursor-pointer">Accessibility</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p className="hover:underline hover:cursor-pointer">
            Not a Real Website
          </p>
          <p className="hover:underline hover:cursor-pointer">Built By Me</p>
          <p className="hover:underline hover:cursor-pointer">
            Just a Great Clone
          </p>
          <p className="hover:underline hover:cursor-pointer">
            Referrals Accepted
          </p>
          <p className="hover:underline hover:cursor-pointer">We Out Here</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p className="hover:underline hover:cursor-pointer">Help Center</p>
          <p className="hover:underline hover:cursor-pointer">
            Neighborhood Support
          </p>
          <p className="hover:underline hover:cursor-pointer">Trust & Safety</p>
          <p className="hover:underline hover:cursor-pointer">Streaming</p>
          <p className="hover:underline hover:cursor-pointer">
            Cancellation options
          </p>
        </div>
      </div>
      <div className="space-y-4 text-xs text-gray-800 mx-6 px-[6.5rem] py-5 flex items-baseline border-t">
        <p>2021</p>
        <p className="mx-1">·</p>
        <p className="hover:underline hover:cursor-pointer">
          <a
            href="https://github.com/iwagner76/airbnb-nextjs/"
            target="_blank"
            rel="noreferrer"
          >
            Ian Wagner
          </a>
        </p>
        <p className="mx-1">·</p>
        <p className="hover:underline hover:cursor-pointer">
          <a
            href="https://github.com/iwagner76/airbnb-nextjs/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy
          </a>
        </p>
        <p className="mx-1">·</p>
        <p className="hover:underline hover:cursor-pointer">
          <a
            href="https://github.com/iwagner76/airbnb-nextjs/"
            target="_blank"
            rel="noreferrer"
          >
            Terms
          </a>
        </p>
        <p className="mx-1">·</p>
        <p className="hover:underline hover:cursor-pointer">
          <a
            href="https://github.com/iwagner76/airbnb-nextjs/"
            target="_blank"
            rel="noreferrer"
          >
            Sitemap
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
