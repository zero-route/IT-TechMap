import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer page-width" id="tentang">
      <Link href="/" className="brand footer-brand"><span className="brand-mark">IT</span><span>Profesi<span className="brand-light">Map</span></span></Link>
      <p>Direktori untuk mengenal ragam profesi di industri teknologi.</p>
      <span className="copyright">© {new Date().getFullYear()} IT Profesi Map</span>
    </footer>
  );
}
