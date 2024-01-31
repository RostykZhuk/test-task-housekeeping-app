import { ITask } from "@/types";
import { TaskItem } from "../TaskItem";
import "./TaskList.scss";

interface IProps {
  tasks: ITask[];
}

export const TaskList = ({ tasks }: IProps) => {
  return (
    <div className="task-list">
      <h2 className="task-list__title">Tasks</h2>
      <div className="task-list__container">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
