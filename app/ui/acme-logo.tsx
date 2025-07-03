import { GlobeAltIcon } from '@heroicons/react/24/outline';
// Update the import path below if 'fonts' is located elsewhere, e.g.:
import { lusitana } from './fonts';
// or provide the correct relative/absolute path to the 'fonts' module

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
