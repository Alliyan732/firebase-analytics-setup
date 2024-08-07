import "./App.css";
import { ToStoreEvents } from "./utils/analyticsEvent";

const App = () => {
  const handleFirebaseAnalytics = (item: number) => {
    console.log("Button clicked: ", item);
    ToStoreEvents(`button_clicked: ${item}`, { button_title: `${item}` });
  };

  return (
    <div className="container">
      {[1, 2, 3, 4, 5].map((item) => (
        <button
          key={item}
          className="button"
          title={`${item}`}
          onClick={() => handleFirebaseAnalytics(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default App;
