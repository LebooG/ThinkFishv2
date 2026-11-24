import LegalPage from '@/components/LegalPage';
import { buildMetadata } from '@/lib/seo';

const LEAD = 'Learn how we use cookies to improve your experience on our website.';
export const metadata = buildMetadata({ title: 'Cookie Policy', description: LEAD, path: '/cookies' });

export default function Page() {
  return <LegalPage file="cookies.md" title="Cookie Policy" lead={LEAD} path="/cookies" />;
}
