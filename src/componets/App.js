import React, {useState} from 'react';
import './App.css';
import Container from './container';
import Form from './form';
import Filter from './filter';
import Section from "./section";
import ContactsList from './contactList';


function App() {
	const [valueFilter, setValueFilter] = useState("");
	
	return (
		<Container>
			<Section title="Phonebook">
				<Form/>
			</Section>
			<Section>
				<Filter filter={valueFilter} setFilter={setValueFilter}/>
				<ContactsList filter={valueFilter}/>
			</Section>
		</Container>
	);
}

export default App;
