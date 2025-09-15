"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLoading } from "@/contexts/LoadingContext";
import { ReactNode } from "react";

interface LoadingLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function LoadingLink({
  href,
  children,
  className,
  onClick,
  ...props
}: LoadingLinkProps) {
  const { setIsLoading } = useLoading();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 외부 링크가 아니고, 현재 경로와 다른 경우에만 로딩 상태 활성화
    if (
      !href.startsWith("http") &&
      !href.startsWith("mailto:") &&
      href !== pathname
    ) {
      setIsLoading(true);
    }

    // 기존 onClick 핸들러 실행
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
