import { useEffect, useState } from "react";

export default function useDebounceValue<T = unknown>(value: T, delay: number) {
  const [debouncedValue, setDebopuncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebopuncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
