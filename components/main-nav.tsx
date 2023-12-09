"use client";

import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathName = usePathname();
  const params = useParams();
  const routes = [
    {
      href: `/${params.storeId}`,
      label: "Inicio",
      active: pathName === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: "Publicidades",
      active: pathName === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/categories`,
      label: "Categorias",
      active: pathName === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: "Tamaños",
      active: pathName === `/${params.storeId}/sizes`,
    },
    {
      href: `/${params.storeId}/colors`,
      label: "Colores",
      active: pathName === `/${params.storeId}/colors`,
    },
    {
      href: `/${params.storeId}/products`,
      label: "Productos",
      active: pathName === `/${params.storeId}/products`,
    },
    {
      href: `/${params.storeId}/orders`,
      label: "Ordenes",
      active: pathName === `/${params.storeId}/orders`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Ajustes",
      active: pathName === `/${params.storeId}/settings`,
    },
  ];
  return (
    <nav
      className={cn(
        "flex items-center space-x-4 lg:space-x-6 overflow-x-auto",
        className
      )}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
