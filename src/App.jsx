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

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[getRandomInt(reactDescription.length)]} React concepts
        you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

function Test() {
  return <div>Test</div>;
}

export default App;
