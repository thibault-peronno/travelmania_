
interface ButtonProps {
    text:string;
    textColor:string;
    textBg:string;

}
function Button(props: Readonly<ButtonProps> ) {
    const buttonClass = `bg-${props.textBg} text-${props.textColor} px-3.5 py-2 rounded text-lg font-bold hover:scale-105`;
    return (
        <div>
            <button className={buttonClass}>{props.text}</button>
        </div>
    )
}

export default Button