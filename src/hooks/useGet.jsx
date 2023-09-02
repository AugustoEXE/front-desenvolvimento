import { useEffect } from "react";
import { useState } from "react";

export const useGet = (funcFromAPI, search) => {
  const [list, setList] = useState([]);
  console.log(search);
  useEffect(() => {
    let mounted = true;
    const request = async () => {
      const result = await funcFromAPI(search);
      console.log(result);
      if (mounted) {
        setList(result.data);
      }
    };

    request();
    return () => {
      mounted = false;
    };
  }, [search ? search : null]);

  return list;
};
