import { IHouseKeepers } from "@/types";
import './HousekeeperItem.scss';

interface IProps {
  housekeeper: IHouseKeepers;
}

export const HousekeeperItem = ({ housekeeper }: IProps) => {
  return (
    <div className="housekeeper-item">
      <p className="housekeeper-item__name">{housekeeper.name}</p>
    </div>
  );
};
