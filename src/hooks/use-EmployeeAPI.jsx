import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchData({ methodApi,url, credenials = false }) {
  const [value, setValue] = useState({
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: {},
    data: {},
  });

  useEffect(() => {
    if (!url) return;

    setValue((prev) => {
      return { ...prev, isLoading: true };
    });

    axios
      [methodApi](url, { withCredentials: credenials })
      .then((res) => {
        setValue((prev) => {
          return { ...prev, isSuccess: true, data: { ...res.data } };
        });
      })
      .catch((error) => {
        setValue((prev) => {
          return {
            ...prev,
            isError: true,
            error: error,
          };
        });
      })
      .finally(() => {
        setValue((prev) => {
          return { ...prev, isLoading: false };
        });
      });
  }, [url, credenials]);

  return value;
}
