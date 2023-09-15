import { useEffect, useState } from 'react';

import { SetValue } from '../utils/types.ts';

export const useLocalStorage = <T>(
  key: string,
  fallback: T
): [T, SetValue<T>] => {
  const storageValue = localStorage.getItem(key);
  const [value, setValue] = useState<T>(() => {
    try {
      return storageValue !== null ? JSON.parse(storageValue) : fallback;
    } catch (e) {
      console.error(
        `Error while reading from local storage for the key "${key}"`
      );
      return fallback;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
