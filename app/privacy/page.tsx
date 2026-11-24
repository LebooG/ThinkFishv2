import LegalPage from '@/components/LegalPage';
import { buildMetadata } from '@/lib/seo';

const LEAD = 'Your privacy is important to us. Learn how we protect and handle your personal information.';
export const metadata = buildMetadata({ title: 'Privacy Policy', description: LEAD, path: '/privacy' });

export default function Page() {
  return <LegalPage file="privacy.md" title="Privacy Policy" lead={LEAD} path="/privacy" />;
}
