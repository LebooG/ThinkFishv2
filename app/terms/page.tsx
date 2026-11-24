import LegalPage from '@/components/LegalPage';
import { buildMetadata } from '@/lib/seo';

const LEAD = 'Please read these terms and conditions carefully before using our services.';
export const metadata = buildMetadata({ title: 'Terms of Service', description: LEAD, path: '/terms' });

export default function Page() {
  return <LegalPage file="terms.md" title="Terms of Service" lead={LEAD} path="/terms" caps />;
}
