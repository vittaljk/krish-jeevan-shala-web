import Link from 'next/link';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="md:container mx-auto p-4 md:py-5">
      <div className="flex gap-8 text-sm font-semibold">
        <Link href="/policy">
          <div className="hover:underline hover:text-link">Policy</div>
        </Link>
        <Link href="/terms">
          <div className="hover:underline hover:text-link">Terms Of Use</div>
        </Link>
        <Link href="/contact-us">
          <div className="hover:underline hover:text-link">Contact</div>
        </Link>
      </div>
      <div className="flex gap-8 mt-4 mb-3">
        <div>
          <div className="text-lg font-bold">Krish Jeevan Shala Institute</div>
          <div>Address</div>
        </div>
        <div>
          <div className="text-lg font-bold ">Social Networks</div>
          <div className="flex gap-1">
            <div>fb</div>
            <div>in</div>
            <div>yt</div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 md:gap-16 text-sm">
        <div>
          © {currentYear} Krish Jeevan Shala Institute. All rights reserved.
        </div>
        <div>@Krish Jeevan Shala Institute</div>
        <Link href="mailto:support@krishjeevanshala.com">
          <div className="hover:underline hover:text-link">
            support@krishjeevanshala.com
          </div>
        </Link>
        <Link href="www.krishjeevanshala.com">
          <div className="hover:underline hover:text-link">
            www.krishjeevanshala.com
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
