import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { mockAds, mockOffers, mockUser, mockWithdrawals, mockUsersAdmin } from './mockData';

const navClasses = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-lg text-sm font-semibold ${isActive ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600 hover:text-slate-900'}`;

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-slate-50">
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-xl font-bold text-indigo-700">EarnSite</div>
        <nav className="flex gap-2">
          <NavLink to="/" className={navClasses}>
            Landing
          </NavLink>
          <NavLink to="/dashboard" className={navClasses}>
            Dashboard
          </NavLink>
          <NavLink to="/admin" className={navClasses}>
            Admin
          </NavLink>
        </nav>
      </div>
    </header>
    <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
  </div>
);

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="grid gap-8 lg:grid-cols-2 items-center">
      <div className="space-y-6">
        <p className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
          New — Earn from ads, offers, and referrals
        </p>
        <h1 className="text-4xl font-bold leading-tight text-slate-900">
          Earn cash by viewing ads, completing offers, and inviting friends.
        </h1>
        <p className="text-lg text-slate-600">
          Fast payouts, transparent earnings, and fair anti-fraud checks. Get started in minutes.
        </p>
        <div className="flex gap-3">
          <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>
            Go to dashboard
          </button>
          <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>
            View ads
          </button>
        </div>
        <div className="flex gap-4 text-sm text-slate-500">
          <span>Secure auth</span>
          <span>Instant crediting</span>
          <span>Admin-reviewed withdrawals</span>
        </div>
      </div>
      <div className="card p-6 space-y-4">
        <h3 className="text-lg font-semibold">How it works</h3>
        <ol className="space-y-3 text-slate-700">
          <li>1. Pick an ad or offer</li>
          <li>2. Complete the required view/time</li>
          <li>3. Earnings credit instantly</li>
          <li>4. Cash out to your method</li>
        </ol>
        <div className="rounded-xl bg-indigo-50 p-4 text-sm text-indigo-800">
          Mock mode: no backend needed. Swap the client to real API later.
        </div>
      </div>
    </div>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="card p-4">
    <p className="text-sm text-slate-500">{label}</p>
    <p className="text-2xl font-bold text-slate-900">{value}</p>
  </div>
);

const Dashboard = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-900">Welcome, {mockUser.name}</h2>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Stat label="Balance" value={`$${mockUser.balance.toFixed(2)}`} />
      <Stat label="Pending" value={`$${mockUser.pending.toFixed(2)}`} />
      <Stat label="Referrals" value={`${mockUser.referrals}`} />
      <Stat label="Referral earnings" value={`$${mockUser.referralEarnings.toFixed(2)}`} />
    </div>

    <section className="grid gap-4 lg:grid-cols-3">
      <div className="card p-4 lg:col-span-2">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Available ads</h3>
          <span className="text-sm text-slate-500">Mock data</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {mockAds.map((ad) => (
            <div key={ad.id} className="rounded-xl border border-slate-200 p-3 bg-white">
              <div className="flex gap-3">
                <img src={ad.imageUrl} alt={ad.title} className="h-16 w-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{ad.title}</p>
                  <p className="text-sm text-slate-500">
                    Payout ${ad.payout.toFixed(2)} · {ad.minViewTime}s view
                  </p>
                  <p className="text-xs text-slate-500">Budget left ${ad.remainingBudget.toFixed(0)}</p>
                </div>
              </div>
              <button className="btn btn-primary mt-3 w-full">View now</button>
            </div>
          ))}
        </div>
      </div>
      <div className="card p-4">
        <h3 className="text-lg font-semibold mb-3">Offers</h3>
        <div className="space-y-3">
          {mockOffers.map((offer) => (
            <div key={offer.id} className="rounded-lg border border-slate-200 p-3">
              <p className="font-semibold text-slate-900">{offer.title}</p>
              <p className="text-sm text-slate-500">{offer.provider}</p>
              <p className="text-sm font-semibold text-indigo-700">${offer.payout.toFixed(2)}</p>
              <button className="btn btn-ghost mt-2 w-full">Open</button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="card p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Withdrawals</h3>
        <button className="btn btn-primary">Request payout</button>
      </div>
      <div className="space-y-2">
        {mockWithdrawals.map((w) => (
          <div key={w.id} className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
            <div>
              <p className="font-semibold text-slate-900">${w.amount.toFixed(2)}</p>
              <p className="text-sm text-slate-500">{w.method}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold capitalize text-slate-800">{w.status}</p>
              <p className="text-xs text-slate-500">{w.createdAt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const Admin = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Admin</h2>
        <p className="text-sm text-slate-500">Mock mode — connect to API later</p>
      </div>
      <button className="btn btn-primary">New ad</button>
    </div>

    <section className="card p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Users</h3>
        <span className="text-sm text-slate-500">Totals: {mockUsersAdmin.length}</span>
      </div>
      <div className="divide-y divide-slate-200">
        {mockUsersAdmin.map((u) => (
          <div key={u.id} className="flex items-center justify-between py-3">
            <div>
              <p className="font-semibold text-slate-900">{u.name}</p>
              <p className="text-sm text-slate-500">{u.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {u.role}
              </span>
              {u.isVerified && (
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">verified</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="card p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Ads (mock)</h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {mockAds.map((ad) => (
          <div key={ad.id} className="rounded-lg border border-slate-200 p-3">
            <p className="font-semibold text-slate-900">{ad.title}</p>
            <p className="text-sm text-slate-500">Payout ${ad.payout.toFixed(2)}</p>
            <p className="text-xs text-slate-500">Budget ${ad.remainingBudget.toFixed(0)}</p>
            <div className="mt-2 flex gap-2">
              <button className="btn btn-ghost">Edit</button>
              <button className="btn btn-primary">Activate</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Layout>
  );
}

export default App;

