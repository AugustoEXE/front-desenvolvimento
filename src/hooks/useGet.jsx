import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../components/global/AuthProvider";

export const useGet = (funcFromAPI, search) => {
  const { setAuth } = useAuth();
  const [list, setList] = useState([]);
  console.log(funcFromAPI);
  useEffect(() => {
    let mounted = true;

    const request = async () => {
      const result = await funcFromAPI(search);

      if (mounted) {
        setList(result.data);
      }
    };

    request();
    if (list.length < 1) {
      setAuth(false);
    }
    return () => {
      mounted = false;
    };
  }, [search ? search : null]);

  return list;
};
