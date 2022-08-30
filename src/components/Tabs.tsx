import { FC, createContext, useState, Children } from 'react';
import { Tab, TabProps } from './Tab';
import { Panel, PanelProps } from './Panel';

interface ITabsContext {
  activeTab?: string;
  setActiveTab: (label: string) => void;
}

interface ITabsComposition {
  Tab: FC<TabProps>;
  Panel: FC<PanelProps>;
}

interface TabsProps {
  children: JSX.Element | JSX.Element[];
}


export const TabsContext = createContext<ITabsContext>({setActiveTab: () => {}});

export const Tabs: FC<TabsProps> & ITabsComposition = ({ children }) => {
  const [activeTab, setActiveTab] = useState("a");
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      { children }
    </TabsContext.Provider>
  );
};

Tabs.Tab = Tab;
Tabs.Panel = Panel;
