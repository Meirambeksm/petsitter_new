import { useEffect } from "react";

export default function useRequest(url, setDetails) {
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setDetails(data);
      } catch {
        alert("There was an error loading data...");
      }
    }
    fetchData();
  }, []);
}
