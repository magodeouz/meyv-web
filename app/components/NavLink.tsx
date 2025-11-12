"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import type {
  AnchorHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";

type RenderProp = (args: { isActive: boolean }) => ReactNode;

type NavLinkChildren = ReactNode | RenderProp;

export interface NavLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> {
  to: Route;
  end?: boolean;
  render?: RenderProp;
  prefetch?: boolean;
  children?: NavLinkChildren;
}

export default function NavLink({
  to,
  end,
  children,
  render,
  onClick,
  prefetch,
  ...anchorProps
}: NavLinkProps) {
  const pathname = usePathname() ?? "";
  const targetPath = typeof to === "string" ? to : "";

  const isActive = (() => {
    if (!targetPath) {
      return false;
    }

    if (end) {
      return pathname === targetPath;
    }

    if (targetPath === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(
      targetPath.endsWith("/") ? targetPath : `${targetPath}`,
    );
  })();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  const content =
    typeof children === "function"
      ? (children as RenderProp)({ isActive })
      : render
        ? render({ isActive })
        : children;

  return (
    <Link
      href={to}
      prefetch={prefetch}
      onClick={handleClick}
      {...anchorProps}
    >
      {content}
    </Link>
  );
}

