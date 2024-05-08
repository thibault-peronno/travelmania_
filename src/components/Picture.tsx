interface PictureProps {
  src: string;
  size:string;
  alt: string;
}

function Picture(props: Readonly<PictureProps>) {
    const sizeClasses: { [key: string]: string } = {
        small: 'w-4 h-4',
        medium: 'w-8 h-8',
        large: 'w-16 h-16',
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
