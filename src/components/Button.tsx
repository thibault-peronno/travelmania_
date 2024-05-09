
interface ButtonProps {
    text:string;
    textColor:string;
    textBg:string;
    sizeButon:string

}
function Button(props: Readonly<ButtonProps>) {
    const sizeButonClass: {[key:string]: string} = {
        fullWidth: 'w-full',
        mediumWidth: 'w-56',
        smallWidth: 'w-26'
    };
    const sizeButton:string = sizeButonClass[props.sizeButon]
    const buttonClass = `bg-${props.textBg} text-${props.textColor} ${sizeButton} px-3.5 py-2 rounded text-lg font-bold hover:scale-105`;
    return (
        <div className="min-w-full">
            <button className={buttonClass}>{props.text}</button>
        </div>
    )
}

export default Button;