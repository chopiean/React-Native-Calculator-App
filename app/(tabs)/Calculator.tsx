import { useState } from "react";

export default function Calculator() {
  const [a, setA] = useState<string>("");
  const [b, setB] = useState<string>("");
  const [result, setResult] = useState<number>(0);

  const toNumber = (value: string): number | null => {
    const cleaned = value.trim().replace(",", ".");
    if (cleaned === "") return 0;

    const n = Number(cleaned);
    return Number.isNaN(n) ? null : n;
  };
}
