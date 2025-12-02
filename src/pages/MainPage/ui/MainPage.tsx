import { useTranslation } from "react-i18next";

export function MainPage() {
  const { t } = useTranslation();

  return <div>{t("Главная страница")}</div>;
}
