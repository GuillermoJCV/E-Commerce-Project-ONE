
function ContactCard({imgUrl, name, portfolioUrl, children}) {

	return(
		<a href={portfolioUrl} target="__blank" className="ContactsPage__contacts__card">
			<figure>
				<img src={imgUrl} alt={"Perfil de " + name}/>
				<figcaption>
					{name}
				</figcaption>
			</figure>
			<ul>
				{children}
			</ul>
		</a>
	)
}

export default ContactCard