

export default function AboutUsPage() {

	return(
		<main className="AboutUsPage">
			<section className="head">
				{/* Aquí va el svg del cuadrao con curvas */}
			</section>
			<section className="mision">
				<article>
					<h2>Nuestra misión</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nulla consectetur fermentum tempor.
						Ut ultrices aliquet felis eget tincidunt. 
						Nulla ultricies rhoncus leo et condimentum.
						Praesent in turpis felis. Aliquam et blandit metus, a imperdiet magna.
						Fusce erat leo, vehicula ac porta eu, euismod ut libero.
						Aliquam vel felis hendrerit, accumsan ipsum eget, semper turpis.
					</p>
				</article>
				<figure>
					<img src="url" alt="Imagen genérica para el proyecto"/>
					<figcaption>
						Alguna descripción genérica
					</figcaption>
				</figure>
			</section>
			<hr/>
			<section className="history">
				<h2>Nuestra historia</h2>
				<div>
					<iframe></iframe>
					<article>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nulla consectetur fermentum tempor.
						Ut ultrices aliquet felis eget tincidunt.
						Nulla ultricies rhoncus leo et condimentum.
						Praesent in turpis felis. Aliquam et blandit metus, a imperdiet magna.
						Fusce erat leo, vehicula ac porta eu, euismod ut libero.
						Aliquam vel felis hendrerit, accumsan ipsum eget, semper turpis.
					</article>
				</div>
			</section>
			<hr/>
			<section className="cronology">
				<h2>Cronología</h2>
				<div>
					<p>
						Un objetivo del proyecto
					</p>
					<p>
						Un objetivo del proyecto
					</p>
					<p>
						Un objetivo del proyecto
					</p>
				</div>
			</section>
		</main>
	)
}