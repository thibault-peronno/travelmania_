
interface ButtonProps {
    text:string;
    textColor:string;
    textBg:string;

}
function Button(props: Readonly<ButtonProps>) {
    
    const buttonClass = `bg-${props.textBg} text-${props.textColor} w-full text-xl px-8 py-4 rounded font-bold tracking-wider sm:w-max hover:scale-105`;
    return (
        <div className="min-w-full">
            <button className={buttonClass}>{props.text}</button>
        </div>
    )
}

export default Button;