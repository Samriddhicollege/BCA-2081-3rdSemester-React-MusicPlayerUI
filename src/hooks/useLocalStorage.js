
import { useState } from "react";

function useLocalStorage(key, initialValue) {
  // On first load, try to read saved data from localStorage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key); //— Retrieve
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  
  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value)); //— Store
    } catch (err) {
      console.error("Could not save to localStorage:", err);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
