
interface ButtonProps {
    text:string;
    textColor:string;
    textBg:string;
    sizeButon:string
    sizeFont:string

}
function Button(props: Readonly<ButtonProps>) {
    const sizeButonClass: {[key:string]: string} = {
        fullWidth: 'w-full',
        mediumWidth: 'w-56',
        smallWidth: 'w-26'
    };
    const sizeFontButonClass: {[key:string]: string} = {
        medium: 'text-base',
        large: 'text-lg',
        xLarge: 'text-xl',
        xxLarge: 'text-3xl'
    };
    const sizeButton:string = sizeButonClass[props.sizeButon]
    const sizeFontButton:string = sizeFontButonClass[props.sizeFont]
    const buttonClass = `bg-${props.textBg} text-${props.textColor} ${sizeButton} ${sizeFontButton} px-3.5 py-2 rounded font-bold hover:scale-105`;
    return (
        <div className="min-w-full">
            <button className={buttonClass}>{props.text}</button>
        </div>
    )
}

export default Button;