import React from 'react';
import Header from './header/header';
import Contact from './contact/contact';
import './App.css';

function App (){
	return (
		<div>
			<Header />

			<main>
				<Contact />
				<section>
					<h2>Education: </h2>
					<p>Thinkful 2020</p>
				</section>

				<section>
					<h2>Employment:</h2>
					<ul>
						<li>
							XYZ company Marketing
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque ad
								voluptatum dolorum provident sunt. Dolor delectus inventore perferendis est natus omnis
								at maiores, doloremque praesentium velit provident, laboriosam maxime.
							</p>
						</li>
						<li>
							ABC company Marketing
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque ad
								voluptatum dolorum provident sunt. Dolor delectus inventore perferendis est natus omnis
								at maiores, doloremque praesentium velit provident, laboriosam maxime.
							</p>
						</li>
					</ul>
				</section>
			</main>
		</div>
	);
}

export default App;
