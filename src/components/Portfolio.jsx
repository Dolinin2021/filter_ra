import { useState } from "react";
import Toolbar from "./Toolbar";
import { ProjectList } from "./ProjectList";

export default function Portfolio(props) {
  const arr = ["All", "Websites", "Flayers", "Business Cards"];
  const { data } = props;
  const [select, setSelect] = useState("All");
  const [arrData, setArr] = useState(data);

  function click(item) {
    console.log(item);
    setSelect(item);
    if (item === "All") {
      setArr(data);
    } else {
      setArr(data.filter((elem) => elem.category === item));
    }
  }

  return (
    <main>
      <Toolbar filters={arr} selected={select} onSelectFilter={click} />
      <ProjectList projects={arrData} />
    </main>
  );
}
