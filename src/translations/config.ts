import { isLocale } from './types';
import localStore from '../utils/localStore';
import config from '../utils/config';

export const defaultLocale = 'en';
export const locales = ['en', 'ja'];
export const languageNames = {
  en: 'en',
  ja: 'ja'
}

export function getInitLocale(): string {
  const localSetting = localStore.get(config.localStoreKey.locale);
  if (localSetting && isLocale(localSetting)) {
    return localSetting
  }

  const [browserSetting] = navigator.language.split('-');
  if (isLocale(browserSetting)) {
    return browserSetting
  }

  return defaultLocale
}