import "../../styles/contactsPage.css"
import ContactCard from "./ContactCard.jsx"

import { FaReact, FaDocker, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiDart, SiFlutter, SiFirebase, SiAdobeillustrator } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

export default function ContactsPage() {

	const urls = {
		memo	: {
			img : "https://robohash.org/2542S?set=set4",
			name : "Guillermo Jesús",
			portfolioUrl : "https://portfolio-8qm.pages.dev/"
		},
		mari	: {
			img : "https://robohash.org/persona1?set=set4",
			name : "Flor María",
			portfolioUrl : ""
		},
		jas	: {
			img : "https://robohash.org/persona3?set=set4",
			name : "Jasmine Carolina"
		},
		rivas	: {
			img : "https://robohash.org/persona4?set=set4",
			name : "Rivas"
		},
	}

	/*Mari's Photo: https://avatars.githubusercontent.com/u/101030215?v=4*/

	return(
		<main className="ContactsPage">
			<div className="ContactsPage__contacts">
				<ContactCard imgUrl={urls.mari.img} name={urls.mari.name}>
					<SiDart />
					<SiFlutter />
					<FaDocker />
					<SiFirebase />
				</ContactCard>
				<ContactCard imgUrl={urls.memo.img} name={urls.memo.name}  portfolioUrl={urls.memo.portfolioUrl}>
					<FaReact/>
					<FaCss3Alt />
					<IoLogoJavascript />
					<SiFirebase />
				</ContactCard>
				<ContactCard imgUrl={urls.jas.img} name={urls.jas.name}>
					<SiAdobeillustrator />
				</ContactCard>
				<ContactCard imgUrl={urls.rivas.img} name={urls.rivas.name}>
					<FaHtml5 />
					<FaCss3Alt />
					<IoLogoJavascript />
				</ContactCard>
			</div>
		</main>
	)
}