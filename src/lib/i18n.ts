export const languages = {
  ko: "한국어",
  en: "English",
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = "ko";

export const translations = {
  ko: {
    nav: {
      eventIntro: "행사소개",
      program: "프로그램",
      speakers: "연사",
      registration: "참가등록",
      eventOverview: "행사개요",
      pastEvents: "지난행사",
      directions: "오시는길",
      register: "참가등록",
      registrationConfirmation: "참가확인",
    },
    common: {
      language: "언어",
      kor: "KOR",
      eng: "ENG",
    },
    home: {
      title: "DEF 2025",
      subtitle: "Digital Economy Forum",
      date: "2025년 2월 20일(목)",
      location: "서울 코엑스",
      description: "디지털 경제의 미래를 논하는 글로벌 포럼",
      introduce: "DEF 2025 소개",
      introduceDesc: "디지털 경제 포럼의 비전과 목표를 확인하세요.",
      program: "프로그램 소개",
      programDesc: "다양한 세션과 프로그램을 미리 살펴보세요.",
      speakers: "연사 소개",
      speakersDesc: "글로벌 전문가들의 인사이트를 만나보세요.",
      registration: "참가 등록",
      registrationDesc: "지금 바로 참가 신청하세요.",
      hostedBy: "주최 및 주관",
      mediaRoom: "미디어룸",
      mediaRoomDesc: "행사 관련 미디어 자료를 확인하세요.",
    },
    eventOverview: {
      title: "행사개요",
      subtitle: "DEF 2025 행사 개요를 소개합니다.",
      aboutTitle: "DEF 2025",
      aboutDesc: `<div><div id="overview-title" class='flex items-start justify-center gap-2 mb-10 font-bold text-[28px] font-bold text-[#4AC8F4] max-[500px]:text-[18px]'><img src="/images/icons/double_quotes_blue.png" alt="" width=18 height=16 />제8회 디지털 이코노미 포럼(DEF2025)이 10월 20일에 개최됩니다.<img src="/images/icons/double_quotes_blue.png" alt="" width=18 height=16 style="transform:rotate(180deg);"/></div><br/><div class="max-w-[1200px] mx-auto">반갑습니다!<br/>기획재정부가 주최하고 산업연구원(KIET)이 주관하는<br/>‘제8회 디지털 이코노미 포럼(DEF2025)’이 오는 10월 20일, 인천 인스파이어리조트에서 개최됩니다.<br/><br/>2018년 시작된 글로벌 포럼인 DEF는 오피니언 리더들이 지식과 경험을 공유하고 디지털 경제에 대한 인식을 확대하는 플랫폼 역할을 해왔습니다.<br/>이는 DEF를 디지털 경제의 미래를 전망하는 주요 행사로 자리매김하게 했습니다.<br/><br/>최근 AI 기술의 급격한 진전은 이미 우리 삶을 다양한 방식으로 변화시키고 있습니다. <br/>AI가 우리가 일하고 살아가는 방식을 바꾸면서, 글로벌 경제를 지탱하는 산업 구조를 근본적으로 변화시키고 있습니다. <br/>이러한 기술의 발전은 새로운 기회를 창출하는 동시에 앞으로 우리가 직면하게 될 도전 과제들을 제시하고 있습니다.<br/><br/>2025년 DEF는 APEC 회의의 부대 행사로 열리며, <span class="text-[20px] font-[700] text-[#4AC8F4]">‘인공지능 시대, 디지털 경제의 미래와 글로벌 협력’</span>라는 주제로 진행됩니다. <br/>이번 포럼은 AI 기술이 가져올 경제 및 사회적 변화와 디지털 전환의 진화에 대해 깊이 있는 탐구를 제공할 것입니다.<br/>이를 위해 해외 저명 인사들의 기조연설과 국내외 전문가들이 참여하는 패널 토론이 이어질 예정입니다. <br/>특히, 네이버·카카오 등 국내 AI 선도기업들의 AI 서비스 피칭을 통해 우리 삶에 적용된 AI 기술과 글로벌 협력 전략에 대한 인사이트를 공유할 것입니다.<br/><br/>이번 포럼이 여러분들에게 AI와 디지털 경제가 특히 우리 산업 전반에 미치는 영향에 대해<br/>폭넓은 이해와 그 본질을 파악할 수 있는 의미 있는 시간이 될 수 있기를 바랍니다.<br/><br/><p class="text-[20px] max-[500px]:text-right"><span class="font-bold">권남훈</span> 산업연구원 원장</p></div></div>`,
      visionTitle: "비전",
      visionDesc:
        "디지털 경제의 지속가능한 발전을 위한 정책과 전략을 모색합니다.",
      dateTitle: "일시",
      dateDesc: "2025년 2월 20일(목) 09:00 - 18:00",
      venueTitle: "장소",
      venueDesc: "서울 코엑스 컨벤션센터",
      participantsTitle: "참가대상",
      participantsDesc: "정부 관계자, 기업 임원, 학계 전문가, 연구원 등",
      table: {
        title: "행사명",
        topic: "주제",
        period: "일시",
        venue: "장소",
        hostedBy: "주최",
        organizedBy: "주관",
        titleContent: "제8회 디지털 이코노미 포럼",
        topicContent: '"인공지능(AI) 시대의 글로벌 협력과 디지털 경제의 미래"',
        periodContent: "2025년 10월 20일 월요일",
        venueContent: "인스파이어 엔터테인먼트 리조트",
        hostedByContent: "기획재정부",
        organizedByContent: "kiet 산업연구원",
        hostedByImage: "/images/moef_go_kr_transparent.png",
        organizedByImage: "/images/kiet_re_kr_transparent.png",
      },
    },
    pastEvents: {
      title: "지난행사",
      subtitle: "DEF의 지난 행사들을 소개합니다.",
      watchVideo: "포럼 동영상 보기",
      contentPreparation:
        "콘텐츠 <span class='font-bold text-[#055DA5]'>준비중</span>입니다.",
      contentPreparationDesc:
        "보다 나은 서비스를 제공하기 위해 콘텐츠 준비중에 있습니다.\n빠른 시일 내에 준비하여 찾아뵙겠습니다.",
      def2024: "DEF 2024 디지털 경제 포럼",
      def2024Desc: "2024년 디지털 경제의 새로운 패러다임을 제시한 포럼",
      def2023: "DEF 2023 디지털 경제 포럼",
      def2023Desc: "2023년 디지털 전환과 경제 성장을 논의한 포럼",
      def2022: "DEF 2022 디지털 경제 포럼",
      def2022Desc: "2022년 포스트 코로나 시대의 디지털 경제를 다룬 포럼",
      def2021: "DEF 2021 디지털 경제 포럼",
      def2021Desc: "2021년 디지털 뉴딜과 경제 혁신을 주제로 한 포럼",
      def2020: "DEF 2020 디지털 경제 포럼",
      def2020Desc: "2020년 디지털 경제의 기반을 다진 첫 번째 포럼",
      def2019: "DEF 2019 디지털 경제 포럼",
      def2019Desc: "2019년 4차 산업혁명과 디지털 경제를 논의한 포럼",
      def2018: "DEF 2018 디지털 경제 포럼",
      def2018Desc: "2018년 디지털 혁신과 경제 발전을 다룬 포럼",
      def2018ForumTitle: "혁신의 원동력 : 플랫폼 경제와 창업가 정신",
      def2018ForumDate: "2018. 11. 22-23. 서울 여의도 콘래드호텔",
      def2018ForumDesc: `<p>DEF의 첫 발을 내딛은 DEF2018은,<br/><br/>정부와 민간이 협력하여, 혁신성장을 위한 디지털경제의 원동력을 조망하는 자리로 특히 혁신의 원동력인 플랫폼경제와 창업가정신을 집중적으로 조명하였습니다.<br/><br/>DEF 2018은 ‘플랫폼레볼루션’의 저자 제프리 파커와 대한민국 대표 플랫폼 ‘네이버’의 한성숙 대표, 그리고 프랑스 IT혁신 학교 ‘에꼴42’의 소피 비제르 디렉터의 기조연설을 시작으로 플랫폼 비즈니스 전망과 혁신 성장 사례를 공유하는 세션으로 구성되었습니다.</p>`,
      def2019ForumTitle: "디지털 경제 시대의 유니콘 스타트업과 혁신 성장",
      def2019ForumDate: "2019. 11. 21-22. 서울 용산 드래곤시티호텔",
      def2019ForumDesc: `<p>유니콘 스타트업 육성전략과 혁신 생태계에 대해 논의한 DEF2019는,<br/><br/>실리콘밸리 글로벌 벤처캐피털인 ‘500 Startups’ CEO 크리스틴 차이와 유럽 혁신생태계 전문가 빈디 카리아의 기조연설을 시작으로 국내·외 유니콘 스타트업 대표들의 발표와 토론으로 구성되었습니다.<br/><br/>특히, 특별세션으로 구성된 ‘한-아세안 특별세션’은, 넥스티콘, 고젝, 부카라팍 등 아세안 대표 유니콘 스타트업 대표들과 인사이트를 공유한 자리였습니다.</p>`,
      def2020ForumTitle:
        "포스트 코로나 시대의 디지털 경제 : 진정한 혁신을 이끌 디지털 전환으로",
      def2020ForumDate: "2020. 9. 11. 온·오프라인 포럼",
      def2020ForumDesc: `<p>유례없는 코로나 19 펜데믹 상황에서, 삶의 형태와 기술 그리고 융합을 중심으로 다양한 시도와 실험을 통해 혁신을 가속화하는 디지털 경제를 집중적으로 논의했습니다.<br/><br/>DEF2020은 글로벌 디지털 경제의 씽크탱크인 싱귤래리티 대학교 (Singularity University)의 창립자인 Peter Diamandis를 비롯해 The Miilk, Aaltoes, ITU, WHO 등 국내외 다양한 혁신 주체들과 Policy & Digital Transformation, Entertainment & New media, Work & Job, Healthcare 등 크게 네 개의 분야를 중심으로 변화와 전망을 살펴 ‘디지털 경제의 미래’에 대한 깊이 있는 담론을 나누는 자리로 구성되었습니다.</p>`,
      def2021ForumTitle: "코로나 시대를 넘어, 다가올 거대한 변화들",
      def2021ForumDate: "2021. 8. 5. 온라인 포럼",
      def2021ForumDesc: `<p>DEF2021는 코로나 대유행으로부터 시작된 디지털 전환으로 인한 기술적, 사회적 변화를 흐름을 확인하고, 미래 세대를 위한 정책과 제도를 논의하였습니다.<br/><br/>DEF2021은 글로벌 디지털 경제 및 분석의 권위자인 Sinan Aral MIT디지털경제연구소장과 데이터 과학자이자 뉴욕타임즈 베스트셀러 ‘Weapons of Math Destruction(대량살상 수학무기)’의 저자 Cathy Helen O’Neil을 비롯해 Adobe, TikTok, 우아한형제들, 비바리퍼블리카 등 국내외 다양한 연사들을 모시고, ‘Metaverse, Digital HealthCare, Data Governance and Policy, Future Talents’를 중심으로 심도 있는 담론을 나눈 자리였습니다.</p>`,
      def2022ForumTitle: "역동적·혁신적 디지털 경제 실현 방안",
      def2022ForumDate: "2022. 9. 22. 온·오프라인 포럼",
      def2022ForumDesc: `<p>DDEF2022은 디지털 대전환의 변화를 살펴보고, 디지털 경제 사회의 지속가능성과 경쟁력 확보를 위한 정책과 제도를 논의하였습니다.<br/><br/>포브스 기술분야 가장 영향력 있는 여성50인에 선정된 I.N. Capital 창립 파트너 Jennifer Zhu Scott과 ‘‘The Five Forces That Change Everything: How Technology Is Shaping Our Future(파이브 포스: 인류의 미래를 바꿀 다섯 가지 핵심 기술)’의 저자이자 세계적인 스타트업 액셀러레이터 Founders Space의 창업자인 Steven S.Hoffman의 기조연설을 포함하여 Uber, 우아한형제들 등 국내외 산업계 전문가 및 영국, 에스토니아 등 다양한 해외 디지털 경제 연사들을 모시고, ‘규제혁신, 디지털 플랫폼 정부, 디지털 격차 해소, 스타트업 투자’를 주제로 심도있는 담론을 나누었습니다.</p>`,
      def2023ForumTitle: "성장잠재력 확충을 위한 진정한 혁신",
      def2023ForumDate: "2023. 09. 06. 온·오프라인 포럼",
      def2023ForumDesc: `<p>DEF2023의 주제는 '성장 잠재력 확충을 위한 진정한 혁신'입니다. 디지털 경제 기반의 국가 전 략 산업을 살피고, 성공적인 디지털 경제 사회 구현을 위한 정책과 사회 제도를 논의하였습니 다. 이를 통해 디지털 경제가 사회 전반에 미치는 영향을 분석하고 '초일류 국가'로 나아가는 데 필요한 과제와 해법을 모색하였습니다.<br/>
      기조연설자로는 미래학자 리차드 용크(Richard Yonck)와 AI 스타트업 업스테이지의 이환석 CTO가 참여했으며, 이후 기술 및 정책 분야 전문가들의 주제 세션이 이어졌습니다. 기조연설에 서는 혁신성장을 위한 최신 기술 트렌드와 이 기술이 전 세계 디지털 경제에 미칠 영향, 우리가 준비해야 할 미래에 대한 심도 있는 발표가 있었습니다. 이어진 세션에서는 기술과 정책 트랙을 중심으로, Al•디지털 헬스케어•첨단기술 등 기술 발전 방향과 초일류국가 도약 전략, 스타트업 생태계 활성화 방안 등에 대한 토론을 진행하였습니다.</p>`,
      def2024ForumTitle: "AI와 디지털 경제의 진화",
      def2024ForumDate: "2024. 11. 06. 온·오프라인 포럼",
      def2024ForumDesc: `<p>AI 기술의 발전과 디지털 전환에 대해 깊이 있게 전망해 보고, 이 기술이 창출하는 새로운 기회와 우리가 직면하게 될 도전 과제를 논의하였습니다.<br/><br/>해외의 AI 분야 유명 전문가 2인, 구글 클라우드 APJ AI Director인 Craig Stires와 싱가포르 국립대학교 교수인 Ben Leong의 기조연설과 함께 산학연, 그리고 정책담당자 등 국내 전문가 16인의 패널 토의가 이어질 것입니다. 기조연설에서는 두 가지 이슈, "AI의 기술적 진화와 미래", "AI 부상에 따른 사회경제적 영향과 해결해야 할 과제"에 대한 발표가 있었습니다. 그리고 패널 토의에서는 기술과 미래, 산업정책, 혁신과 규제, 일자리를 논의 이슈로 설정하고, 우리의 현실과 잠재력을 고려, ‘디지털 경제 선도 국가’로 나아가기 위한 과제와 정책 방안을 모색하였습니다.</p>`,
    },
    location: {
      title: "오시는길",
      subtitle: "행사 장소와 교통편을 안내합니다.",
      venue: "서울 코엑스",
      address: "서울특별시 강남구 영동대로 513",
      subway: "지하철",
      subwayDesc: "2호선 삼성역 5,6번 출구 도보 3분",
      bus: "버스",
      busDesc: "강남 순환버스, 시내버스 다수 노선",
      parking: "주차",
      parkingDesc: "코엑스 지하주차장 이용 가능",
      eventAddress: "인천광역시 중구 공항문화로 127",
    },
    program: {
      title: "프로그램",
      subtitle: "DEF 2025 프로그램을 소개합니다.",
      comingSoon: "프로그램 정보가 곧 공개됩니다.",
      table: {
        firstTitle: "<strong class='text-[20px]'>개회사 및 환영사</strong>",
        firstContents:
          "<div class='space-y-5'><div><span class='text-[#055DA5] font-semibold'>개회사</span><p><strong>이형일</strong> 기획재정부 1차관</p></div><div><span class='text-[#055DA5] font-semibold'>환영사</span><p><strong>권남훈</strong> 산업연구원장</p></div></div>",
        secondTitle: "<strong class='text-[20px]'>단체 사진촬영</strong>",
        secondContents: "",
        thirdTitle:
          "<strong class='text-[20px]'>기조연설 1</strong><p>AI와 미래의 설계</p>",
        thirdContents:
          "<div class='space-y-5'><div><span class='text-[#055DA5] font-semibold'>좌장</span><p><strong>신관호</strong> 고려대학교 교수</p></div><div><span class='text-[#055DA5] font-semibold'>발표</span><p><strong>Anton Korinek</strong> 버지니아 대학교 교수 (온라인발표)</p></div></div>",
        fourthTitle:
          "<strong class='text-[20px]'>기조연설 2-1</strong><p>인공지능과 우리 삶(1)</p>",
        fourthContents:
          "<div><span class='text-[#055DA5] font-semibold'>발표</span><p><strong>성낙호</strong> 네이버 클라우드 전무</p></div>",
        fifthTitle:
          "<strong class='text-[20px]'>기조연설 2-2</strong><p>인공지능과 우리 삶(2)</p>",
        fifthContents:
          "<div><span class='text-[#055DA5] font-semibold'>발표</span><p><strong>유용하</strong> 카카오 AI에이전트 플랫폼 부사장</p></div>",
        sixthTitle: "<strong class='text-[20px]'>공식오찬</strong>",
        sixthContents: "<p>오찬 및 네트워킹</p>",
        seventhTitle:
          "<strong class='text-[20px]'>패널토의 1</strong><p>AI와 산업의 미래</p>",
        seventhContents:
          "<div class='space-y-5'><div><span class='text-[#055DA5] font-semibold'>좌장</span><p><strong>조재한</strong> 산업연구원 산업정채기획실장</p></div><div><span class='text-[#055DA5] font-semibold'>발제</span><p><strong>Jerrard Sheehan</strong> Director of Science, Technology and Innovation, OECD</p></div><div><span class='text-[#055DA5] font-semibold'>패널</span><p><strong></strong></p></div></div>",
        eighthTitle:
          "<strong class='text-[20px]'>패널토의 2</strong><p>AI 스타트업 해외진출 및 협력사례</p>",
        eighthContents:
          "<div class='space-y-5'><div><span class='text-[#055DA5] font-semibold'>좌장</span></div><div><span class='text-[#055DA5] font-semibold'>발제</span></div><div><span class='text-[#055DA5] font-semibold'>패널</span></div></div>",
      },
      table2: {
        firstTitle:
          "<strong class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>등록 및 환영</strong>",
        firstContents:
          "<p class='text-[#666666] mt-2 text-[18px] max-[500px]:text-[16px]'>참가자 등록</p>",
        firstLabel:
          "<p class='text-[14px] font-bold text-[#333333] bg-[#91D3FF] px-4 py-2 max-[500px]:text-[12px] max-[500px]:px-2 max-[500px]:py-[6px]'>REGISTRATION</p>",
        secondTitle:
          "<strong class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>개회사 및 환영사</strong>",
        secondContents:
          "<div class='bg-[#F4F7F9] px-6 py-[22px] space-y-3 text-[#666666] max-[500px]:p-4 rounded-[8px]'><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>개회사</span><strong class='mx-3 max-[500px]:ml-0'>이형일</strong> 기획재정부 1차관</div><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>환영사</span><strong class='mx-3 max-[500px]:ml-0'></strong></div></div>",
        secondLabel:
          "<p class='text-[14px] font-bold text-[#333333] bg-[#91D3FF] px-4 py-2 max-[500px]:text-[12px] max-[500px]:px-2 max-[500px]:py-[6px]'>OPENING & WELCOMING REMARKS</p>",
        thirdTitle:
          "<strong class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>단체 사진촬영</strong>",
        thirdContents: "",
        thirdLabel:
          "<p class='text-[14px] font-bold text-[#333333] bg-[#DDDDDD] px-4 py-2 max-[500px]:text-[12px] max-[500px]:px-2 max-[500px]:py-[6px]'>GROUP PHOTO</p>",
        fourthTitle:
          "<strong class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>기조연설 1 : AI와 미래의 설계</strong>",
        fourthContents:
          "<div class='bg-[#F4F7F9] px-6 py-[22px] space-y-3 text-[#666666] max-[500px]:p-4 rounded-[8px]'><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>좌장</span><strong class='mx-3 max-[500px]:ml-0'>신관호</strong> 고려대학교 교수</div><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>발표</span><strong class='mx-3 max-[500px]:ml-0'>Anton Korinek</strong> 버지니아 대학교 교수 (온라인발표)</div></div>",
        fourthLabel:
          "<p class='text-[14px] font-bold text-[#333333] bg-[#F5C7FF] px-4 py-2 max-[500px]:text-[12px] max-[500px]:px-2 max-[500px]:py-[6px]'>KEYNOTE SPEECH 1</p>",
        fifthTitle:
          "<strong class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>기조연설 2-1 : 인공지능과 우리 삶(1)</strong>",
        fifthContents:
          "<div class='bg-[#F4F7F9] px-6 py-[22px] space-y-3 text-[#666666] max-[500px]:p-4 rounded-[8px]'><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>발표</span><strong class='mx-3 max-[500px]:ml-0'>성낙호</strong> 네이버 클라우드 전무</div></div>",
        fifthLabel:
          "<p class='text-[14px] font-bold text-[#333333] bg-[#F5C7FF] px-4 py-2 max-[500px]:text-[12px] max-[500px]:px-2 max-[500px]:py-[6px]'>KEYNOTE SPEECH 2-1</p>",
        sixthTitle:
          "<strong class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>기조연설 2-2 : 인공지능과 우리 삶(2)</strong>",
        sixthContents:
          "<div class='bg-[#F4F7F9] px-6 py-[22px] space-y-3 text-[#666666] max-[500px]:p-4 rounded-[8px]'><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>발표</span><strong class='mx-3 max-[500px]:ml-0'>유용하</strong> (주)카카오 AI 에이전트 플랫폼 총괄리더</div></div>",
        sixthLabel:
          "<p class='text-[14px] font-bold text-[#333333] bg-[#F5C7FF] px-4 py-2 max-[500px]:text-[12px] max-[500px]:px-2 max-[500px]:py-[6px]'>KEYNOTE SPEECH 2-2</p>",
        seventhTitle:
          "<strong class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>공식오찬</strong>",
        seventhContents:
          "<p class='text-[#666666] mt-2 text-[18px] max-[500px]:text-[14px]'>오찬 및 네트워킹</p>",
        seventhLabel:
          "<p class='text-[14px] font-bold text-[#333333] bg-[#DDDDDD] px-4 py-2 max-[500px]:text-[12px] max-[500px]:px-2 max-[500px]:py-[6px]'>LUNCHEON</p>",
        eighthTitle:
          "<strong class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>패널토의 1 : AI와 산업의 미래</strong>",
        eighthContents:
          "<div class='bg-[#F4F7F9] px-6 py-[22px] space-y-3 text-[#666666] max-[500px]:p-4 rounded-[8px]'><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>좌장</span><strong class='mx-3 max-[500px]:ml-0'>송경호</strong> 인공지능안전연구소 선임연구원</div><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>발제</span><strong class='mx-3 max-[500px]:ml-0'>Jerrard Sheehan</strong> Director of Science, Technology and Innovation, OECD</div><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>패널</span><strong class='mx-3 max-[500px]:ml-0'>이현진</strong> 대외경제정책연구원 부연구위원</div></div>",
        eighthLabel:
          "<p class='text-[14px] font-bold text-[#333333] bg-[#66F35C] px-4 py-2 max-[500px]:text-[12px] max-[500px]:px-2 max-[500px]:py-[6px]'>PANEL DISCUSSION SESSION 1</p>",
        ninthTitle:
          "<strong class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>패널토의 2 : AI 스타트업 해외진출 및 협력사례</strong>",
        ninthContents:
          "<div class='bg-[#F4F7F9] px-6 py-[22px] space-y-3 text-[#666666] max-[500px]:p-4 rounded-[8px]'><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>좌장</span></div><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>발제</span></div><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>패널</span></div></div>",
        ninthLabel:
          "<p class='text-[14px] font-bold text-[#333333] bg-[#66F35C] px-4 py-2'>PANEL DISCUSSION SESSION 2</p>",
      },
    },
    speakers: {
      title: "연사",
      subtitle: "DEF 2025 연사들을 소개합니다.",
      comingSoon: "연사 정보\n준비중",
      moderators: {
        antonKorinek: {
          name: "Anton Korinek",
          position: `버지니아 대학교 교수`,
          session: "기조연설 1",
          sessionDesc: `발표 (온라인 발표)`,
        },
        sungNakHo: {
          name: "성낙호",
          position: `네이버 클라우드\n 전무`,
          session: "기조연설 2-1",
          sessionDesc: "발표",
        },
        yooYongHa: {
          name: "유용하",
          position: `(주)카카오\n AI 에이전트 플랫폼 총괄리더`,
          session: "기조연설 2-2",
          sessionDesc: "발표",
        },
      },
      panelists1: {
        songKyungHo: {
          name: "송경호",
          position: `인공지능안전연구소\n 선임연구원`,
          session: "패널토의 세션1",
          sessionDesc: "좌장",
        },
        jerrySheehan: {
          name: "Jerrard Sheehan",
          position: `OECD\n Director, Science,Technology and Innovation directorate`,
          session: "패널토의 세션1",
          sessionDesc: "발제",
        },
        leeHyunJin: {
          name: "이현진",
          position: `대외경제정책연구원 \n부연구위원`,
          session: "패널토의 세션1",
          sessionDesc: "패널",
        },
      },
    },
    footer: {
      ministry: "기획재정부",
      ministryEn: "Ministry of Economy and Finance",
      privacyPolicy: "개인정보처리방침",
      office: "Office.",
      secretariat: "DEF2025 사무국",
      tel: "Tel.",
      phone: "+82-10-5829-1101",
      mail: "Mail.",
      email: "info.def2025@gmail.com",
      copyright: "COPYRIGHT © DEF2025, INC. ALL RIGHTS RESERVED.",
    },
  },
  en: {
    nav: {
      eventIntro: "Conference",
      program: "Program",
      speakers: "Speaker",
      registration: "Registration",
      eventOverview: "Overview",
      pastEvents: "Past Conference",
      directions: "Location",
      register: "Registration",
      registrationConfirmation: "Confirmation of registration",
    },
    common: {
      language: "Language",
      kor: "KOR",
      eng: "ENG",
    },
    home: {
      title: "DEF 2025",
      subtitle: "Digital Economy Forum",
      date: "February 20, 2025 (Thu)",
      location: "COEX Seoul",
      description: "A global forum discussing the future of digital economy",
      introduce: "DEF2025 Conference",
      introduceDesc:
        "Discover the vision and goals of the Digital Economy Forum.",
      program: "Program",
      programDesc: "Explore various sessions and programs in advance.",
      speakers: "Speaker",
      speakersDesc: "Meet insights from global experts.",
      registration: "Registration",
      registrationDesc: "Register for participation now.",
      hostedBy: "Hosted & Organized by",
      mediaRoom: "Media Room",
      mediaRoomDesc: "Check out event-related media materials.",
    },
    eventOverview: {
      title: "Overview",
      subtitle: "Introducing the overview of DEF 2025.",
      aboutTitle: "DEF 2025",
      aboutDesc: `<div><div><div id="overview-title" class='grid grid-cols-[18px_auto_18px] items-start justify-center gap-2 mb-10 font-bold text-[28px] font-bold text-[#4AC8F4] max-[500px]:text-[18px]'><img src="/images/icons/double_quotes_blue.png" alt="" width=18 height=16 /><h3>DEF2025 : The Future of Digital Economy and Global Cooperation in the Age of AI.</h3><img src="/images/icons/double_quotes_blue.png" alt="" width=18 height=16 style="transform:rotate(180deg);"/></div></div><br/><div class="max-w-[1200px] mx-auto">Welcome!<br/>The 8th Digital Economy Forum (DEF2025), hosted by the Ministry of Strategy and Finance and organized by the Korea Institute for Industrial Economics and Trade (KIET), will be held on October 20, 2025, at Inspire Resort, Incheon.<br/><br/>Since its launch in 2018, the global Digital Economy Forum (DEF) has served as a platform for opinion leaders to share knowledge and experience and expand awareness of the digital economy. <br/>This has made DEF a major venue for forecasting the trajectory of the digital economy.<br/><br/>Artificial intelligence has already transformed our lives in myriad ways. As AI changes the way we work and live, <br/>it is also fundamentally altering the industrial structures that underpin global economies. <br/>These rapid advances in technology are creating new opportunities while also presenting the challenges we will face in the future.<br/><br/>The 8th Digital Economy Forum (DEF 2025) will be held <br/> as a host economy’s event of the 2025 APEC meetings under the theme of <p class="text-[20px] text-[#4AC8F4] font-[700]">The Age of Artificial Intelligence: The Future of the Digital Economy and Global Cooperation</p><br/>This year’s forum will provide an in-depth examination of the economic and social changes brought about by AI and the evolution of digital transformation.<br/>Renowned experts from both Korea and abroad will deliver keynote speeches and participate in panel discussions. <br/>In particular, leading Korean AI companies such as Naver and Kakao will present their AI services, offering insights into how AI is being applied to our daily lives and sharing strategies for global cooperation.<br/><br/>We invite you to join us at DEF2025 for a thought-provoking and informative event. <br/>DEF2025 is poised to offer all participants a deeper understanding of AI and the digital economy.<br/><br/><P class="text-[20px] max-[500px]:text-right"><p class="font-bold">Namhoon KWON</p> President, Korea Institute for Industrial Economics and Trade</p></div></div>`,
      visionTitle: "Vision",
      visionDesc:
        "Exploring policies and strategies for sustainable development of the digital economy.",
      dateTitle: "Date & Time",
      dateDesc: "February 20, 2025 (Thu) 09:00 - 18:00",
      venueTitle: "Venue",
      venueDesc: "COEX Convention Center, Seoul",
      participantsTitle: "Target Participants",
      participantsDesc:
        "Government officials, corporate executives, academic experts, researchers, etc.",
      table: {
        title: "Title",
        topic: "Topic",
        period: "Period",
        venue: "Venue",
        hostedBy: "Hosted By",
        organizedBy: "Organized by",
        titleContent: "8th DIGITAL ECONOMY FORUM",
        topicContent:
          '"The Future of Digital Economy and Global Cooperation in the Age of AI"',
        periodContent: "20th October 2025",
        venueContent: "INSPIRE Entertainment Resort",
        hostedByContent: "Ministry of Economy and Finance",
        organizedByContent:
          "Kiet - Korea Institute for Industrial Economics and Trade",
        hostedByImage: "/images/moef_go_kr_en_transparent.png",
        organizedByImage: "/images/kiet_re_kr_en_transparent.png",
      },
    },
    pastEvents: {
      title: "Past Conference",
      subtitle: "Introducing DEF's past events.",
      watchVideo: "FORUM VIDEO",
      contentPreparation:
        "The content is in <span class='font-bold text-[#055DA5]'>progress.</span>",
      contentPreparationDesc:
        "We are preparing content to provide better service.\nWe will be back with you soon.",
      def2024: "DEF 2024 Digital Economy Forum",
      def2024Desc:
        "Forum that presented new paradigms of digital economy in 2024",
      def2023: "DEF 2023 Digital Economy Forum",
      def2023Desc:
        "Forum that discussed digital transformation and economic growth in 2023",
      def2022: "DEF 2022 Digital Economy Forum",
      def2022Desc:
        "Forum that addressed digital economy in the post-COVID era in 2022",
      def2021: "DEF 2021 Digital Economy Forum",
      def2021Desc:
        "Forum themed on Digital New Deal and economic innovation in 2021",
      def2020: "DEF 2020 Digital Economy Forum",
      def2020Desc:
        "The first forum that laid the foundation for digital economy in 2020",
      def2019: "DEF 2019 Digital Economy Forum",
      def2019Desc:
        "Forum that discussed the 4th Industrial Revolution and digital economy in 2019",
      def2018: "DEF 2018 Digital Economy Forum",
      def2018Desc:
        "Forum that addressed digital innovation and economic development in 2018",
      def2018ForumTitle:
        "The Driving Force of Innovation : Platform Economy & Entrepreneurship",
      def2018ForumDate: "November 22-23, 2018 Seoul Conrad Hotel",
      def2018ForumDesc: `<p>DEF2018 was the very first step of DEF.<br/><br/>It brought the public and private sectors together to discuss the driving force of the digital economy for innovative growth, with a particular focus on platform economy and entrepreneurship.<br/><br/>At DEF2018, the keynote speeches were made by Geoffrey Parker, the author of Platform Revolution, Han Seong-sook, the CEO of Korea’s top online platform Naver, and Sophie Viger, Managing Director of École 42, a French computer programming school leading IT innovation. The following sessions offered a venue to share the prospects of platform business and the success cases of innovative growth.</p>`,
      def2019ForumTitle:
        "Unicorn Startup and Innovation in The Digital Economy Era",
      def2019ForumDate: "November 21-22, 2019 Seoul Dragon City Hotel",
      def2019ForumDesc: `<p>DEF2019 discussed how to foster unicorn startups and innovation ecosystem.<br/><br/>Opened with the keynote speeches by Christine Tsai, the CEO of a Silicon Valley-based global venture capital called 500 Startups, and by Bindi Karia, an innovation expert in the European ecosystem, the forum was followed by presentations and discussions by representatives of unicorn startups from around the world.<br/><br/>Also, “Korea-ASEAN Special Session” gathered the leaders of unicorn startups representing the ASEAN to share their insights, such as Nexticorn, Gojek, and Bukalapak.</p>`,
      def2020ForumTitle:
        "Post-Corona Digital Economy : Accelerating Digital Transformation for Genuine Innovation",
      def2020ForumDate: "September 11, 2020 Online Forum",
      def2020ForumDesc: `<p>We will focus our discussion on the digital economy that is accelerating innovation through various attempts and experiments centered around our way of live, technology, and convergence under unprecedented COVID-19 pandemic circumstances.<br/><br/>DEF2020 invites Peter Diamandis, Founder of global thinktank on digital economy, Singularity University, as well as various organizations leading innovation including The Miilk, Aaltoes, ITU, and WHO. We will explore the changes and outlook on four key areas, Policy & Digital Transformation, Entertainment & New Media, Work & Job, and Healthcare, to share in-depth discussions on ‘the future of digital economy.’</p>`,
      def2021ForumTitle: "The Next Big Things, Beyond the Pandemic",
      def2021ForumDate: "August 25, 2021 Online Forum",
      def2021ForumDesc: `<p>The accelerated digital transformation and the growth of digital capabilities triggered by COVID-19 pandemic suggest a new standard for the global economy. What are the changes in technology and society we face and what policies or institutions must we build for future generation?<br/><br/>In this year’s forum, we will explore changes in the post-COVID-19 era and a peek behind the curtain of data ethics and security with keynote speakers - global authority on digital economy and analytics, Director of the MIT Initiative on the Digital Economy(IDE) Sinan Aral, and data scientist and author of the New York Times Best Seller, Weapons of Math Destruction, Cathy Helen O'Neil. In subsequent four sessions, we will discuss the changes in digital economy and its influence on society with a focus on ‘Metaverse, Digital HealthCare, Data Governance and Policy, and Future Talents’ to shape ‘the future of digital economy.’</p>`,
      def2022ForumTitle: "Toward Dynamic and Innovative Digital Economy",
      def2022ForumDate: "September 22, 2022 Online & Offline Forum",
      def2022ForumDesc: `<p>DEF2022 focused the discussions on the changes by digital transformation and discussed policies and systems for the sustainable and competitive digital economy.<br/><br/>DEF2022 featured Jeniffer Zhu Scott, Forbes' Top 50 Women in Tech(2018) and Founding Partner of I.N. Capital, and Steven S. Hoffman, Founder of Founders Space and Author of "The Five Forces That Change Everything: How Technology Is Shaping Our Future," as keynote speakers. Digital Economy Representatives from around the world engaged in panel discussions on topics of Regulatory Innovation, Digital Platform Government, Digital Inclusion, and Startup Investment.</p>`,
      def2023ForumTitle: "Genuine Innovations for Boosting Growth Potential",
      def2023ForumDate: "September 6, 2023 Online & Offline Forum",
      def2023ForumDesc: `<p>The theme of the 2023 iteration of DEF was Genuine Innovation for Growth. DEF 2023 played host to insightful discussions on the role played by the digital economy in national strategic industries and on the kinds of policies needed to transform social systems and successfully realize a digital economic society. Participants debated the overall social impact of the digital economy, explored key challenges, and identified some solutions to those challenges that would help make Korea a digital leader.<br/>
      The event's two keynotes were delivered by Richard Yonck, a futurist author, and Hwalsuk Lee, the CTO of the artificial intelligence (AD) startup Upstage. Panel discussions staffed by technology and policy experts followed the keynote remarks.<br/>
      The two speeches presented unique perspectives on the latest technological trends, innovative growth, the impact of these technologies on the global digital economy, and the future we must prepare for.<br/>
      Subsequent sessions on technology and policy featured discussions on the development of AI, digital healthcare, and other advanced technologies. Experts also explored policy strategies for vitalizing the startup ecosystem in Korea and elevating the country to a top-tier global startup hub.</p>`,
      def2024ForumTitle: "AI and the Evolution of the Digital Economy",
      def2024ForumDate: "November 6, 2024  Online & Offline Forum",
      def2024ForumDesc: `<p>The event featured in-depth discussions on the future of AI development and the digital transition, and on the various challenges and opportunities that accompany these two major phenomena.<br/><br/>The event’s two keynotes were delivered by Craig Stires, Regional Director of Artificial Intelligence for Google Cloud APJ, and Ben Leong, an Associate Professor of Computer Science at the National University of Singapore, both major figures in the field of AI. The speakers gave remarks on the technological evolution of AI as well as its socioeconomic implications. <br/>DEF 2024 also featured lively panel discussions staffed by 16 experts from across industrial, academic, and policy circles. Dialogues focused on crucial topics such as technology and the future, industrial policies, innovation, regulation, and employment. <br/>Forum participants also explored policy strategies designed to help South Korea become a leading digital economy by leveraging its potential and addressing current realities.</p>
`,
    },
    location: {
      title: "Location",
      subtitle: "Guide to event venue and transportation.",
      venue: "COEX Seoul",
      address: "513 Yeongdong-daero, Gangnam-gu, Seoul",
      subway: "Subway",
      subwayDesc: "Line 2 Samseong Station Exit 5,6 - 3 minutes walk",
      bus: "Bus",
      busDesc: "Gangnam circulation bus, multiple city bus routes",
      parking: "Parking",
      parkingDesc: "COEX underground parking available",
      eventAddress:
        "127, Gonghangmunhwa-ro, Jung-gu, INCHEON, REPUBLIC OF KOREA 22382",
    },
    program: {
      title: "Program",
      subtitle: "Introducing DEF 2025 program.",
      comingSoon: "Program information will be announced soon.",
      table: {
        firstTitle:
          "<strong class='text-[20px]'>Opening Remark\n Welcoming Remark</strong>",
        firstContents:
          "<div class='space-y-5'><div><span class='text-[#055DA5] font-semibold'>Opening Remark</span><p><strong>Hyoung Il Lee</strong> 1st Vice Minister, Ministry of Economy and Finance</p></div><div><span class='text-[#055DA5] font-semibold'>Welcoming Remark</span><p><strong>Namhoon Kwon</strong> President, Korea Institute for Industrial Economics and Trade</p></div></div>",
        secondTitle: "<strong class='text-[20px]'>Group Photo</strong>",
        secondContents: "",
        thirdTitle:
          "<strong class='text-[20px]'>Keynote Speech 1</strong><p>Designing the Future with AI</p>",
        thirdContents:
          "<div class='space-y-5'><div><span class='text-[#055DA5] font-semibold'>Moderator</span><p><strong>Kwan Ho Shin</strong> Professor, Korea University</p></div><div><span class='text-[#055DA5] font-semibold'>Keynote Speaker</span><p><strong>Anton Korinek</strong> Professor, University of Virginia (Online Presentation)</p></div></div>",
        fourthTitle:
          "<strong class='text-[20px]'>Keynote Speech 2-1</strong><p>AI and Our Daily Lives(1)</p>",
        fourthContents:
          "<div><span class='text-[#055DA5] font-semibold'>Keynote Speaker</span><p><strong>Nakho Sung</strong> Director, Naver Cloud</p></div>",
        fifthTitle:
          "<strong class='text-[20px]'>Keynote Speech 2-2</strong><p>AI and Our Daily Lives(2)</p>",
        fifthContents:
          "<div><span class='text-[#055DA5] font-semibold'>Keynote Speaker</span><p><strong>Yoo Yongha</strong> Vice President, Kakao AI Agent Platform Performance</p></div>",
        sixthTitle: "<strong class='text-[20px]'>Luncheon</strong>",
        sixthContents: "<p>Luncheon & Networking</p>",
        seventhTitle:
          "<strong class='text-[20px]'>Panel Discussion 1</strong><p>AI and the Future of Industry</p>",
        seventhContents:
          "<div class='space-y-5'><div><span class='text-[#055DA5] font-semibold'>Moderator</span></div><div><span class='text-[#055DA5] font-semibold'>Panelist</span><p><strong>Jerrard Sheehan</strong> OECD</p></div></div>",
        eighthTitle:
          "<strong class='text-[20px]'>Panel Discussion 2</strong><p>Global Expansion and Collaboration of AI Startups</p>",
        eighthContents:
          "<div class='space-y-5'><div><span class='text-[#055DA5] font-semibold'>Moderator</span></div><div><span class='text-[#055DA5] font-semibold'>Panelist</span></div></div>",
      },
      table2: {
        firstTitle:
          "<strong class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>Registration</strong>",
        firstContents:
          "<p class='text-[#666666] text-[18px]'>Participant Registration</p>",
        firstLabel: "",
        secondTitle:
          "<strong class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>Opening Remark\n Welcoming Remark</strong>",
        secondContents:
          "<div class='bg-[#F4F7F9] px-6 py-[22px] space-y-3 text-[#666666] max-[500px]:p-4 rounded-[8px]'><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>Opening Remark</span><strong class='mx-3 max-[500px]:ml-0'>Lee Hyoung-Il</strong> 1st Vice Minister, Ministry of Economy and Finance</div><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>Welcoming Remark</span><strong class='mx-3 max-[500px]:ml-0'></strong> </div></div>",
        secondLabel: "",
        thirdTitle:
          "<strong class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>Group Photo</strong>",
        thirdContents: "",
        thirdLabel: "",
        fourthTitle:
          "<p class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>Keynote Speech 1 :<br/>Designing the Future with AI</p>",
        fourthContents:
          "<div class='bg-[#F4F7F9] px-6 py-[22px] space-y-3 text-[#666666] max-[500px]:p-4 rounded-[8px]'><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>Moderator</span><strong class='mx-3 max-[500px]:ml-0'>Shin Kwan-Ho</strong> Professor, Korea University</div><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>Keynote Speaker</span><strong class='mx-3 max-[500px]:ml-0'>Anton Korinek</strong> Professor, University of Virginia (Online Presentation)</div></div>",
        fourthLabel:
          "<p class='text-[14px] font-bold text-[#333333] bg-[#F5C7FF] px-4 py-2 max-[500px]:text-[12px] max-[500px]:px-2 max-[500px]:py-[6px]'>KEYNOTE SPEECH 1</p>",
        fifthTitle:
          "<p class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>Keynote Speech 2 :<br/>AI and Our Daily Lives(1)</p>",
        fifthContents:
          "<div class='bg-[#F4F7F9] px-6 py-[22px] space-y-3 text-[#666666] max-[500px]:p-4 rounded-[8px]'><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>Keynote Speaker</span><strong class='mx-3 max-[500px]:ml-0'>Sung Nak-Ho</strong> EVP, NAVER Cloud</div></div>",
        fifthLabel:
          "<p class='text-[14px] font-bold text-[#333333] bg-[#F5C7FF] px-4 py-2 max-[500px]:text-[12px] max-[500px]:px-2 max-[500px]:py-[6px]'>KEYNOTE SPEECH 2-1</p>",
        sixthTitle:
          "<p class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>Keynote Speech 2-2 :<br/>AI and Our Daily Lives(2)</p>",
        sixthContents:
          "<div class='bg-[#F4F7F9] px-6 py-[22px] space-y-3 text-[#666666] max-[500px]:p-4 rounded-[8px]'><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>Keynote Speaker</span><strong class='mx-3 max-[500px]:ml-0'>Yoo Yong-Ha</strong> Performance Leader, Kakao Corp.</div></div>",
        sixthLabel:
          "<p class='text-[14px] font-bold text-[#333333] bg-[#F5C7FF] px-4 py-2 max-[500px]:text-[12px] max-[500px]:px-2 max-[500px]:py-[6px]'>KEYNOTE SPEECH 2-2</p>",
        seventhTitle:
          "<strong class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>Luncheon</strong>",
        seventhContents:
          "<p class='text-[#666666] mt-2 text-[18px]'>Luncheon & Networking</p>",
        seventhLabel: "",
        eighthLabel:
          "<p class='text-[14px] font-bold text-[#333333] bg-[#66F35C] px-4 py-2 max-[500px]:text-[12px] max-[500px]:px-2 max-[500px]:py-[6px]'>PANEL DISCUSSION SESSION 1</p>",
        eighthTitle:
          "<p class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>Panel Discussion 1 :<br/>AI and the Future of Industry</p>",
        eighthContents:
          "<div class='bg-[#F4F7F9] px-6 py-[22px] space-y-3 text-[#666666] max-[500px]:p-4 rounded-[8px]'><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>Moderator</span><strong class='mx-3 max-[500px]:ml-0'>Song Kyung-Ho</strong> Senior Researcher, Korea AI Safety Institute</div><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>Speaker</span><strong class='mx-3 max-[500px]:ml-0'>Jerrard Sheehan</strong> Director, Science,Technology and Innovation directorate, OECD</div><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>Panelist</span><strong class='mx-3 max-[500px]:ml-0'>Lee Hyun-Jin</strong> Associate Research Fellow, Korea Institute for International Economic Policy</div></div>",
        ninthTitle:
          "<p class='text-[20px] font-bold text-[#333333] max-[500px]:text-[18px]'>Panel Discussion 2 :<br/>Global Expansion and Collaboration of AI Startups</p>",
        ninthContents:
          "<div class='bg-[#F4F7F9] px-6 py-[22px] space-y-3 text-[#666666] max-[500px]:p-4 rounded-[8px]'><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>Moderator</span></div><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>Presentation</span></div><div><span class='text-[#055DA5] font-semibold max-[500px]:block max-[500px]:text-[14px]'>Panelist</span></div></div>",
        ninthLabel:
          "<p class='text-[14px] font-bold text-[#333333] bg-[#66F35C] px-4 py-2 max-[500px]:text-[12px] max-[500px]:px-2 max-[500px]:py-[6px]'>PANEL DISCUSSION SESSION 2</p>",
      },
    },
    speakers: {
      title: "Speaker",
      subtitle: "Introducing DEF 2025 speakers.",
      comingSoon: "Speaker information\ncoming soon",
      haJeongWoo: "Ha Jeong-woo",
      position: "Head of NAVER Cloud AI Innovation Center",
      session3: "SESSION 3",
      sessionDesc:
        "Balancing AI Risk Regulations and\nMarket-Driven Innovation",
      moderators: {
        kwanHoShin: {
          name: "Kwan Ho-Shin",
          position: `Korea University Professor`,
          session: "Keynote Speech 1",
          sessionDesc: "Moderator",
        },
        antonKorinek: {
          name: "Anton Korinek",
          position: `University of Virginia\n Professor`,
          session: "Keynote Speech 1",
          sessionDesc: `Speaker\n(Online Presentation)`,
        },
        sungNakHo: {
          name: "Sung Nak-Ho",
          position: `NAVER Cloud\n EVP`,
          session: "Keynote Speech 2-1",
          sessionDesc: `Speaker`,
        },
        yooYongHa: {
          name: "Yoo Yong-Ha",
          position: `Kakao Corp.\n Performance Leader`,
          session: "Keynote Speech 2-2",
          sessionDesc: `Speaker`,
        },
      },
      panelists1: {
        songKyungHo: {
          name: "Song Kyung-Ho",
          position: `Korea AI Safety Institute KIET \nSenior Researcher`,
          session: "Panel Discussion Session 1",
          sessionDesc: `Moderator`,
        },
        jerrySheehan: {
          name: "Jerrard Sheehan",
          position: `OECD\n Director, Science, Technology and Innovation directorate`,
          session: "Panel Discussion Session 1",
          sessionDesc: `Speaker`,
        },
        leeHyunJin: {
          name: "Lee Hyun-Jin",
          position: `Korea Institute for International Economic Policy \nAssociate Research Fellow`,
          session: "Panel Discussion Session 1",
          sessionDesc: `Panelist`,
        },
      },
    },
    footer: {
      ministry: "Ministry of Economy and Finance",
      ministryEn: "Ministry of Economy and Finance",
      privacyPolicy: "Privacy Policy",
      office: "Office.",
      secretariat: "DEF2025 Secretariat",
      tel: "Tel.",
      phone: "+82-10-5829-1101",
      mail: "Mail.",
      email: "info.def2025@gmail.com",
      copyright: "COPYRIGHT © DEF2025, INC. ALL RIGHTS RESERVED.",
    },
  },
} as const;

export type Translation = typeof translations.ko;
