import { useEffect } from "react";
import { useState } from "react";

export const useGet = (funcFromAPI) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    const request = async () => {
      const result = await funcFromAPI();
      // console.log(result);
      if (mounted) {
        setList(result.data);
      }
    };

    request();
    return () => {
      mounted = false;
    };
  }, []);

  return list;
};
