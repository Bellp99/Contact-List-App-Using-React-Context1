export const ContactCard = ({ name, address, phone, email}) => {
    return (
        <>
            <div className="cardimg w-50 justify-content-center">
                <img className="card-img" src="https://avatar.iran.liara.run/public" width={100} height={250}/>
                <div className="contact-card-info">
                    <h2>{name}</h2>
                    <h4>{address}</h4>
                    <h4>{phone}</h4>
                    <h4>{email}</h4>
                </div>
            </div>
        </>
    )
}