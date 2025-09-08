import Image from 'next/image';

interface MinistryLogoProps {
  className?: string;
}

export default function MinistryLogo({ className = "" }: MinistryLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* 기획재정부 로고 */}
      <div className="flex items-center justify-center">
        <Image
          src="/images/logos/logo_footer.png"
          alt="기획재정부"
          width={239}
          height={60}
          className="w-[239px] h-[60px] object-contain"
        />
      </div>
    </div>
  );
}
