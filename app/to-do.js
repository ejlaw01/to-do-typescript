var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Task = (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var HomeTask = (function (_super) {
    __extends(HomeTask, _super);
    function HomeTask() {
        _super.apply(this, arguments);
    }
    return HomeTask;
}(Task));
var HobbyTask = (function (_super) {
    __extends(HobbyTask, _super);
    function HobbyTask(description) {
        _super.call(this, description, "low");
        this.description = description;
    }
    return HobbyTask;
}(Task));
var WorkTask = (function (_super) {
    __extends(WorkTask, _super);
    function WorkTask(dueDate, description, priority) {
        _super.call(this, description, priority);
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
    }
    return WorkTask;
}(Task));
var tasks = [];
tasks.push(new Task("do the dishes.", "low"));
tasks.push(new Task("Buy all the chocolate", "high"));
tasks.push(new Task("Wash the laundry.", "stinky"));
tasks[1].markDone();
tasks.push(new HobbyTask("Practice Origami"));
tasks.push(new HobbyTask("Bake a pie"));
var today = new Date();
var tomorrow = new Date();
var nextDay = new Date();
tomorrow.setDate(today.getDate() + 1);
nextDay.setDate(today.getDate() + 2);
tasks.push(new WorkTask(today, "Update blog", "high"));
tasks.push(new WorkTask(tomorrow, "fix atom", "high"));
tasks.push(new WorkTask(nextDay, "clean ceiling", "low"));
console.log(tasks);
