"use client";

import { NextUIProvider } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return <NextUIProvider locale="es-MX">{children} </NextUIProvider>;
};
