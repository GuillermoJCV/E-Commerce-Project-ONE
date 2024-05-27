
function ContactCard({imgUrl, name, portfolioUrl, children}) {

	return(
		<section className="ContactsPage__contacts__card">
			<figure>
				<img src={imgUrl} alt={"Perfil de " + name}/>
				<figcaption>
					{name}
				</figcaption>
			</figure>
			<ul>
				{children}
			</ul>
			<a href={portfolioUrl}>Link a su perfil</a>
		</section>
	)
}

export default ContactCard