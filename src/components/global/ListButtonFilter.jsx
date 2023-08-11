import { useState, React } from "react";

export function ListButtonFilter() {
  const [filterTypes, setFilterTypes] = useState({
    Autor: "",
    Compania: "",
    Língua: "",
    Gênero: "",
    Nome: "",
    Data: "",
  });

  //   const listButtonFilter = () => {

  //       return props != "" ? (<>
  //       <button type="button" className="border-radius-10" onClick={()=>{

  //       }}>{props}</button>
  //       </>) : (<>      <button type="button" className="border-radius-10" onClick={()=>{

  // }}>{props} | {}</button></>)
  //     }
  //     }

  return (
    <div className="flex flex-row justify-around">
      {Object.entries(filterTypes).map(([k, v]) => {
        return v != "" ? (
          <div className="border-1 border-verdinho-escurinho">
            <button
              type="button"
              className="border border-green-500"
              onClick={() => {}}
            >
              {k}
            </button>
          </div>
        ) : (
          <div>
            <button type="button" onClick={() => {}}>
              <div className="">{k}</div>
              <div className="">{v}</div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
