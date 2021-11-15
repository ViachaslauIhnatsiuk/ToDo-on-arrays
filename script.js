'use strict';

const DONE = "Done";
const IN_PROGRESS = "In progress";
const TODO = "ToDo";
const LOW_PRIORITY = "Low";
const HIGH_PRIORITY = "High";

const list = [
	{ id: 1, task: "wake up", status: DONE, priority: HIGH_PRIORITY, },
	{ id: 2, task: "take a shower", status: DONE, priority: LOW_PRIORITY, },
	{ id: 3, task: "have breakfast", status: DONE, priority: LOW_PRIORITY, },
	{ id: 4, task: "learn JavaScript", status: TODO, priority: HIGH_PRIORITY, },
	{ id: 5, task: "have a walk", status: TODO, priority: LOW_PRIORITY, },
	{ id: 6, task: "watch stream", status: TODO, priority: HIGH_PRIORITY, },
];

function deleteTask(task) {
	let taskIndex = list.findIndex(function (item) {
		return item.task === task;
	});
	list.splice(taskIndex, 1);
	list.forEach(function (item, index) {
		return item.id = index + 1;
	});
};
deleteTask("wake up");
console.log(list);


function addTask(taskValue, statusValue, priorityValue, positionValue) {
	list.splice(positionValue, 0, { id: list.length + 1, task: taskValue, status: statusValue, priority: priorityValue, });
	list.forEach(function (item, index) {
		return item.id = index + 1;
	});
};
addTask("go to sleep", TODO, HIGH_PRIORITY, 6);
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

function taskStatus(status) {
	let isPrinted = false;
	console.log(status + ":");
	list.find(function (item) {
		if (item.status === status) {
			console.log(item.task);
			isPrinted = true;
		};
	});
	if (!isPrinted) {
		console.log('-');
	}
};

function showList() {
	taskStatus(TODO);
	taskStatus(IN_PROGRESS);
	taskStatus(DONE);
};

showList();