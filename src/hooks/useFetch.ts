import { useEffect, useState } from "react";
import axios from "axios";


export function useFetch<T=unknown>(url:string){
    const [data, setData] = useState<T|null>(null)


    useEffect(() => {
        axios
          .get("https://api.github.com/users/BrunoCostaPrado/repos")
          .then((response) => {
            setData(response.data);
          });
      }, []);
}