import { Scheduler } from "@/components/Scheduler";
import "./App.scss";

const tasks = [
  { id: 1, title: '1. Clean Living Room', duration: 2, deadline: '2022-01-31', hotelApartment: 'A101' },
  { id: 2, title: '2. Vacuum Bedrooms', duration: 1, deadline: '2022-02-05', hotelApartment: 'B205' },
  { id: 3, title: '3. Mop Kitchen Floor', duration: 1.5, deadline: '2022-02-10', hotelApartment: 'C302' },
  { id: 4, title: '4. Dust Furniture', duration: 1, deadline: '2022-02-15', hotelApartment: 'D104' },
  { id: 5, title: '5. Clean Windows', duration: 2, deadline: '2022-02-20', hotelApartment: 'E408' },
  { id: 6, title: '6. Organize Closet', duration: 1.5, deadline: '2022-02-25', hotelApartment: 'F201' },
];

const housekeepers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eva" },
  { id: 5, name: "Vicky" },
];

function App() {
  return (
    <>
      <h1 className="scheduler-page__title">Housekeeping Management</h1>
      <Scheduler tasks={tasks} housekeepers={housekeepers} />
    </>
  );
}

export default App;
