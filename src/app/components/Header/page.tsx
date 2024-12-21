import Image from 'next/image';
import Logo from '../../assets/logo.svg';

const Header = () => {
    return (
      <header className="flex-none w-full h-44 pl-3 pt-3 pr-3 pb-11 bg-green-600 flex justify-center items-center">
          <Image
          src={ Logo }
          width={300}
          height={94}
          alt="Picture of the author"
        />
      </header>
    );
  };
  
  export default Header;