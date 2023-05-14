import Image from "next/image";

const Loader = () => {
  return (
    <div className='w-full flex-center mt-16'>
      <Image
        src='/assets/icons/loader.svg'
        width={50}
        height={50}
        alt='loader'
        className='object-contain'
      />
    </div>
  );
};

export default Loader;