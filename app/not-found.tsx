import Link from 'next/link';
import { Hero } from '@/components/ui';

export const metadata = { title: 'Page not found', robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <Hero eyebrow="404" title="This page took a different route." lead="The page you're looking for doesn't exist or has moved.">
      <Link className="btn btn-primary arrow" href="/">
        Back to home
      </Link>
      <Link className="btn btn-ghost arrow" href="/contact">
        Contact us
      </Link>
    </Hero>
  );
}
