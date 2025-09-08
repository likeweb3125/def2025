export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            프로젝트 소개
          </h1>
          
          <div className="bg-white shadow rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Next.js로 만든 웹 애플리케이션
            </h2>
            
            <p className="text-gray-600 mb-6">
              이 프로젝트는 Next.js 15, React 19, TypeScript, Tailwind CSS를 사용하여 
              구축된 현대적인 웹 애플리케이션입니다.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              사용된 기술 스택
            </h3>
            
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><strong>Next.js 15</strong> - React 기반 풀스택 프레임워크</li>
              <li><strong>React 19</strong> - 사용자 인터페이스 라이브러리</li>
              <li><strong>TypeScript</strong> - 정적 타입 검사</li>
              <li><strong>Tailwind CSS</strong> - 유틸리티 우선 CSS 프레임워크</li>
              <li><strong>ESLint</strong> - 코드 품질 도구</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              주요 기능
            </h3>
            
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>서버 사이드 렌더링 (SSR)</li>
              <li>정적 사이트 생성 (SSG)</li>
              <li>자동 코드 분할</li>
              <li>이미지 최적화</li>
              <li>반응형 디자인</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
