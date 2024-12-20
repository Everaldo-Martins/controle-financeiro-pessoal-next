const Footer = () => {
    return (
      <footer className="flex-none w-full h-fit p-5 flex justify-center items-center">
          <span className="copy w-full text-center text-foreground">
            &#x24B8; CFP - {new Date().getFullYear()} - All right reserved.
          </span>
      </footer>
    );
  };
  
  export default Footer;