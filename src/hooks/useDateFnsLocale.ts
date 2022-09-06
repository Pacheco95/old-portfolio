import { useTranslation } from "next-i18next";

import * as dateFnsLocales from "date-fns/locale";

const locales = {
  "pt-BR": dateFnsLocales.ptBR,
  "en-US": dateFnsLocales.enUS,
};

const useDateFnsLocale = () => {
  const { i18n } = useTranslation();
  let language = i18n.language as keyof typeof locales;
  return locales[language];
};

export default useDateFnsLocale;
