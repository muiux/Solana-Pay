import { locales } from './config'

export type Locale = typeof locales[number];

export type Strings = {
  [key in string]: {
    [key: string]: any
  }
}

export function isLocale(tested: Locale): boolean {
  return locales.some(locale => locale === tested)
}
