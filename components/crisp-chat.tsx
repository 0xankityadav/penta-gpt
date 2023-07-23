"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a8487591-d794-474c-965e-81691383a0f9");
  }, []);

  return null;
};
