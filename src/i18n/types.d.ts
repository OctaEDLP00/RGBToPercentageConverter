import { KEY_TRANSLATIONS } from './const.ts'
import { languages } from './ui.ts'

export type KeyLang = keyof typeof languages
export type KeyTranslation = (typeof KEY_TRANSLATIONS)[keyof typeof KEY_TRANSLATIONS]
export type UI<K extends string, T extends string> = Record<K, Record<T, string>>
