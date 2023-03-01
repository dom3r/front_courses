import "./App.css";
import Pokemon from "./Components/Pokemon";
import EmailIcon from "@mui/icons-material/Email";

const Array = [
  {
    name: "John",
    Expertise: "Frontend",
    Experience: "2 years",
  },
  {
    name: "Mike",
    Expertise: "Backend",
    Experience: "3 years",
  },
  {
    name: "Sam",
    Expertise: "Fullstack",
    Experience: "4 years",
  },
];

function App() {
  return (
    <div className="App">
      <Pokemon />

      <h1>Personal information</h1>
      <h1>
        {Array.map((item) => {
          return item.Experience;
        })}
      </h1>
      <EmailIcon />
    </div>
  );
}

export default App;
