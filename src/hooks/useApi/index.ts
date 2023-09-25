import { useEffect, useState } from "react";
import { getPopular } from "../../services";

export const UseApi = () => {
  const [payload, setPayload] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    (async () => {
      const data = await getPopular(page);
      setPayload(data);
    })();
  }, []);
  return {
    payload,
    page,
    setPage,
  };
};
