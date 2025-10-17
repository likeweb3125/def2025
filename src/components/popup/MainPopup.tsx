"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  //   DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
const setCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
};

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
  return null;
};

export default function MainPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hidePopup = getCookie("hidePopup");
    if (!hidePopup) {
      setOpen(true); // 쿠키 없으면 팝업 열기
    }
  }, []);

  const handleCloseToday = () => {
    setCookie("hidePopup", "true", 1); // 1일 유지
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        // onInteractOutside={(e) => e.preventDefault()}
        showCloseButton={false}
        className="p-0 gap-0 !max-w-[544px] w-full border-0 cursor-default flex flex-col max-[600px]:!max-w-[90%]"
      >
        <div
          className="p-5"
          style={{
            background: "url('/images/popup-bg.png') no-repeat center center",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="gradient-border-rounded-box p-10 max-[450px]:p-5"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <DialogTitle>
              <p className="text-[22px] font-bold text-[#4AC8F4] text-center mb-2 max-[600px]:text-[16px] max-[450px]:text-[14px]">
                DIGITAL ECONOMY FORUM 2025
              </p>
              <p className="text-[72px] font-bold text-white pb-5 text-center leading-[86px] max-[600px]:text-[48px] max-[600px]:leading-[57px] max-[450px]:text-[32px] max-[450px]:leading-[38px]">
                참가 등록 안내
              </p>
            </DialogTitle>
            <DialogDescription hidden />
            <div className="border-t border-[#D9D9D999] pt-5 flex flex-col items-center justify-center">
              <p className="text-white text-[28px] leading-[42px] text-center mb-2 max-[600px]:text-[20px] max-[600px]:leading-[32px] max-[450px]:text-[16px] max-[450px]:leading-[24px]">
                등록페이지가 오픈되었습니다. <br />
                많은 관심 부탁드립니다.
              </p>
              <div className="inline-flex mt-9 text-[#4AC8F4] text-[20px] leading-[32px] font-bold text-center border-[2px] border-[#4AC8F4] rounded-[20px] px-6 max-[600px]:text-[16px] max-[600px]:leading-[24px] max-[600px]:mt-5">
                참가등록 기간
              </div>
              <p className="text-white text-[30px] leading-[48px] font-bold text-center mt-2 mb-[18px] max-[600px]:text-[20px] max-[600px]:leading-[32px]">
                10월 17일 (금) 13:00까지 <br /> (현장 등록 불가)
              </p>
              <Link
                href="https://event-us.kr/disitaleconomyforum/event/111541"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[linear-gradient(90deg,#298ECD_0%,#0A659E_100%)] rounded-[20px] p-1"
              >
                <p className="font-bold text-white leading-[64px] text-[40px] text-center border border-white rounded-[20px] py-[10px] max-[600px]:text-[32px] max-[600px]:leading-[40px] max-[450px]:text-[20px] max-[450px]:leading-[24px]">
                  참가등록 바로가기
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-black flex justify-between items-center px-5 h-[50px]">
          <DialogClose
            onClick={handleCloseToday}
            className="text-white text-[16px] font-bold cursor-pointer"
          >
            오늘은 그만보기
          </DialogClose>
          <DialogClose
            autoFocus
            className="text-white text-[16px] font-bold cursor-pointer"
          >
            닫기
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
