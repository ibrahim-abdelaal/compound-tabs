
import './App.css';
import { Tabs } from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs>
        <Tabs.Tab label="a">Tab A</Tabs.Tab>
        <Tabs.Tab label="b">Tab B</Tabs.Tab>
        <Tabs.Tab label="c">Tab C</Tabs.Tab>

        <Tabs.Panel label="a">
          This is tab A{" "}
          <span role="img" aria-label="Rocket ship">
            🚀
          </span>
        </Tabs.Panel>
        <Tabs.Panel label="b">
          This is tab B{" "}
          <span role="img" aria-label="Diamond">
            💎
          </span>
        </Tabs.Panel>
        <Tabs.Panel label="c">
          This is tab C{" "}
          <span role="img" aria-label="Ghost">
            👻
          </span>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default App;
