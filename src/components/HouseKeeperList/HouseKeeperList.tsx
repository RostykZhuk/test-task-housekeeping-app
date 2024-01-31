import { IHouseKeepers } from "@/types";
import { HousekeeperItem } from "../HouseKeeperItem";
import "./HousekeeperList.scss"; // Import the styles

interface IProps {
  housekeepers: IHouseKeepers[];
}

export const HousekeeperList = ({ housekeepers }: IProps) => {
  return (
    <div className="housekeeper-list">
      <h2 className="housekeeper-list__title">Housekeepers</h2>
      <div className="housekeeper-list__container">
        {housekeepers.map((housekeeper) => (
          <HousekeeperItem key={housekeeper.id} housekeeper={housekeeper} />
        ))}
      </div>
    </div>
  );
};
