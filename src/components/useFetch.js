import { useState, useEffect } from "react";
export const useFetch = (url) => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const requestFetch = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        const info = await req.json();
        console.log(info);
        if (!req.ok) {
          throw new Error("Could not Fetch data");
        }
        setInfo(info.recipes);
        setIsPending(false);
        setError(null);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    };
    requestFetch();
  }, [url]);

  return { info, isPending, error };
};
