import { useTranslation } from 'react-i18next';

function Error() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center w-full h-screen mt-4">
      <h1 className="text-2xl font-bold text-textPrimary">{t('pageNotFound')}</h1>
    </div>
  );
}

export default Error;
