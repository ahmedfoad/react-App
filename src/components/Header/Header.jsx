import reactCoreConceptsImg from "../../assets/react-core-concepts.png";
import "./Header.css";
const reactDescription = [
  "Fundamental",
  "Crucial",
  "Core",
  "Essential",
  "Important",
  "Key",
  "Necessary",
  "Required",
  "Vital",
  "Critical",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
  return (
    <header>
      <img src={reactCoreConceptsImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[getRandomInt(reactDescription.length)]} React concepts
        you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
