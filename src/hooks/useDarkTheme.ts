import { useLocalStorage } from './useLocalStorage.ts';
import { useCallback, useEffect, useMemo } from 'react';
import { Theme, THEME_OPTIONS } from '../utils/types.ts';
import { STORAGE_KEYS } from '../utils/constants.ts';

export const useDarkTheme = () => {
  const [theme, setTheme] = useLocalStorage<Theme>(STORAGE_KEYS.THEME, 'dark');
  const isEnabled = useMemo(() => theme === 'dark', [theme]);

  const toggleTheme = useCallback(
    () => setTheme(theme => (theme === 'dark' ? 'light' : 'dark')),
    [setTheme]
  );

  useEffect(() => {
    const bodyClass = document.body.classList;
    bodyClass.remove(...THEME_OPTIONS);

    if (theme === 'dark') {
      bodyClass.add(theme);
    }
  }, [theme]);

  return [isEnabled, toggleTheme] as const;
};
