export const languages = {
  ko: '한국어',
  en: 'English'
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'ko';

export const translations = {
  ko: {
    nav: {
      eventIntro: '행사소개',
      program: '프로그램',
      speakers: '연사',
      registration: '참가등록',
      eventOverview: '행사개요',
      pastEvents: '지난행사',
      directions: '오시는길',
      register: '참가등록',
      registrationConfirmation: '참가확인'
    },
    common: {
      language: '언어',
      kor: 'KOR',
      eng: 'ENG'
    },
    home: {
      title: 'DEF 2025',
      subtitle: 'Digital Economy Forum',
      date: '2025년 2월 20일(목)',
      location: '서울 코엑스',
      description: '디지털 경제의 미래를 논하는 글로벌 포럼',
      introduce: 'DEF 2025 소개',
      introduceDesc: '디지털 경제 포럼의 비전과 목표를 확인하세요.',
      program: '프로그램 소개',
      programDesc: '다양한 세션과 프로그램을 미리 살펴보세요.',
      speakers: '연사 소개',
      speakersDesc: '글로벌 전문가들의 인사이트를 만나보세요.',
      registration: '등록',
      registrationDesc: '지금 바로 참가 신청하세요.',
      hostedBy: '주최 및 주관',
      mediaRoom: '미디어룸',
      mediaRoomDesc: '행사 관련 미디어 자료를 확인하세요.'
    },
    eventOverview: {
      title: '행사개요',
      subtitle: 'DEF 2025 행사 개요를 소개합니다.',
      aboutTitle: 'DEF 2025',
      aboutDesc: '디지털 경제 포럼(Digital Economy Forum, DEF)은 디지털 전환 시대의 경제적 기회와 도전을 논의하는 글로벌 플랫폼입니다.',
      visionTitle: '비전',
      visionDesc: '디지털 경제의 지속가능한 발전을 위한 정책과 전략을 모색합니다.',
      dateTitle: '일시',
      dateDesc: '2025년 2월 20일(목) 09:00 - 18:00',
      venueTitle: '장소',
      venueDesc: '서울 코엑스 컨벤션센터',
      participantsTitle: '참가대상',
      participantsDesc: '정부 관계자, 기업 임원, 학계 전문가, 연구원 등'
    },
    pastEvents: {
      title: '지난행사',
      subtitle: 'DEF의 지난 행사들을 소개합니다.',
      watchVideo: '포럼 동영상 보기',
      contentPreparation: '콘텐츠 준비중입니다.',
      contentPreparationDesc: '보다 나은 서비스를 제공하기 위해 콘텐츠 준비중에 있습니다.\n빠른 시일 내에 준비하여 찾아뵙겠습니다.',
      def2024: 'DEF 2024 디지털 경제 포럼',
      def2024Desc: '2024년 디지털 경제의 새로운 패러다임을 제시한 포럼',
      def2023: 'DEF 2023 디지털 경제 포럼',
      def2023Desc: '2023년 디지털 전환과 경제 성장을 논의한 포럼',
      def2022: 'DEF 2022 디지털 경제 포럼',
      def2022Desc: '2022년 포스트 코로나 시대의 디지털 경제를 다룬 포럼',
      def2021: 'DEF 2021 디지털 경제 포럼',
      def2021Desc: '2021년 디지털 뉴딜과 경제 혁신을 주제로 한 포럼',
      def2020: 'DEF 2020 디지털 경제 포럼',
      def2020Desc: '2020년 디지털 경제의 기반을 다진 첫 번째 포럼',
      def2019: 'DEF 2019 디지털 경제 포럼',
      def2019Desc: '2019년 4차 산업혁명과 디지털 경제를 논의한 포럼',
      def2018: 'DEF 2018 디지털 경제 포럼',
      def2018Desc: '2018년 디지털 혁신과 경제 발전을 다룬 포럼'
    },
    location: {
      title: '오시는길',
      subtitle: '행사 장소와 교통편을 안내합니다.',
      venue: '서울 코엑스',
      address: '서울특별시 강남구 영동대로 513',
      subway: '지하철',
      subwayDesc: '2호선 삼성역 5,6번 출구 도보 3분',
      bus: '버스',
      busDesc: '강남 순환버스, 시내버스 다수 노선',
      parking: '주차',
      parkingDesc: '코엑스 지하주차장 이용 가능'
    },
    program: {
      title: '프로그램',
      subtitle: 'DEF 2025 프로그램을 소개합니다.',
      comingSoon: '프로그램 정보가 곧 공개됩니다.'
    },
    speakers: {
      title: '연사',
      subtitle: 'DEF 2025 연사들을 소개합니다.',
      comingSoon: '연사 정보\n준비중',
      haJeongWoo: '하정우',
      position: 'NAVER Cloud AI Innovation 센터장',
      session3: 'SESSION 3',
      sessionDesc: 'AI 위험으로 인한 규제와\n시장수요에 기반한 혁신의 조화'
    },
    footer: {
      ministry: '기획재정부',
      ministryEn: 'Ministry of Economy and Finance',
      privacyPolicy: '개인정보처리방침',
      office: 'Office.',
      secretariat: 'DEF2025 사무국',
      tel: 'Tel.',
      phone: '02-730-0117',
      mail: 'Mail.',
      email: 'info.def2025@gmail.com',
      copyright: 'COPYRIGHT © DEF2025, INC. ALL RIGHTS RESERVED.'
    }
  },
  en: {
    nav: {
      eventIntro: 'Event Introduction',
      program: 'Program',
      speakers: 'Speakers',
      registration: 'Registration',
      eventOverview: 'Event Overview',
      pastEvents: 'Past Events',
      directions: 'Directions',
      register: 'Register',
      registrationConfirmation: 'Registration Confirmation'
    },
    common: {
      language: 'Language',
      kor: 'KOR',
      eng: 'ENG'
    },
    home: {
      title: 'DEF 2025',
      subtitle: 'Digital Economy Forum',
      date: 'February 20, 2025 (Thu)',
      location: 'COEX Seoul',
      description: 'A global forum discussing the future of digital economy',
      introduce: 'DEF 2025 Introduction',
      introduceDesc: 'Discover the vision and goals of the Digital Economy Forum.',
      program: 'Program Introduction',
      programDesc: 'Explore various sessions and programs in advance.',
      speakers: 'Speaker Introduction',
      speakersDesc: 'Meet insights from global experts.',
      registration: 'Registration',
      registrationDesc: 'Register for participation now.',
      hostedBy: 'Hosted & Organized by',
      mediaRoom: 'Media Room',
      mediaRoomDesc: 'Check out event-related media materials.'
    },
    eventOverview: {
      title: 'Event Overview',
      subtitle: 'Introducing the overview of DEF 2025.',
      aboutTitle: 'DEF 2025',
      aboutDesc: 'The Digital Economy Forum (DEF) is a global platform for discussing economic opportunities and challenges in the digital transformation era.',
      visionTitle: 'Vision',
      visionDesc: 'Exploring policies and strategies for sustainable development of the digital economy.',
      dateTitle: 'Date & Time',
      dateDesc: 'February 20, 2025 (Thu) 09:00 - 18:00',
      venueTitle: 'Venue',
      venueDesc: 'COEX Convention Center, Seoul',
      participantsTitle: 'Target Participants',
      participantsDesc: 'Government officials, corporate executives, academic experts, researchers, etc.'
    },
    pastEvents: {
      title: 'Past Events',
      subtitle: 'Introducing DEF\'s past events.',
      watchVideo: 'Watch Forum Video',
      contentPreparation: 'Content Coming Soon',
      contentPreparationDesc: 'We are preparing content to provide better service.\nWe will be back with you soon.',
      def2024: 'DEF 2024 Digital Economy Forum',
      def2024Desc: 'Forum that presented new paradigms of digital economy in 2024',
      def2023: 'DEF 2023 Digital Economy Forum',
      def2023Desc: 'Forum that discussed digital transformation and economic growth in 2023',
      def2022: 'DEF 2022 Digital Economy Forum',
      def2022Desc: 'Forum that addressed digital economy in the post-COVID era in 2022',
      def2021: 'DEF 2021 Digital Economy Forum',
      def2021Desc: 'Forum themed on Digital New Deal and economic innovation in 2021',
      def2020: 'DEF 2020 Digital Economy Forum',
      def2020Desc: 'The first forum that laid the foundation for digital economy in 2020',
      def2019: 'DEF 2019 Digital Economy Forum',
      def2019Desc: 'Forum that discussed the 4th Industrial Revolution and digital economy in 2019',
      def2018: 'DEF 2018 Digital Economy Forum',
      def2018Desc: 'Forum that addressed digital innovation and economic development in 2018'
    },
    location: {
      title: 'Directions',
      subtitle: 'Guide to event venue and transportation.',
      venue: 'COEX Seoul',
      address: '513 Yeongdong-daero, Gangnam-gu, Seoul',
      subway: 'Subway',
      subwayDesc: 'Line 2 Samseong Station Exit 5,6 - 3 minutes walk',
      bus: 'Bus',
      busDesc: 'Gangnam circulation bus, multiple city bus routes',
      parking: 'Parking',
      parkingDesc: 'COEX underground parking available'
    },
    program: {
      title: 'Program',
      subtitle: 'Introducing DEF 2025 program.',
      comingSoon: 'Program information will be announced soon.'
    },
    speakers: {
      title: 'Speakers',
      subtitle: 'Introducing DEF 2025 speakers.',
      comingSoon: 'Speaker information\ncoming soon',
      haJeongWoo: 'Ha Jeong-woo',
      position: 'Head of NAVER Cloud AI Innovation Center',
      session3: 'SESSION 3',
      sessionDesc: 'Balancing AI Risk Regulations and\nMarket-Driven Innovation'
    },
    footer: {
      ministry: 'Ministry of Economy and Finance',
      ministryEn: 'Ministry of Economy and Finance',
      privacyPolicy: 'Privacy Policy',
      office: 'Office.',
      secretariat: 'DEF2025 Secretariat',
      tel: 'Tel.',
      phone: '02-730-0117',
      mail: 'Mail.',
      email: 'info.def2025@gmail.com',
      copyright: 'COPYRIGHT © DEF2025, INC. ALL RIGHTS RESERVED.'
    }
  }
} as const;

export type Translation = typeof translations.ko;
