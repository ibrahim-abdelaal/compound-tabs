import { FC, useContext } from "react";
import { TabsContext } from "./Tabs";

export interface PanelProps {
  label: string;
  children: any;
}

export const Panel: FC<PanelProps> = ({ label, children }) => {
  const { activeTab } = useContext(TabsContext);
  return activeTab === label ? <div>{ children }</div> : null;
};