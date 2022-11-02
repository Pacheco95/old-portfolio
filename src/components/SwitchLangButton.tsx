import { Button } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const SwitchLangButton = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const switchLanguage = () => {
    const locale = i18n.language === "pt" ? "en" : "pt";
    document.cookie = `NEXT_LOCALE=${locale}`;
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale }).catch(console.error);
  };

  return (
    <Button color="primary" variant="link" size="lg" onClick={switchLanguage}>
      {i18n.language === "pt" ? "EN" : "PT"}
    </Button>
  );
};

export default SwitchLangButton;
