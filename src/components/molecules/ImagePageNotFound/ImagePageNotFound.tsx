import Image from 'next/image';

const imageUrl = '/assets/images/ils-page-not-found.png';
const ImagePageNotFound = () => {
  return (
    <div>
      <Image src={imageUrl} alt={imageUrl} width={400} height={400} />
    </div>
  );
};

export default ImagePageNotFound;
