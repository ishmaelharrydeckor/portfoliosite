"use client";

import { useEffect, useState } from "react";

/** Live Accra time (GMT). Placeholder until mounted, to avoid a hydration mismatch. */
export default function LocalTime() {
  const [t, setT] = useState("--:--");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Accra" }).format(new Date());
    const tick = () => setT(fmt());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 20000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);
  return <span className="tabular-nums">{t} GMT</span>;
}
