'use client';

import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';
import type { IconType } from 'react-icons';
import { FiBell, FiFileText, FiMousePointer, FiTarget } from 'react-icons/fi';
import heroCubes from '../assets/landing/hero-cubes.png';
import starsBg from '../assets/landing/stars-bg.png';
import logo from '../assets/landing/logo.png';
import footerLogo from '../assets/landing/footer-logo.png';
import brandCelestial from '../assets/landing/brand-celestial.png';
import brandApex from '../assets/landing/brand-apex.png';
import brandQuantum from '../assets/landing/brand-quantum.png';
import brandAcme from '../assets/landing/brand-acme.png';
import pulse from '../assets/landing/pulse.png';
import dashboardImage from '../assets/landing/dashboard.png';
import avatarImage from '../assets/landing/avatar.png';
import iconBig from '../assets/landing/icon-big.png';
import socialX from '../assets/landing/social-x.png';
import socialInstagram from '../assets/landing/social-instagram.png';
import socialYoutube from '../assets/landing/social-youtube.png';
import { GoGraph } from 'react-icons/go';
import { HiSparkles } from 'react-icons/hi2';

const navLinks = [
  { label: 'Features', hasDropdown: true },
  { label: 'Developers', hasDropdown: false },
  { label: 'Company', hasDropdown: true },
  { label: 'Blog', hasDropdown: false },
  { label: 'Changelog', hasDropdown: false },
];

const trustedBy = [
  { src: brandCelestial, alt: 'Celestial' },
  { src: brandApex, alt: 'APEX' },
  { src: brandQuantum, alt: 'Quantum' },
  { src: brandAcme, alt: 'Acme Corp' },
  { src: pulse, alt: 'Pulse' },
];

type FeatureHighlight = {
  icon: IconType;
  title: string;
  description: string;
};

const featureHighlights: FeatureHighlight[] = [
  {
    icon: GoGraph,
    title: 'Visual reports',
    description: "Visual insights into your site's performance.",
  },
  {
    icon: FiTarget,
    title: 'SEO goal setting',
    description: 'Helps you set and achieve SEO goals with guided assistance.',
  },
  {
    icon: FiMousePointer,
    title: 'One-click optimization',
    description: 'Perform complex SEO audits and optimizations with a single click.',
  },
  {
    icon: HiSparkles,
    title: 'Smart Keyword Generator',
    description: 'Automatic suggestions and the best keywords to target.',
  },
  {
    icon: FiBell,
    title: 'Automated alerts',
    description: 'Automatic notifications about your SEO health, including quick fixes.',
  },
  {
    icon: FiFileText,
    title: 'Competitor reports',
    description: 'Provides insights into competitors keyword strategies and ranking.',
  },
];

const pricingRows = [
  { label: 'Price', basic: '$29', pro: '$79', business: '$149' },
  { label: 'Keyword optimization', basic: 'Unlimited', pro: 'Unlimited', business: 'Unlimited' },
  { label: 'Automated meta tags', basic: '1000', pro: 'Unlimited', business: 'Unlimited' },
  { label: 'SEO Monitoring', basic: true, pro: true, business: true },
  { label: 'Monthly reports', basic: true, pro: true, business: true },
  { label: 'Content suggestions', basic: false, pro: true, business: true },
  { label: 'Link optimization', basic: false, pro: true, business: true },
  { label: 'Multi-user access', basic: false, pro: true, business: true },
  { label: 'API Integration', basic: false, pro: false, business: true },
];

const footerLinks = ['Features', 'Integration', 'Updates', 'FAQ', 'Pricing'];
const socialLinks = [
  { src: socialX, alt: 'X' },
  { src: socialInstagram, alt: 'Instagram' },
  { src: socialYoutube, alt: 'YouTube' },
];

type PlanValue = string | boolean;

function PlanCell({ value, showLeadingTick }: { value: PlanValue; showLeadingTick: boolean }) {
  if (typeof value === 'boolean') {
    return value ? <span className="font-light text-white">✓</span> : <span className="font-light text-white/35"></span>;
  }

  if (showLeadingTick) {
    return (
      <span className="inline-flex items-center gap-3 font-light text-white">
        <span>✓</span>
        <span>{value}</span>
      </span>
    );
  }

  return <span className="font-light text-white">{value}</span>;
}

export function LandingPage() {
  return (
    <main className="relative min-h-screen bg-landing-base px-3 py-4 font-light sm:px-5 lg:px-7">
      <div className="relative mx-auto max-w-layout">
        <div className="relative overflow-hidden rounded-shell border border-white/10 bg-landing-card">
          <div className="pointer-events-none absolute inset-0 bg-grid bg-landing-grid opacity-30" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-hero-glow w-hero-glow -translate-x-1/2 rounded-full bg-glow blur-3xl" />

          <div className="relative">
          <section className="mx-auto flex h-12 max-w-nav items-center justify-between rounded-shell border border-landing-nav-border bg-landing-base px-2 py-4 backdrop-blur">
              <div className="flex items-center gap-[70px]">
                <Image src={logo} alt="AI Startup Kit" className="h-7 w-auto" priority />
                <nav className="hidden items-center gap-7 md:flex">
                  {navLinks.map((item) => (
                    <a
                      key={item.label}
                      href="#"
                      className="flex items-center gap-1 leading-none text-body-xs font-light text-white/60 transition hover:text-white"
                    >
                      {item.label}
                      {item.hasDropdown && <FiChevronDown size={14} />}
                    </a>
                  ))}
                </nav>
              </div>
              <button
                type="button"
                className="rounded-surface border border-landing-cta-border bg-landing-brand-40 px-4 py-0.5 text-body-sm font-medium text-white backdrop-blur-[2px]"
              >
                Join waitlist
              </button>
          </section>

          <section className="relative rounded-br-[20px] border-y border-white/10 px-4 pb-5 pt-24 sm:px-7 lg:min-h-[520px] lg:px-8">
            <div
              className="pointer-events-none absolute inset-9 opacity-100"
              style={{ backgroundImage: `url(${starsBg.src})`, backgroundRepeat: 'repeat' }}
            />
            <div
              className="absolute inset-y-0 right-0 w-[56%] bg-gradient-to-r from-transparent via-purple-700/12 to-purple-600/40"
              style={{
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              }}
            />
            <div className="pointer-events-none absolute -bottom-24 left-1/2 h-[320px] w-[760px] -translate-x-1/2 rounded-full bg-purple-600/35 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-landing-hero lg:gap-4">
              <div className="space-y-6 pt-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black px-3 py-1 text-body-m text-landing-badge-text shadow-[0_0_0_1px_var(--badge-ring-color)] font-light">
                  <span className="rounded-full bg-purple-500 px-2 py-0.5 text-body-2xs font-bold text-black">NEW</span>
                  Latest integration just arrived
                </span>

                <div className="space-y-4">
                  <h1 className="max-w-[560px] font-display text-heading-1 font-light text-white sm:text-heading-1-sm">
                    Elevate your <br></br> SEO efforts.
                  </h1>
                  <p className="max-w-[500px] text-body-xl text-white/65">
                    Elevate your site&apos;s visibility effortlessly with AI, where smart technology meets
                    user-friendly SEO tools.
                  </p>
                </div>

                <form className="flex w-full max-w-[420px] gap-2 rounded-control border border-white/15 bg-black/35 p-1.5">
                  <input
                    aria-label="Email address"
                    type="email"
                    placeholder="Your email"
                    className="h-9 min-w-0 flex-1 rounded-md bg-transparent px-3 text-body-m text-white outline-none placeholder:text-white/45"
                  />
                  <button
                    type="submit"
                    className="shrink-0 whitespace-nowrap rounded-lg bg-white px-[15px] py-[5px] text-body-m font-medium text-black"
                  >
                    Join waitlist
                  </button>
                </form>
              </div>

              <div className="relative hidden h-[643px] w-full max-w-[588px] lg:ml-auto lg:block">
                <Image
                  src={heroCubes}
                  alt="Floating glossy cubes"
                  fill
                  priority
                  className="object-contain object-right-top"
                />
              </div>
              
            <div className="mt-8 flex min-h-16 flex-wrap items-center gap-x-14 gap-y-2 border-t border-white/10 pt-4 text-body-xs lg:absolute lg:inset-x-0 lg:bottom-[30px] lg:mt-0 lg:-mx-8 lg:px-8 lg:py-5">
              <span className="text-white/45 text-body-s">Trusted by top innovative teams:</span>
              {trustedBy.map((brand) => (
                <Image key={brand.alt} src={brand.src} alt={brand.alt} className="w-[117px] h-[30px] w-auto object-contain opacity-85" />
              ))}
            </div>
            </div>
          </section>

          <section className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-content text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black px-3 py-1 text-body-m text-landing-badge-text shadow-[0_0_0_1px_var(--badge-ring-color)]">
                Everything you need
              </span>
              <h2 className="mx-auto mt-5 max-w-[760px] font-display text-heading-3 font-light text-white sm:text-heading-3">
                Harness the power of AI, making search engine optimization intuitive and effective for all skill
                levels.
              </h2>
            </div>
              <Image
                src={dashboardImage}
                alt="SEO dashboard preview"
                className="w-full rounded-control border border-white/10"
              />

            <div className="mx-auto mt-7 grid max-w-content gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {featureHighlights.map((feature) => (
                <article key={feature.title} className="space-y-1.5">
                  <h3 className="flex items-start gap-2 font-light leading-[1.15] text-white">
                    <span className="mt-2 inline-flex h-4 w-4 shrink-0 items-center justify-center">
                      <feature.icon className="h-4 w-4 text-white/85" />
                    </span>
                    <span className="text-heading-5 font-light">{feature.title}</span>
                  </h3>
                  <p className="pl-6 text-body-m font-light text-white/55">{feature.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden px-4 pt-32">
            <div
              className="pointer-events-none absolute inset-9 opacity-70"
              style={{ backgroundImage: `url(${starsBg.src})`, backgroundRepeat: 'repeat' }}
            />
            <div className="relative mx-auto max-w-content overflow-hidden rounded-surface border border-white/10 border-b-0 bg-[linear-gradient(106deg,#000000_0%,#2c2833_34%,#6c31d2_52%,#000000_72%,#090613_100%)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,#11111166_0%,#0e0e0e4a_38%,#00000000_72%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(13deg,#121212_0%,#181818fc_44%,#7749c436_60%,#0b0b0b_100%)]" />
              <div
                className="pointer-events-none absolute inset-0 opacity-85 mix-blend-screen"
                style={{ backgroundImage: `url(${starsBg.src})`, backgroundRepeat: 'repeat', backgroundSize: '138px 138px' }}
              />
              <div className="relative z-10 gap-6 flex justify-center items-center px-36 py-36">
                <Image src={avatarImage} alt="Talia Taylor" className="w-[217px] h-[217px] rounded-[14px] object-cover" />
                <div className="space-y-3 w-[339px]">
                  <p className="max-w-[470px] text-quote font-medium text-white">
                    &quot;This product has completely transformed how I manage my projects and deadlines&quot;
                  </p>
                  <div>
                    <p className="text-body-m font-light leading-[1.4] text-white/95">Talia Taylor</p>
                    <p className="text-body-s font-light leading-[1.5] text-white/65">Digital Marketing Director @ Quantum</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-white/10 px-4 py-10 sm:px-6 lg:pb-[33px] lg:pl-[54px] lg:pr-[50px] lg:pt-[50px]">
            <div className="text-center pb-3">
              <h2 className="font-display text-heading-2 text-white">Pricing</h2>
              <p className="mx-auto mt-3 max-w-pricing-copy text-body-xl text-white p-1">
                Choose the right plan to meet your SEO needs and start optimizing today.
              </p>
            </div>

            <div className="mx-auto mt-6 max-w-content overflow-x-auto rounded-control border border-white/10 bg-black/35">
              <table className="w-full min-w-pricing border-collapse text-body-s leading-[1.625rem]">
                <thead>
                  <tr className="border-b border-white/10 text-white">
                    <th className="px-5 py-4 font-light" />
                    <th className="px-5 py-4 text-left align-top">
                      <span className="text-heading-4 font-light text-white">Basic</span>
                      <button className="mt-2 flex h-[38px] w-32 items-center justify-center rounded-surface border border-white/20 bg-white/10 text-body-s font-light leading-[1.625rem]">
                        Get Started
                      </button>
                    </th>
                    <th className="bg-[#26103f]/60 px-5 py-4 text-left align-top">
                      <span className="text-heading-4 font-light text-white">Pro</span>
                      <button className="mt-2 flex h-[38px] w-32 items-center justify-center rounded-surface border border-landing-cta-border bg-landing-brand-40 text-body-s font-light leading-[1.625rem] text-white backdrop-blur-[2px]">
                        Get Started
                      </button>
                    </th>
                    <th className="px-5 py-4 text-left align-top">
                      <span className="text-heading-4 font-light text-white">Business</span>
                      <button className="mt-2 flex h-[38px] w-32 items-center justify-center rounded-surface border border-white/20 bg-white/10 text-body-s font-light leading-[1.625rem]">
                        Get Started
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row) => (
                    <tr key={row.label} className="border-b border-white/10 last:border-0">
                      <td className="px-5 py-3 align-middle text-body-s font-light leading-[1.625rem] text-white">{row.label}</td>
                      <td className="px-5 py-3 text-left align-top text-body-s font-light leading-[1.625rem] text-white">
                        <PlanCell value={row.basic} showLeadingTick={row.label !== 'Price'} />
                      </td>
                      <td className="bg-[#26103f]/60 px-5 py-3 text-left align-top text-body-s font-light leading-[1.625rem] text-white">
                        <PlanCell value={row.pro} showLeadingTick={row.label !== 'Price'} />
                      </td>
                      <td className="px-5 py-3 text-left align-top text-body-s font-light leading-[1.625rem] text-white">
                        <PlanCell value={row.business} showLeadingTick={row.label !== 'Price'} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="px-4 pb-5 pt-16 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-content overflow-hidden rounded-surface border border-white/10 bg-[linear-gradient(106deg,#000000_0%,#2c2833_34%,#6c31d2_52%,#000000_72%,#090613_100%)] px-6 py-12 text-center sm:py-16">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,#11111166_0%,#0e0e0e4a_38%,#00000000_72%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(13deg,#121212_0%,#181818fc_44%,#7749c436_60%,#0b0b0b_100%)]" />
              <div
                className="pointer-events-none absolute inset-0 opacity-85 mix-blend-screen"
                style={{ backgroundImage: `url(${starsBg.src})`, backgroundRepeat: 'repeat', backgroundSize: '138px 138px' }}
              />
              <div className="relative z-10">
                <Image src={iconBig} alt="CTA icon" className="mx-auto mb-5 h-24 w-[92px] rounded-xl object-contain" />
                <h2 className="mx-auto max-w-cta font-display text-heading-2 text-white sm:text-heading-2">
                  The magic of AI at your fingertips.
                </h2>
                <p className="mx-auto mt-3 max-w-cta-copy text-body-xl text-white">
                  Achieve clear, impactful results without the complexity.
                </p>
                <button
                  type="button"
                  className="mt-6 rounded-md border border-landing-cta-border bg-landing-brand-40 px-4 py-1 text-body-s font-light leading-[1.625rem] text-white backdrop-blur-[2px]"
                >
                  Try for free
                </button>
              </div>
            </div>
          </section>
          

          <footer className="mx-auto mt-5 flex max-w-content flex-col gap-4 border-t border-white/10 pt-4 text-body-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
              <Image src={footerLogo} alt="AI Startup Kit" className="h-8 w-auto object-contain" />

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {footerLinks.map((item) => (
                  <a key={item} href="#" className="transition hover:text-white">
                    {item}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-8">
                {socialLinks.map((icon) => (
                  <a
                    key={icon.alt}
                    href="#"
                    aria-label={icon.alt}
                    className="flex h-4 w-4 shrink-0 items-center justify-center opacity-40 transition-opacity hover:opacity-100"
                  >
                    <Image src={icon.src} alt={icon.alt} className="h-6 w-6 object-contain" />
                  </a>
                ))}
              </div>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
