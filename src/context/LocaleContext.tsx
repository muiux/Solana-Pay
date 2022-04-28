import React, { useState, useEffect } from 'react';
import localStore from '../utils/localStore';
import { isLocale } from '../translations/types';
import { getInitLocale, defaultLocale } from '../translations/config';
import config from '../utils/config';

interface ContextProps {
  locale: string;
  setLocale: (locale: string) => void;
}

export const LocaleContext = React.createContext<ContextProps>({
  locale: '',
  setLocale: () => null,
});

export const LocaleProvider = ({ lang, children }) => {
  const [locale, setLocale] = useState(lang);

  useEffect(() => {
    if (locale !== localStore.get(config.localStoreKey.locale)) {
      const initLocale = getInitLocale();
      setLocale(initLocale);
      localStore.set(config.localStoreKey.locale, initLocale);
    }
  }, [locale]);

  if (!locale || !isLocale(locale)) {
    <LocaleContext.Provider value={{ locale: defaultLocale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}
