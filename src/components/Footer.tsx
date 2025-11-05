const Footer = () => {
  return (
    <footer>
      <div className="py-6 text-center dk-safe-x-padding">
        <p className="text-base font-medium md:text-xl lg:text-2xl">
          ©{new Date().getFullYear()} Deri Kurniawan All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
