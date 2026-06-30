export const languages = {
  en: 'English',
  it: 'Italiano',
  id: 'Bahasa Indonesia',
  ru: 'Русский',
  zh: '中文',
  ja: '日本語',
} as const;

export const defaultLang = 'en' as const;
export type Lang = keyof typeof languages;

export const routes = {
  en: '/en/',
  it: '/it/',
  id: '/id/',
  ru: '/ru/',
  zh: '/zh/',
  ja: '/ja/',
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getLocalizedUrl(lang: Lang, path: string = '/'): string {
  return `/${lang}${path}`;
}