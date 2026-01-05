type ButtonProps = {
    label: string;
    disabled?: boolean;
    onClick: () => void;
    addClass?: string;
}

const Button = ({label, disabled=false, onClick, addClass= ""}: ButtonProps) => {

    return (
        <>
            <button
                className={" " + addClass}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>
        </>
    )
}

export default Button;