"use client";

import Link from "next/link";
import { useLoading } from "@/contexts/LoadingContext";
import { ReactNode } from "react";

interface LoadingLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 외부 링크가 아닌 경우에만 로딩 상태 활성화
    if (!href.startsWith("http") && !href.startsWith("mailto:")) {
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
