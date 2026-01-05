const Header = () => {

    return (
        <>
            <header className={"bg-my-blue fixed w-full"}>
                <div className={"container mx-auto px-6 flex items-center justify-between font-semibold"}>
                    <img
                        className="h-16 my-4"
                        src="de-logo.jpg"
                        alt="Data Entry Logo"/>
                    <p> Welcome! </p>

                </div>

            </header>
        </>
    )
}

export default Header;