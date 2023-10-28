const FooterLink = ({ links }) => {
  return (
    <div className="mx-4 my-2 flex flex-col">
      {links.map((link) => (
        <a href="" className="my-1 text-sm text-[#6c6c6c]">
          {link}
        </a>
      ))}
    </div>
  );
};

export default FooterLink;
