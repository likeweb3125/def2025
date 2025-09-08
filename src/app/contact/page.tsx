export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            연락처
          </h1>
          
          <div className="bg-white shadow rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              문의사항이 있으시면 언제든지 연락주세요!
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  연락처 정보
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-3">📧</span>
                    <span className="text-gray-700">contact@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-3">📱</span>
                    <span className="text-gray-700">+82 10-1234-5678</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-3">📍</span>
                    <span className="text-gray-700">서울특별시, 대한민국</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  소셜 미디어
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-3">🐙</span>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      GitHub
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-3">💼</span>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-3">🐦</span>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800">
                💡 <strong>팁:</strong> 이 프로젝트는 Next.js의 App Router를 사용하여 
                구축되었습니다. 각 페이지는 독립적인 라우트로 작동합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
