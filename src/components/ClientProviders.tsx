"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "@/redux/store";


interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <SessionProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </SessionProvider>
  );
}
