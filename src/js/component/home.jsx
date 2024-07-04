import React from "react";
import ToDoList from "./ToDoList.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5"></h1>
			<p>
				<ToDoList />
			</p>
			
			<p>
			</p>
		</div>
	);
};

export default Home;
