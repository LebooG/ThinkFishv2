'use client';

import { useState } from 'react';

type Inputs = { leads: number; conv: number; deal: number; cycle: number; cost: number };

const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-US');

export default function RoiCalculator() {
  const [v, setV] = useState<Inputs>({ leads: 20, conv: 10, deal: 10000, cycle: 3, cost: 8000 });
  const [out, setOut] = useState<null | { newLeads: number; curRev: number; newRev: number; gain: number; roi: number }>(
    null,
  );

  const set = (k: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setV((p) => ({ ...p, [k]: parseFloat(e.target.value) || 0 }));

  const calc = () => {
    const newLeads = v.leads * 2.5; // illustrative multiplier
    const curRev = v.leads * (v.conv / 100) * v.deal * 12;
    const newRev = newLeads * (v.conv / 100) * v.deal * 12;
    const gain = newRev - curRev;
    setOut({ newLeads, curRev, newRev, gain, roi: v.cost > 0 ? (gain / (v.cost * 12)) * 100 : 0 });
  };

  return (
    <div className="panels">
      <div className="panel">
        <h3>Your Current Metrics</h3>
        <div className="field">
          <label htmlFor="roi-a">Monthly Qualified Leads</label>
          <input id="roi-a" type="number" min={0} value={v.leads} onChange={set('leads')} />
        </div>
        <div className="field">
          <label htmlFor="roi-b">Lead to Customer Conversion Rate (%)</label>
          <input id="roi-b" type="number" min={0} max={100} value={v.conv} onChange={set('conv')} />
        </div>
        <div className="field">
          <label htmlFor="roi-c">Average Deal Value ($)</label>
          <input id="roi-c" type="number" min={0} value={v.deal} onChange={set('deal')} />
        </div>
        <div className="field">
          <label htmlFor="roi-d">Average Sales Cycle (months)</label>
          <input id="roi-d" type="number" min={0} value={v.cycle} onChange={set('cycle')} />
        </div>
        <div className="field">
          <label htmlFor="roi-e">Current Monthly Marketing/Sales Cost ($)</label>
          <input id="roi-e" type="number" min={0} value={v.cost} onChange={set('cost')} />
        </div>
        <button className="btn btn-primary" type="button" onClick={calc}>
          Calculate My ROI
        </button>
      </div>
      <div className="panel dark" aria-live="polite">
        <h3>
          Your Projected Results <span className="badge">illustrative</span>
        </h3>
        {out ? (
          <div className="out">
            <div>
              <span>Projected monthly qualified leads</span>
              <b>{Math.round(out.newLeads)}</b>
            </div>
            <div>
              <span>Current annual revenue from pipeline</span>
              <b>{fmt(out.curRev)}</b>
            </div>
            <div>
              <span>Projected annual revenue</span>
              <b>{fmt(out.newRev)}</b>
            </div>
            <div>
              <span>Sales cycle</span>
              <b>{v.cycle} mo</b>
            </div>
            <div className="hl">
              <span>Incremental annual revenue</span>
              <b>{fmt(out.gain)}</b>
            </div>
            <div className="hl">
              <span>Return vs. current spend</span>
              <b>{Math.round(out.roi)}%</b>
            </div>
          </div>
        ) : (
          <p style={{ color: '#A3A3A3' }}>
            Enter your metrics and click &quot;Calculate My ROI&quot; to see your potential results with ThinkFISH Motion.
          </p>
        )}
        <p className="note">
          Projection assumes qualified meetings scale with outreach volume; actual results vary by market, offer and ICP.
        </p>
      </div>
    </div>
  );
}
