'use client'
import { NextUIProvider } from "@nextui-org/system";

const Provider = ({
    children,
}: {
    children: React.ReactNode,
}) => {
  return (
    <NextUIProvider>
        {children}
    </NextUIProvider>
  )
}

export default Provider