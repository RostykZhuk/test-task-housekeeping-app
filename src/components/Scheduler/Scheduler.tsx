import { IHouseKeepers, ITask } from "@/types";
import { HousekeeperList } from "../HouseKeeperList/HouseKeeperList";
import { TaskList } from "../TaskList";

interface IProps {
  tasks: ITask[];
  housekeepers: IHouseKeepers[];
}

export const Scheduler = ({ tasks, housekeepers }: IProps) => {
  return (
    <div>
      <TaskList tasks={tasks} />
      <HousekeeperList housekeepers={housekeepers} />
    </div>
  );
};
