type ButtonProps = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    addClass?: string;
}


const Button = ({label, onClick, disabled=false, addClass="bg-my-blue"}: ButtonProps) => {

    return (
        <>
            <button
                className={"disabled:bg-cyan-800 text-white px-4 py-2 " + addClass}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>

        </>
    )
}

export default Button;