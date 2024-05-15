import "../../styles/contactsPage.css"


export default function ContactsPage() {

	return(
		<main className="ContactsPage">
			<h1>Contacts</h1>
			<div className="ContactsPage__contacts">
				<section className="ContactsPage__contacts__card">
					<figure>
						<img src="https://robohash.org/persona?set=set5" alt="perfil del contacto"/>
						<figcaption>
							Nombre
						</figcaption>
					</figure>
					<ul>
						<li>Skill</li>
						<li>Skill</li>
						<li>Skill</li>
						<li>Skill</li>
					</ul>
					<a href="/contact">Link a su perfil</a>
				</section>
			</div>
		</main>
	)
}