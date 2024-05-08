
interface ButtonProps {
    text:string;
    textColor:string;
    textBg:string;

}
function Button(props: Readonly<ButtonProps> ) {
    const buttonClass = `bg-${props.textBg} text-${props.textColor}`;
    return (
        <div>
            <button className={buttonClass}>{props.text}</button>
        </div>
    )
}

export default Button