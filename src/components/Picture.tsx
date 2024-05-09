interface PictureProps {
  src: string;
  size:string;
  alt: string;
}

function Picture(props: Readonly<PictureProps>) {
    const sizeClasses: { [key: string]: string } = {
      smallWidth: 'w-52',
      mediumWidth: 'w-80',
      largeWidth: 'w-96',
     };

     const size:string = sizeClasses[props.size];

  const pictureClass = `${size} cursor-pointer`;
  return (
    <div>
      <img src={props.src} alt={props.alt} className={pictureClass} />
    </div>
  );
}

export default Picture;
