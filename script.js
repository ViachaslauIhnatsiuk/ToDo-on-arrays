'use strict';

const DONE = "Done";
const IN_PROGRESS = "In progress";
const TODO = "ToDo";
const LOW_PRIORITY = "Low";
const HIGH_PRIORITY = "High";

const list = [
	{
		id: 1,
		task: "wake up",
		status: DONE,
		priority: HIGH_PRIORITY,
	},
	{ id: 2, task: "take a shower", status: DONE, priority: LOW_PRIORITY, },
	{ id: 3, task: "have breakfast", status: TODO, priority: LOW_PRIORITY, },
	{ id: 4, task: "learn JavaScript", status: IN_PROGRESS, priority: HIGH_PRIORITY, },
	{ id: 5, task: "have a walk", status: TODO, priority: LOW_PRIORITY, },
	{ id: 6, task: "watch stream", status: TODO, priority: HIGH_PRIORITY, },
];


/* function deleteTask(task) {
	let taskIndex = list.findIndex(function (item) {
		return item.task === task;
	});
	list.splice(taskIndex, 1);
	list.forEach(function (item, index) {
		return item.id = index + 1;
	});
};
deleteTask("wake up");
console.log(list); */


function addTask(idValue, taskValue, statusValue, priorityValue, positionValue) {
	list.splice(positionValue = idValue - 1, 0, { id: idValue, task: taskValue, status: statusValue, priority: priorityValue, });
	list.forEach(function (item, index) {
		return item.id = index + 1;
	});
};

addTask(6, "go to sleep", TODO, HIGH_PRIORITY);
console.log(list);


/* function changeStatus(task, status) {
	let taskIndex = list.findIndex(function (item) {
		return item.task === task;
	});
	list.splice(taskIndex, 1);
	list.forEach(function (item, index) {
		return item.id = index + 1;
	});
};
deleteTask("wake up");
console.log(list); */