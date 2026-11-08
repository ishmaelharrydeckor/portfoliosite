"use client";

import { useEffect, useState } from "react";

/** Live Kumasi/Accra time (GMT). Renders a placeholder until mounted to avoid a hydration mismatch. */
export default function LocalTime() {
  const [t, setT] = useState("--:--");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Accra" }).format(new Date());
    setT(fmt());
    const id = setInterval(() => setT(fmt()), 20000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{t} GMT</span>;
}
