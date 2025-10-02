"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Program() {
  const { t } = useLanguage();

  const tableData = [
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
  ];

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
          </div>
        </div>
      </section>

      <div className="py-16 px-10 max-[500px]:p-[60px_20px]">
        <div className="max-w-[1000px] mx-auto w-full border-t border-[#D4D7DD]">
          <table className="w-full max-[768px]:hidden">
            <colgroup>
              <col width="20%" />
              <col width="40%" />
              <col width="45%" />
            </colgroup>
            <thead className="sr-only">
              <tr className="border-collapse ">
                <th>time</th>
                <th>title</th>
                <th>contents</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => {
                return (
                  // <tr
                  //   key={index}
                  //   className="border-collapse border-b border-[#D4D7DD] text-[#333]"
                  // >
                  //   <td className="align-top py-10 px-5 text-[20px] font-[500] !text-black font-montserrat max-[1280px]:hidden">
                  //     {item.time}
                  //   </td>
                  //   <td className="align-top py-[60px] max-[500px]:py-6">
                  //     <div className="pb-5 text-[24px] font-[500] !text-black font-montserrat max-[1280px]:block hidden max-[500px]:text-[16px] max-[500px]:pb-5">
                  //       {item.time}
                  //     </div>
                  //     {item.label && (
                  //       <div
                  //         dangerouslySetInnerHTML={{ __html: item.label }}
                  //         className="mb-2 inline-block"
                  //       />
                  //     )}
                  //     <div dangerouslySetInnerHTML={{ __html: item.title }} />
                  //     <div
                  //       dangerouslySetInnerHTML={{ __html: item.contents }}
                  //     />
                  //   </td>
                  // </tr>
                  <tr
                    key={index}
                    className="border-collapse border-b border-[#D4D7DD] text-[#333]"
                  >
                    <td className="align-top py-6 pr-5 text-[18px]">
                      {item.time}
                    </td>
                    <td className="align-top">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.title }}
                        className="py-6 pr-2 whitespace-pre-line"
                      />
                    </td>
                    <td className="align-top">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.contents }}
                        className="py-6 whitespace-pre-line"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* 768px 이하  */}
          <table className="w-full max-[768px]:block hidden">
            <tbody>
              {tableData.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="border-collapse border-b border-[#D4D7DD] text-[#333]"
                  >
                    <td className="align-top text-[18px] py-[60px] max-[500px]:py-6">
                      <p> {item.time}</p>
                      <div
                        dangerouslySetInnerHTML={{ __html: item.title }}
                        className="pt-5 whitespace-pre-line max-[500px]:pt-5"
                      />

                      <div
                        dangerouslySetInnerHTML={{ __html: item.contents }}
                        className="mt-6 whitespace-pre-line max-[500px]:mt-2"
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
