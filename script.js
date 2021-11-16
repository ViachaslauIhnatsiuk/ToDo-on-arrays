'use strict';

const DONE = 'Done';
const IN_PROGRESS = 'In progress';
const TODO = 'ToDo';
const LOW_PRIORITY = 'Low';
const HIGH_PRIORITY = 'High';

const list = [];

let countID = 1;

function addTask(taskValue, statusValue = TODO, priorityValue = HIGH_PRIORITY) {
	list.push({ id: countID, task: taskValue, status: statusValue, priority: priorityValue, });
	++countID;
};


function deleteTask(task) {
	let taskIndex = list.findIndex(function (item) {
		return item.task === task;
	});
	list.splice(taskIndex, 1);
};


function changeStatus(task, status) {
	list.find(function (item) {
		if (item.task === task) {
			return item.status = status;
		};
	});
};


function changePriority(task, priority) {
	list.find(function (item) {
		if (item.task === task) {
			return item.priority = priority;
		};
	});
};


function showTasksByCondition(condition) {
	let state = false;
	console.log(condition + ':');
	list.filter(function (item) {
		const conditionValue = item.priority === condition || item.status === condition;
		if (conditionValue) {
			console.log(item.task);
			state = true;
		};
	});
	if (!state) {
		console.log('-');
	};
};


function showList(showBy) {
	switch (showBy) {
		case 'status':
			showTasksByCondition(TODO);
			showTasksByCondition(IN_PROGRESS);
			showTasksByCondition(DONE);
			break;
		case 'priority':
			showTasksByCondition(HIGH_PRIORITY);
			showTasksByCondition(LOW_PRIORITY);
			break;
		default:
			showTasksByCondition(TODO);
			showTasksByCondition(IN_PROGRESS);
			showTasksByCondition(DONE);
			showTasksByCondition(HIGH_PRIORITY);
			showTasksByCondition(LOW_PRIORITY);
	};
};


addTask('wake up', TODO, HIGH_PRIORITY);
addTask('have breakfast', TODO, HIGH_PRIORITY);
addTask('learn JavaScript', TODO, HIGH_PRIORITY);
addTask('have a walk', TODO, HIGH_PRIORITY);
deleteTask('wake up');
addTask('go to sleep', TODO, HIGH_PRIORITY);
changeStatus('learn JavaScript', IN_PROGRESS);
changePriority('have a walk', LOW_PRIORITY);
console.log(list);

showList('priority');
showList('status');