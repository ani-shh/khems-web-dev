"use client";

import { useEffect } from "react";
import Userback from "@userback/widget";

const USERBACK_TOKEN = "A-b0n1DmnsRMUL0B4Gni4qv8ltm";

export function UserbackProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initUserback = async () => {
      await Userback(USERBACK_TOKEN);
    };
    initUserback();
  }, []);

  return <>{children}</>;
}
