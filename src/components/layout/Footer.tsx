const Footer = () => {
const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="bg-my-blue">
                <div className="container mx-auto py-8 text-center font-semibold">
                    &copy; {currentYear} DataEntry. All rights reserved
                </div>
            </footer>
        </>
    )
}

export default Footer;