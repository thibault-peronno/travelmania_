interface IconProps {
  src: string;
  size:string;
  alt: string;
}

function Icon(props: Readonly<IconProps>) {
    const sizeClasses: { [key: string]: string } = {
        small: 'w-4 h-4',
        medium: 'w-8 h-8',
        large: 'w-16 h-16',
     };

     const size:string = sizeClasses[props.size];

  const IconClass = `${size} cursor-pointer`;
  return (
    <div>
      <img src={props.src} alt={props.alt} className={IconClass} />
    </div>
  );
}

export default Icon;
