console.log("Q11:")
function task3()
{
 console.log("Task 3");
}
function task2()
{
    console.log("Task 2");
    task3();
}
function task1()
{
    console.log("Task 1");
    task2();
}
task1();