"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Program() {
  const { t } = useLanguage();

  return (
    <div>
      {/* 프로그램 헤더 섹션 */}
      <section className="px-10 max-[768px]:px-0">
        <div className="relative max-w-[1920px] pt-[100px] pb-[110px] max-[768px]:pt-[50px] max-[768px]:pb-[60px] rounded-[40px_0_40px_0] overflow-hidden mx-auto flex-col flex items-center justify-center max-[768px]:rounded-none">
          {/* 배경 이미지 */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/hero.jpg')]"></div>

          {/* 콘텐츠 */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl font-bold text-white text-center">
              {t.program.title}
            </h2>

            {/* 프로그램 설명 텍스트 */}
            {/* <div className="text-white text-center">
              <p className="font-normal text-xl leading-[150%] tracking-[0%]">
                {t.program.subtitle}
              </p>
            </div> */}
          </div>
        </div>
      </section>

      <div className="py-16 px-10 max-[500px]:p-[60px_20px]">
        {/* <div className="max-w-[1360px] mx-auto min-h-[480px] [&>div]:py-[100px] max-[500px]:[&>div]:py-[70px]">
          <ComingSoon />
        </div> */}
        <div className="max-w-[1360px] mx-auto w-full border-t border-[#D4D7DD]">
          <table className="w-full">
            <colgroup>
              <col width="35%" className="max-[1280px]:hidden" />
              <col width="65%" className="max-[1280px]:hidden" />
              <col width="100%" className="hidden max-[1280px]:block" />
            </colgroup>
            <thead className="sr-only">
              <tr className="border-collapse ">
                <th>time</th>
                <th>title</th>
                <th>contents</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  time: "10:00 - 10:30",
                  title: t.program.table2.firstTitle,
                  contents: t.program.table2.firstContents,
                  label: t.program.table2.firstLabel,
                },
                {
                  time: "10:30 - 10:50",
                  title: t.program.table2.secondTitle,
                  contents: t.program.table2.secondContents,
                  label: t.program.table2.secondLabel,
                },
                {
                  time: "10:50 - 11:00",
                  title: t.program.table2.thirdTitle,
                  contents: t.program.table2.thirdContents,
                  label: t.program.table2.thirdLabel,
                },
                {
                  time: "11:00 - 11:20",
                  title: t.program.table2.fourthTitle,
                  contents: t.program.table2.fourthContents,
                  label: t.program.table2.fourthLabel,
                },
                {
                  time: "11:20 - 11:40",
                  title: t.program.table2.fifthTitle,
                  contents: t.program.table2.fifthContents,
                  label: t.program.table2.fifthLabel,
                },
                {
                  time: "11:40 - 12:00",
                  title: t.program.table2.sixthTitle,
                  contents: t.program.table2.sixthContents,
                  label: t.program.table2.sixthLabel,
                },
                {
                  time: "12:00 - 14:00",
                  title: t.program.table2.seventhTitle,
                  contents: t.program.table2.seventhContents,
                  label: t.program.table2.seventhLabel,
                },
                {
                  time: "14:00 - 15:00",
                  title: t.program.table2.eighthTitle,
                  contents: t.program.table2.eighthContents,
                  label: t.program.table2.eighthLabel,
                },
                {
                  time: "15:00 - 16:00",
                  title: t.program.table2.ninthTitle,
                  contents: t.program.table2.ninthContents,
                  label: t.program.table2.ninthLabel,
                },
              ].map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="border-collapse border-b border-[#D4D7DD] text-[#333]"
                  >
                    <td className="align-top py-10 px-5 text-[60px] font-[500] text-[#DDDDDD] font-montserrat max-[1280px]:hidden">
                      {item.time}
                    </td>
                    <td className="align-top py-[60px] max-[500px]:py-6">
                      <div className="pb-5 text-[24px] font-[500] text-[#999999] font-montserrat max-[1280px]:block hidden max-[500px]:text-[18px]">
                        {item.time}
                      </div>
                      {item.label && (
                        <div
                          dangerouslySetInnerHTML={{ __html: item.label }}
                          className="mb-2 inline-block"
                        />
                      )}
                      <div dangerouslySetInnerHTML={{ __html: item.title }} />
                      <div
                        dangerouslySetInnerHTML={{ __html: item.contents }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
