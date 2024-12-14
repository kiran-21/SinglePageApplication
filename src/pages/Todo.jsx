import React, { useState, useEffect } from "react";
import Container from "../components/Container";

const ToDo = () => {
	const [tasks, setTasks] = useState(() => {
		const savedTasks = localStorage.getItem("tasks");
		return savedTasks ? JSON.parse(savedTasks) : [];
	});
	const [taskInput, setTaskInput] = useState("");
	const [priority, setPriority] = useState("");
	const [inputError, setInputError] = useState(false);
	const [isNameAscending, setIsNameAscending] = useState(true); // State for name sort order
	const [isPriorityAscending, setIsPriorityAscending] = useState(true); // State for priority sort order

	// Sync tasks with localStorage
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	// Add new task
	const addTask = () => {
		if (taskInput.trim() && priority.trim()) {
			setTasks(prevTasks => [...prevTasks, { id: prevTasks.length + 1, text: taskInput, completed: false, priority }]);
			setTaskInput("");
			setPriority("");
			setInputError(false);
		} else {
			setInputError(true);
		}
	};

	// Sort by task name
	const sortByName = () => {
		setTasks(prevTasks => {
			const sortedTasks = [...prevTasks].sort((a, b) =>
				isNameAscending ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
			);
			setIsNameAscending(!isNameAscending); // Toggle sort order
			return sortedTasks;
		});
	};

	// Sort by priority
	const sortByPriority = () => {
		const priorityOrder = { High: 1, Medium: 2, Low: 3 };
		setTasks(prevTasks => {
			const sortedTasks = [...prevTasks].sort((a, b) =>
				isPriorityAscending
					? priorityOrder[a.priority] - priorityOrder[b.priority]
					: priorityOrder[b.priority] - priorityOrder[a.priority]
			);
			setIsPriorityAscending(!isPriorityAscending); // Toggle sort order
			return sortedTasks;
		});
	};

	// Mark as completed
	const toggleCompletion = id => {
		setTasks(prevTasks => prevTasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
	};

	// Delete a task
	const deleteTask = id => {
		setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
	};

	// Clear completed tasks
	const clearCompleted = () => {
		setTasks(prevTasks => prevTasks.filter(task => !task.completed));
	};

	return (
		<Container>
			<div className="container mt-6">
				<div className="p-4 rounded shadow-sm bg-light">
					{/* Title */}
					<h3 className="text-center mb-4">
						To-Do List{" "}
						<span role="img" aria-label="emoji">
							📝
						</span>
					</h3>

					{/* Task info section */}
					<div className="input-group mb-3">
						<input
							type="text"
							className={`form-control rounded-pill ${inputError && !taskInput.trim() ? "is-invalid" : ""}`}
							placeholder="Add your task"
							value={taskInput}
							onChange={e => setTaskInput(e.target.value)}
						/>
						<select
							className={`form-select ms-2 rounded-pill ${
								inputError && !priority.trim() ? "is-invalid" : ""
							}`}
							style={{ maxWidth: "120px" }}
							value={priority}
							onChange={e => setPriority(e.target.value)}
						>
							<option value=""> -- </option>
							<option value="Low">Low</option>
							<option value="Medium">Medium</option>
							<option value="High">High</option>
						</select>
						<button className="btn btn-dark ms-2 rounded-pill px-4" onClick={addTask}>
							Add
						</button>
					</div>

					{/* Sorting Buttons */}
					<div className="d-flex justify-content-center gap-3 mb-3">
						<button
							className="btn btn-outline-dark btn-sm rounded-pill px-4 d-flex align-items-center"
							onClick={sortByName}
						>
							Sort by Name{" "}
							<i className={`ms-2 bi ${isNameAscending ? "bi-caret-up-fill" : "bi-caret-down-fill"}`}></i>
						</button>
						<button
							className="btn btn-outline-dark btn-sm rounded-pill px-4 d-flex align-items-center"
							onClick={sortByPriority}
						>
							Sort by Priority{" "}
							<i
								className={`ms-2 bi ${isPriorityAscending ? "bi-caret-up-fill" : "bi-caret-down-fill"}`}
							></i>
						</button>
					</div>

					{/* Tasks list */}
					<ul className="list-group">
						{tasks.map(task => (
							<li
								key={task.id}
								className={`list-group-item d-flex justify-content-between align-items-center ${
									task.completed ? "bg-light text-decoration-line-through" : ""
								}`}
								style={{
									borderLeft:
										task.priority === "High"
											? "5px solid red"
											: task.priority === "Medium"
											? "5px solid orange"
											: "5px solid green",
								}}
							>
								<div className="d-flex align-items-center">
									<button
										className={`btn rounded-circle ${
											task.completed ? "btn-success" : "btn-outline-secondary"
										}`}
										style={{
											width: "30px",
											height: "30px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
										onClick={() => toggleCompletion(task.id)}
									>
										<i
											className={`bi ${task.completed ? "bi-check" : ""}`}
											style={{ fontSize: "14px" }}
										></i>
									</button>
									{/* Task Text */}
									<div className="ms-3 text-start">
										<span>{task.text}</span>
										<small className="d-block text-muted">Priority: {task.priority}</small>
									</div>
								</div>
								<button
									className="btn btn-sm btn-outline-danger rounded-circle"
									onClick={() => deleteTask(task.id)}
								>
									<i className="bi bi-x"></i>
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</Container>
	);
};

export default ToDo;
