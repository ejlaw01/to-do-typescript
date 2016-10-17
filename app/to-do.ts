class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string){}
  markDone(){
    this.done = true;
  }
}
class HomeTask extends Task {}
class HobbyTask extends Task {
  constructor(public description: string){
    super(description, "low");
  }
}
class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string){
    super(description, priority);
  }
}

var tasks: Task[] = [];
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
