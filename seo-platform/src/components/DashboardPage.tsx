'use client';

import Image, { type StaticImageData } from 'next/image';
import type { IconType } from 'react-icons';
import {
  FiArrowDown,
  FiArrowDownRight,
  FiArrowRight,
  FiArrowUpRight,
  FiBell,
  FiCalendar,
  FiChevronDown,
  FiChevronRight,
  FiCheckSquare,
  FiDollarSign,
  FiEdit2,
  FiGrid,
  FiHome,
  FiMapPin,
  FiMoreHorizontal,
  FiSquare,
  FiPieChart,
  FiSearch,
  FiSettings,
  FiShoppingBag,
  FiTrash2,
  FiUser,
  FiUsers,
} from 'react-icons/fi';
import { HiArrowsRightLeft, HiOutlineSparkles } from 'react-icons/hi2';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import dashboardLogo from '../assets/landing/dashboardLogo.png';
import dummyBoy from '../assets/landing/dummyBoy.png';
import dummyGirl from '../assets/landing/dummyGirl.png';
import { BiCalendar } from 'react-icons/bi';

type NavItem = {
  label: string;
  icon?: IconType;
  active?: boolean;
  hasExpand?: boolean;
};

type StatCard = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: IconType;
};

type TeamMember = {
  name: string;
  email: string;
  progress: string;
  avatar: StaticImageData;
};

type Order = {
  id: string;
  client: string;
  email: string;
  date: string;
  status: 'Delivered' | 'Pending' | 'Canceled';
  country: string;
  total: string;
  selected?: boolean;
};

const statCards: StatCard[] = [
  { label: 'Save Products', value: '50.8K', change: '24.8%', positive: true, icon: HiOutlineSparkles },
  { label: 'Stock Products', value: '23.6K', change: '12.0%', positive: false, icon: FiShoppingBag },
  { label: 'Sale Products', value: '756', change: '7.6%', positive: true, icon: FiPieChart },
  { label: 'Average Revenue', value: '2.3K', change: '11.6%', positive: true, icon: FiBell },
];

const visitorBreakdown = [
  { name: 'Organic', value: 30, color: 'var(--dashboard-chart-fuchsia)' },
  { name: 'Social', value: 50, color: 'var(--dashboard-chart-cyan)' },
  { name: 'Direct', value: 20, color: 'var(--dashboard-chart-indigo)' },
] as const;

const transactionBreakdown = [
  { name: 'Sell', value: 50, color: 'var(--dashboard-chart-fuchsia)' },
  { name: 'Distribute', value: 30, color: 'var(--dashboard-chart-indigo)' },
  { name: 'Return', value: 20, color: 'var(--dashboard-chart-cyan)' },
] as const;

const revenueData = [
  { month: 'Jan', current: 18, subscribers: 12, customers: 26 },
  { month: 'Feb', current: 28, subscribers: 17, customers: 36 },
  { month: 'Mar', current: 41, subscribers: 24, customers: 49 },
  { month: 'Apr', current: 33, subscribers: 19, customers: 35 },
  { month: 'May', current: 17, subscribers: 12, customers: 20 },
  { month: 'Jun', current: 25, subscribers: 14, customers: 33 },
  { month: 'Jul', current: 10, subscribers: 7, customers: 16 },
  { month: 'Aug', current: 38, subscribers: 23, customers: 51 },
  { month: 'Sep', current: 18, subscribers: 12, customers: 30 },
  { month: 'Oct', current: 10, subscribers: 8, customers: 28 },
  { month: 'Nov', current: 16, subscribers: 11, customers: 25 },
  { month: 'Dec', current: 21, subscribers: 13, customers: 35 },
];

const products = [
  { name: 'iPhone 14 Pro Max', stock: '432 in stock', price: '$1,099.00' },
  { name: 'Apple Watch S8', stock: '231 in stock', price: '$799.00' },
] as const;

const team: TeamMember[] = [
  { name: 'John Carter', email: 'contact@square.com', progress: '60%', avatar: dummyBoy },
  { name: 'Sophie Moore', email: 'contact@square.com', progress: '33%', avatar: dummyGirl },
  { name: 'West German', email: 'info@horizon.com', progress: '75%', avatar: dummyBoy },
];

const orders: Order[] = [
  { id: '#1532', client: 'John Carter', email: 'hello@johncarter.com', date: 'Jan 30, 2024', status: 'Delivered', country: 'United States', total: '$1,099.24', selected: true },
  { id: '#1531', client: 'Sophie Moore', email: 'contact@sophiemoore.com', date: 'Jan 27, 2024', status: 'Canceled', country: 'United Kingdom', total: '$5,870.32' },
  { id: '#1530', client: 'Matt Cannon', email: 'info@mattcannon.com', date: 'Jan 24, 2024', status: 'Delivered', country: 'Australia', total: '$13,899.48', selected: true },
  { id: '#1529', client: 'Graham Hills', email: 'hi@grahamhills.com', date: 'Jan 21, 2024', status: 'Pending', country: 'India', total: '$1,569.12' },
  { id: '#1528', client: 'Sandy Houston', email: 'contact@sandyhouston.com', date: 'Jan 18, 2024', status: 'Delivered', country: 'Canada', total: '$899.16', selected: true },
  { id: '#1527', client: 'Andy Smith', email: 'hello@andysmith.com', date: 'Jan 15, 2024', status: 'Pending', country: 'United States', total: '$2,449.64' },
];

const dashboardNav: NavItem = { label: 'Dashboard', icon: FiHome, hasExpand: true };

const dashboardSubNav: NavItem[] = [
  { label: 'All pages' },
  { label: 'Reports', active: true },
  { label: 'Products' },
  { label: 'Task' },
];

const primaryNav: NavItem[] = [
  { label: 'Features', icon: FiGrid, hasExpand: true },
  { label: 'Users', icon: FiUsers, hasExpand: true },
  { label: 'Pricing', icon: FiDollarSign, hasExpand: true },
  { label: 'Integrations', icon: FiShoppingBag, hasExpand: true },
];

const secondaryNav: NavItem[] = [
  { label: 'Settings', icon: FiSettings, hasExpand: true },
  { label: 'Template pages', icon: FiMoreHorizontal, hasExpand: true },
];

const STATUS_PILL_CLASS: Record<Order['status'], string> = {
  Delivered: '--dashboard-status-success',
  Pending: '--dashboard-status-warning',
  Canceled: '--dashboard-status-danger',
};

function navClasses(item: NavItem) {
  if (item.active) {
    return 'rounded-md --dashboard-bg-chip px-4 py-3 --dashboard-text-primary';
  }
  return 'rounded-md px-4 py-2 --dashboard-link transition';
}

export function DashboardPage() {
  return (
    <main className="min-h-screen --dashboard-bg-page --dashboard-text-primary --dashboard-font">
      <div className="mx-auto flex overflow-hidden rounded-[16px] border --dashboard-border --dashboard-bg-shell">
        <aside className="w-[300px] border-r --dashboard-border --dashboard-bg-sidebar px-7 py-5">
          <div className="mb-10 mt-4 flex items-center gap-2 text-body-md font-medium">
            <Image src={dashboardLogo} alt="Dashdark X" className="h-6 w-6 object-contain" priority />
            <span className="--dashboard-text-primary text-body-xl font-semibold">Dashdark X</span>
            <HiArrowsRightLeft className="ml-auto h-3.5 w-3.5 --dashboard-icon-muted" />
          </div>

          <div className="mb-5 flex items-center gap-2 rounded border --dashboard-border --dashboard-bg-search px-3 py-2 text-body-xs --dashboard-text-dim">
            <FiSearch className="h-4 w-4" />
            Search for...
          </div>

          <nav className="text-body-xs">
            <a className="mb-2 flex items-center justify-between rounded-md px-4 py-3 --dashboard-text-active" href="#">
              <span className="flex items-center gap-2 font-medium">
                <span className="inline-flex w-4 justify-center">
                  {dashboardNav.icon && <dashboardNav.icon className="h-3.5 w-3.5 --dashboard-text-active" />}
                </span>
                {dashboardNav.label}
              </span>
              {dashboardNav.hasExpand && <FiChevronDown className="h-3.5 w-3.5 shrink-0 --dashboard-text-dim" />}
            </a>

            <div className="space-y-1">
              {dashboardSubNav.map((item) => (
                <a key={item.label} className={`relative flex items-center ${navClasses(item)}`} href="#">
                  {item.active && (
                    <span
                      aria-hidden
                      className="absolute left-1 top-1/2 h-8 w-[3px] -translate-y-1/2 rounded-full --dashboard-bg-active-indicator"
                    />
                  )}
                  <span className="flex items-center gap-2 pl-6">{item.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-3 space-y-1">
              {primaryNav.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} className={`flex items-center justify-between ${navClasses(item)}`} href="#">
                    <span className="flex items-center gap-2">
                      <span className="inline-flex w-4 justify-center">
                        {Icon && <Icon className="h-3.5 w-3.5" />}
                      </span>
                      {item.label}
                    </span>
                    {item.hasExpand && <FiChevronRight className="h-3.5 w-3.5 shrink-0 --dashboard-text-dim" />}
                  </a>
                );
              })}
            </div>
          </nav>

          <div className="mx-[-1.75rem] mt-6 border-t --dashboard-border px-7 pt-5 text-body-xs">
            {secondaryNav.map((item) => {
              const Icon = item.icon ?? FiMoreHorizontal;
              return (
                <a key={item.label} className={`flex items-center justify-between ${navClasses(item)}`} href="#">
                  <span className="flex items-center gap-2">
                    <span className="inline-flex w-4 justify-center">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    {item.label}
                  </span>
                  {item.hasExpand && <FiChevronRight className="h-3.5 w-3.5 shrink-0 --dashboard-text-dim" />}
                </a>
              );
            })}
          </div>

          <div className="mt-1 space-y-3 text-body-xs">
            <a className="flex items-center justify-between px-4 py-3 mb-12" href="#">
              <span className="flex items-center gap-2">
                <Image src={dummyBoy} alt="John Carter" className="h-8 w-8 rounded-full object-cover" />
                <span className="leading-tight">
                  <span className="block text-body-xs --dashboard-text-primary">John Carter</span>
                  <span className="block text-body-1xs --dashboard-text-dim">Account settings</span>
                </span>
              </span>
              <FiChevronRight className="h-3.5 w-3.5 --dashboard-text-dim" />
            </a>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-md --dashboard-gradient-accent px-3 py-2.5 text-body-l font-medium --dashboard-text-primary shadow-[inset_0_1px_0_0_#ffffff33]"
            >
              <span>Get template</span>
              <FiArrowRight className="h-3.5 w-3.5 shrink-0" />
            </button>
          </div>
        </aside>

        <section className="flex-1 --dashboard-bg-content px-6 py-5 mt-4">
          <header className="mb-4 flex items-center justify-between">
            <h1 className="text-body-xl font-medium --dashboard-text-primary">Analytics</h1>
            <button
              type="button"
              className="flex h-[30px] items-center justify-center gap-1 rounded-[4px] bg-[#CB3CFF] px-4 py-2 text-body-2xs font-medium --dashboard-text-primary"
            >
              May 2023
              <FiChevronDown className="h-3 w-3 shrink-0" />
            </button>
          </header>

          <div className="mb-6 mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {statCards.map((card) => (
              <article key={card.label} className="h-[88px] rounded-lg border --dashboard-border --dashboard-bg-panel p-3">
                <div className="mb-2 flex items-center justify-between">
                  <p className="flex items-center gap-1.5 text-body-xs --dashboard-text-dim">
                    <card.icon className="h-3.5 w-3.5 --dashboard-accent-strong" />
                    {card.label}
                  </p>
                  <FiMoreHorizontal className="h-3.5 w-3.5 --dashboard-text-dim" />
                </div>
                <div className="flex items-center gap-2">
                  <p className="--dashboard-text-stat font-medium">{card.value}</p>
                  <span
                    className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-body-2xs ${card.positive ? '--dashboard-status-success' : '--dashboard-status-danger'}`}
                  >
                    {card.change}
                    {card.positive ? <FiArrowUpRight className="h-3 w-3 shrink-0" /> : <FiArrowDownRight className="h-3 w-3 shrink-0" />}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-12">
            <article className="rounded-lg border --dashboard-border --dashboard-bg-panel p-6 xl:col-span-4">
              <div className="mb-5 flex items-center justify-between text-body-xs --dashboard-text-primary">
                <p>Website Visitor&apos;s</p>
                <button type="button" className="flex items-center gap-1 --dashboard-text-primary --dashboard-bg-chip p-1 rounded-md">
                  Export <FiArrowDown className="h-3 w-3" />
                </button>
              </div>
              <div className="relative mx-auto mb-4 h-36 w-36">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={visitorBreakdown}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={48}
                      outerRadius={58}
                      startAngle={90}
                      endAngle={-270}
                      stroke="none"
                    >
                      {visitorBreakdown.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="--dashboard-text-primary font-medium text-body-4xl">150k</span>
                </div>
              </div>
              <div className="space-y-2 text-body-xs">
                {visitorBreakdown.map((item) => (
                  <div key={item.name} className="flex items-center justify-between --dashboard-text-muted">
                    <span className="flex items-center gap-2 mb-2">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                      {item.name}
                    </span>
                    <span className="font-medium --dashboard-text-primary">{item.value}%</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-lg border --dashboard-border --dashboard-bg-panel p-6 xl:col-span-8">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div className="space-y-1">
                  <p className="text-body-xs --dashboard-text-dim mb-2">Revenue by customer type</p>
                  <div className="flex items-center gap-2">
                    <p className="--dashboard-text-primary font-medium text-body-xl">$240.8K</p>
                    <span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-body-2xs --dashboard-status-success">
                      14.8% <FiArrowUpRight className="h-3 w-3 shrink-0" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-body-2xs --dashboard-text-muted">
                  <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full --dashboard-chart-fuchsia" />Current clients</span>
                  <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full --dashboard-chart-indigo" />Subscribers</span>
                  <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full --dashboard-chart-cyan" />New customers</span>
                  <button type="button" className="inline-flex items-center gap-1 rounded --dashboard-bg-row px-2 py-1 text-body-2xs --dashboard-text-muted">
                    <BiCalendar className="h-3 w-3" />
                    Jan 2024 - Dec 2024 <FiChevronDown className="h-3 w-3" />
                  </button>
                </div>
              </div>
              <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData} margin={{ top: 6, right: 6, left: 6, bottom: -15 }} barGap={6}>
                    <CartesianGrid stroke="var(--dashboard-chart-grid)" vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="month" tick={{ fill: 'var(--dashboard-chart-axis)', fontSize: 10 }} axisLine={false} tickLine={false} />
                    <YAxis
                      tick={{ fill: 'var(--dashboard-chart-axis)', fontSize: 10 }}
                      tickFormatter={(value) => `${value}K`}
                      axisLine={false}
                      tickLine={false}
                      width={44}
                    />
                    <Bar dataKey="current" fill="var(--dashboard-chart-fuchsia)" radius={[3, 3, 0, 0]} />
                    <Bar dataKey="subscribers" fill="var(--dashboard-chart-indigo)" radius={[3, 3, 0, 0]} />
                    <Bar dataKey="customers" fill="var(--dashboard-chart-cyan)" radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </article>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <article className="rounded-lg border --dashboard-border --dashboard-bg-panel p-6">
              <h3 className="mb-4 text-body-md --dashboard-text-primary">Products</h3>
              <div className="mb-6 flex items-center justify-between text-body-2xs --dashboard-text-dim">
                <span className="--dashboard-text-primary">Products</span>
                <span className="--dashboard-text-primary">Price</span>
              </div>
              <div className="space-y-3">
                {products.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      {item.name.includes('iPhone') ? (
                        <span className="mb-6 inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#0A173E] text-[#8FA3D9]">
                          <span className="relative inline-block h-7 w-4 rounded-[5px] border border-current">
                            <span className="absolute left-1/2 top-[2px] h-[1.5px] w-1.5 -translate-x-1/2 rounded-full bg-current" />
                            <span className="absolute bottom-[2px] left-1/2 h-[2px] w-[2px] -translate-x-1/2 rounded-full bg-current" />
                          </span>
                        </span>
                      ) : (
                        <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#0A173E] text-[#8FA3D9]">
                          <span className="relative inline-block h-4 w-4 rounded-[4px] border border-current">
                            <span className="absolute -left-[2px] top-1/2 h-2 w-[1.5px] -translate-y-1/2 rounded-full bg-current" />
                            <span className="absolute -right-[2px] top-1/2 h-2 w-[1.5px] -translate-y-1/2 rounded-full bg-current" />
                          </span>
                        </span>
                      )}
                      <div className="mb-5">
                        <p className="text-body-xs --dashboard-text-primary">{item.name}</p>
                        <p className="text-body-2xs --dashboard-text-dim">{item.stock}</p>
                      </div>
                    </div>
                    <span className="text-body-2xs --dashboard-text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-lg border --dashboard-border --dashboard-bg-panel p-6">
              <h3 className="mb-4 text-body-md --dashboard-text-primary">Team progress</h3>
              <div className="space-y-3.5">
                {team.map((member) => (
                  <div key={member.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image src={member.avatar} alt={member.name} className="h-6 w-6 rounded-full object-cover" />
                      <div className="leading-tight">
                        <p className="text-body-xs --dashboard-text-primary">{member.name}</p>
                        <p className="text-body-2xs --dashboard-text-dim">{member.email}</p>
                      </div>
                    </div>
                    <span className="text-body-xs --dashboard-text-primary">{member.progress}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-lg border --dashboard-border --dashboard-bg-panel p-6">
              <h3 className="mb-3 text-body-md --dashboard-text-secondary">Website Visitors</h3>
              <div className="relative mx-auto mb-2 h-[150px] w-full max-w-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={transactionBreakdown}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="60%"
                      startAngle={180}
                      endAngle={0}
                      innerRadius={80}
                      outerRadius={90}
                      stroke="none"
                    >
                      {transactionBreakdown.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-7">
                  <div className="text-center">
                    <p className="text-[40px] font-semibold leading-none --dashboard-text-primary">80%</p>
                    <p className="mt-1 text-body-xs --dashboard-text-dim">Transactions</p>
                  </div>
                </div>
              </div>
              <div className="mt-1 flex items-center justify-center gap-5 text-body-xs --dashboard-text-muted">
                {transactionBreakdown.map((item) => (
                  <span key={item.name} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                    {item.name}
                  </span>
                ))}
              </div>
            </article>
          </div>

          <article className="mt-6 overflow-hidden rounded-md --dashboard-bg-panel p-3">
            <div className="flex items-center justify-between --dashboard-border px-5 py-4">
              <h3 className="text-body-md --dashboard-text-primary font-light">Orders Status</h3>
              <div className="flex items-center gap-2">
                <button type="button" className="inline-flex items-center gap-1 rounded --dashboard-bg-chip px-2.5 py-2 text-body-2xs --dashboard-text-muted">
                  <FiCalendar className="h-3 w-3" />
                  Jan 2024
                  <FiChevronDown className="h-3 w-3" />
                </button>
                <button type="button" className="rounded-[4px] bg-[#CB3CFF] px-2.5 py-2 text-body-2xs font-medium --dashboard-text-primary">
                  Create order
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[980px] text-left text-body-2xs font-light">
                <thead className="--dashboard-text-primary">
                  <tr className="">
                    <th className="w-[52px] px-5 py-3 font-light">
                      <FiCheckSquare className="h-3.5 w-3.5 --dashboard-text-primary" />
                    </th>
                    <th className="px-3 py-3">
                      <span className="inline-flex items-center gap-1.5 font-light">
                        Order
                      </span>
                    </th>
                    <th className="px-3 py-3">
                      <span className="inline-flex items-center gap-1.5 font-light">
                        <FiUser className="h-3 w-3" />
                        Client
                      </span>
                    </th>
                    <th className="px-3 py-3">
                      <span className="inline-flex items-center gap-1.5 font-light">
                        <FiCalendar className="h-3 w-3" />
                        Date
                      </span>
                    </th>
                    <th className="px-3 py-3">
                      <span className="inline-flex items-center gap-1.5 font-light">
                        <FiCheckSquare className="h-3 w-3" />
                        Status
                      </span>
                    </th>
                    <th className="px-3 py-3">
                      <span className="inline-flex items-center gap-1.5 font-light">
                        <FiMapPin className="h-3 w-3" />
                        Country
                      </span>
                    </th>
                    <th className="px-3 py-3 font-light">Total</th>
                    <th className="w-[74px] px-3 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr
                      key={order.id}
                      className={`border-b --dashboard-border-soft last:border-b-0 ${index % 2 === 1 ? '' : '--dashboard-bg-row'}`}
                    >
                      <td className="px-5 py-3">
                        {order.selected
                          ? <FiCheckSquare className="h-3.5 w-3.5 --dashboard-accent-strong" />
                          : <FiSquare className="h-3.5 w-3.5 --dashboard-text-dim" />}
                      </td>
                      <td className="px-3 py-3 --dashboard-text-primary text-body-2xs">{order.id}</td>
                      <td className="px-3 py-3">
                        <p className="text-body-2xs --dashboard-text-primary">{order.client}</p>
                        <p className="text-body-2xs --dashboard-text-dim">{order.email}</p>
                      </td>
                      <td className="px-3 py-3 --dashboard-text-muted text-body-2xs">{order.date}</td>
                      <td className="px-3 py-3">
                        <span className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-body-2xs ${STATUS_PILL_CLASS[order.status]}`}>
                          <span className="text-[8px] leading-none">•</span>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-3 py-3 --dashboard-text-muted text-body-2xs">{order.country}</td>
                      <td className="px-3 py-3 --dashboard-text-primary text-body-2xs">{order.total}</td>
                      <td className="px-3 py-3">
                        <div className="flex items-center gap-2 --dashboard-text-muted">
                          <FiEdit2 className="h-3.5 w-3.5" />
                          <FiTrash2 className="h-3.5 w-3.5" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
