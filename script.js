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
		priopity: HIGH_PRIORITY,
	},
	{ id: 2, task: "take a shower", status: DONE, priopity: LOW_PRIORITY, },
	{ id: 3, task: "have breakfast", status: TODO, priopity: LOW_PRIORITY, },
	{ id: 4, task: "learn JavaScript", status: IN_PROGRESS, priopity: HIGH_PRIORITY, },
	{ id: 5, task: "have a walk", status: TODO, priopity: LOW_PRIORITY, },
	{ id: 6, task: "watch stream", status: TODO, priopity: HIGH_PRIORITY, },
];

/* function deleteTask(task) {
	delete list[task];
};
 */

function deleteTask(task) {
	let result = list.filter(function (item, index) {
		if (item.task === task) {
			list.splice(index, 1);
		};
	});
	return result;
};

console.log(deleteTask("have breakfast"));
console.log(list);