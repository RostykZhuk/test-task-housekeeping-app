import { ITask } from "@/types";
import "./TaskItem.scss";

interface IProps {
  task: ITask;
}

export const TaskItem = ({ task }: IProps) => {
  const { title, duration, deadline, hotelApartment } = task;

  return (
    <div className="task-item">
      <p className="task-item__title">{title}</p>
      <div className="task-item__details">
        <p>Duration: {duration} hours</p>
        <p>Deadline: {deadline}</p>
        <p>Hotel Apartment: {hotelApartment}</p>
      </div>
    </div>
  );
};
