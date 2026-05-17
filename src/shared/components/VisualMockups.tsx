export function CampaignPreview() {
  return (
    <div className="media-frame overflow-hidden rounded-[2rem] bg-white p-4">
      <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-yellow">Campaign Board</p>
            <h3 className="mt-2 text-2xl font-black">Grow Up Launch</h3>
          </div>
          <span className="rounded-full bg-brand-orange px-4 py-2 text-xs font-black">Live</span>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-3xl bg-white/10 p-4">
            <div className="aspect-[9/16] rounded-2xl bg-gradient-to-br from-brand-blue via-blue-500 to-brand-orange p-4">
              <div className="rounded-2xl bg-white/95 p-3 text-slate-950 shadow-soft">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-orange">Reel Script</p>
                <p className="mt-2 text-lg font-black leading-tight">Promote your business in 30 seconds.</p>
              </div>
            </div>
          </div>
          <div className="grid content-between gap-4">
            <MetricCard label="Video Views" value="42K" />
            <MetricCard label="Messages" value="318" accent />
            <div className="rounded-3xl bg-white p-4 text-slate-950">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-blue">Content Plan</p>
              <div className="mt-4 space-y-3">
                <ProgressBar label="Reels" width="w-11/12" />
                <ProgressBar label="Ads" width="w-4/5" orange />
                <ProgressBar label="Posts" width="w-2/3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StrategyVisual() {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-brand-navy p-5 text-white shadow-soft">
      <div className="rounded-[1.5rem] bg-white p-5 text-slate-950">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-orange">Strategy Room</p>
        <h3 className="mt-3 text-3xl font-black">Business to campaign</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {["Business Goal", "Audience", "Video Angle", "Ad Offer"].map((item, index) => (
            <div key={item} className="rounded-3xl bg-blue-50 p-5">
              <span className="text-sm font-black text-brand-orange">0{index + 1}</span>
              <p className="mt-2 font-black">{item}</p>
              <div className="mt-4 h-2 rounded-full bg-blue-100">
                <div className="h-2 rounded-full bg-brand-blue" style={{ width: `${70 + index * 6}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StudioVisual() {
  return (
    <div className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-soft">
      <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-3xl bg-gradient-to-br from-brand-blue to-brand-orange p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">Video Studio</p>
          <h3 className="mt-20 text-3xl font-black leading-tight">Short videos that make the offer clear.</h3>
        </div>
        <div className="grid gap-4">
          <div className="rounded-3xl bg-white p-5 text-slate-950">
            <p className="text-sm font-black text-brand-orange">Timeline</p>
            <div className="mt-4 grid grid-cols-4 gap-2">
              <span className="h-16 rounded-xl bg-brand-blue" />
              <span className="h-16 rounded-xl bg-blue-200" />
              <span className="h-16 rounded-xl bg-brand-orange" />
              <span className="h-16 rounded-xl bg-yellow-300" />
            </div>
          </div>
          <div className="rounded-3xl bg-white/10 p-5">
            <p className="text-sm font-black text-brand-yellow">Ready for ads, reels, and launch posts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-3xl p-4 ${accent ? "bg-brand-orange" : "bg-white/10"}`}>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">{label}</p>
      <p className="mt-2 text-3xl font-black">{value}</p>
    </div>
  );
}

function ProgressBar({ label, width, orange = false }: { label: string; width: string; orange?: boolean }) {
  return (
    <div>
      <div className="flex justify-between text-xs font-bold text-slate-500">
        <span>{label}</span>
        <span>Ready</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-slate-100">
        <div className={`h-2 rounded-full ${width} ${orange ? "bg-brand-orange" : "bg-brand-blue"}`} />
      </div>
    </div>
  );
}
