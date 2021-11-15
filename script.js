'use strict';

const DONE = "Done";
const IN_PROGRESS = "In progress";
const TODO = "ToDo";
const LOW_PRIORITY = "Low priority";
const HIGH_PRIORITY = "High priority";

const list = [
	{ task: "wake up", status: DONE, priority: HIGH_PRIORITY, },
	{ task: "take a shower", status: DONE, priority: LOW_PRIORITY, },
	{ task: "have breakfast", status: DONE, priority: LOW_PRIORITY, },
	{ task: "learn JavaScript", status: TODO, priority: HIGH_PRIORITY, },
	{ task: "have a walk", status: TODO, priority: LOW_PRIORITY, },
	{ task: "watch stream", status: TODO, priority: HIGH_PRIORITY, },
];

let countID = 0;

function deleteTask(task) {
	let taskIndex = list.findIndex(function (item) {
		return item.task === task;
	});
	list.splice(taskIndex, 1);
};
deleteTask("wake up");
console.log(list);


function addTask(taskValue, statusValue, priorityValue) {
	list.push({ task: taskValue, status: statusValue, priority: priorityValue, });
	list.forEach(function (item) {
		return item.id = ++countID;
	});
};
addTask("go to sleep", TODO, HIGH_PRIORITY);
console.log(list);


function changeStatus(task, status) {
	list.find(function (item) {
		if (item.task === task) {
			return item.status = status;
		};
	});
};
changeStatus("learn JavaScript", IN_PROGRESS);
console.log(list);


function showTasksByState(state) {
	let isPrinted = false;
	console.log(state + ":");
	list.filter(function (item) {
		const stateValue = item.priority === state || item.status === state;
		if (stateValue) {
			console.log(item.task);
			isPrinted = true;
		};
	});
	if (!isPrinted) {
		console.log('-');
	};
};


function showList(showBy) {
	switch (showBy) {
		case "status":
			showTasksByState(TODO);
			showTasksByState(IN_PROGRESS);
			showTasksByState(DONE);
			break;
		case "priority":
			showTasksByState(HIGH_PRIORITY);
			showTasksByState(LOW_PRIORITY);
			break;
		default:
			showTasksByState(TODO);
			showTasksByState(IN_PROGRESS);
			showTasksByState(DONE);
			showTasksByState(HIGH_PRIORITY);
			showTasksByState(LOW_PRIORITY);
	};
};

showList("priority");