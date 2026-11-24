import Link from 'next/link';
import { DISCLAIMER } from '@/lib/site';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <Link className="brand" href="/">
              ThinkFISH
            </Link>
            <p style={{ maxWidth: 340, color: '#E5E5E5', fontSize: 18, fontWeight: 600, letterSpacing: '-.01em' }}>
              Turn bold growth ideas into real results
            </p>
            <p style={{ maxWidth: 380, marginTop: 10, fontSize: 14.5 }}>
              Fundraising or Go-to-Market — What&apos;s your next move? We help startup, Real Estate, Funds and
              businesses raise capital and generate qualified B2B leads across all sectors.
            </p>
            <div className="social">
              <a href="https://x.com/ThinkFISHLLC" rel="noopener me">
                X
              </a>
              <a href="https://www.linkedin.com/company/fishagency/" rel="noopener me">
                LinkedIn
              </a>
              <a href="mailto:hello@thinkfish.co">Email</a>
            </div>
          </div>
          <nav aria-label="Products">
            <h4>Products</h4>
            <ul>
              <li>
                <Link href="/raise">Fundraising for Startups</Link>
              </li>
              <li>
                <Link href="/real-estate">Real Estate Fundraising</Link>
              </li>
              <li>
                <Link href="/funds">Fund Fundraising</Link>
              </li>
              <li>
                <Link href="/motion">B2B Lead Generation</Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Company">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/company">About Us</Link>
              </li>
              <li>
                <Link href="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Legal">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/cookies">Cookie Policy</Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="disc">{DISCLAIMER}</p>
        <p className="copy">© {new Date().getFullYear()} ThinkFISH. All rights reserved.</p>
      </div>
    </footer>
  );
}
