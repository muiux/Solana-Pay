import { useContext } from 'react';
import { LocaleContext } from '../context/LocaleContext';
import { strings } from '../translations/strings';
import { defaultLocale } from '../translations/config';

// section = ['MAIN', 'CARDS']
// content = strings
export default function useTranslation(section: string, content?: any) {
  const { locale } = useContext(LocaleContext)

  function t(key: string) {
    if (content) {
      if (!content[locale]) {
        console.warn(`CMS Locale for ${locale} not found.`);
      }

      if (!content[locale][section]) {
        console.warn(`Section not defined for ${locale}`);
      }

      if (!content[locale][section][key]) {
        console.warn(`Translation '${key}' for section ['${section}', locale '${locale}'] not found.`);
      }

      return content[locale][section][key] || content[defaultLocale][section][key] || '';
    }

    if (!strings[locale][key]) {
      console.warn(`String Translation '${key}' for locale '${locale}' not found.`)
    }

    return strings[locale][key] || strings[defaultLocale][key] || ''
  }

  return {
    t,
    locale
  }
}
