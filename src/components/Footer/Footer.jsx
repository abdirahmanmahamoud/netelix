import footerData from "../../content/footerLinks.json";
import FooterLink from "./FooterLink";
const Footer = () => {
  return (
    <div className="mb-16 mt-10 sm:mx-auto sm:max-w-screen-lg">
      <h1 className="text-[#6c6c6c]">Questions? Contact Us</h1>
      <div className="mx-10 grid grid-cols-2 sm:grid-cols-4">
        {footerData.columns.map((data) => (
          <FooterLink links={data} />
        ))}
      </div>
      <p className="my-1 text-sm text-[#6c6c6c]">Netflix in Somalia</p>
    </div>
  );
};

export default Footer;
