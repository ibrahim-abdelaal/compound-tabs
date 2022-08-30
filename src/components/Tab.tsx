import { FC, useContext } from 'react';
import { TabsContext } from './Tabs';

export interface TabProps {
  label: string;
  children: any;
}

export const Tab: FC<TabProps> = ({ children, label }) => {
  const { setActiveTab } = useContext(TabsContext);
  return (
    <div className="tab">
      <button onClick={() => setActiveTab(label)}>
        { children }
      </button>
    </div>
  );
};