import { motion } from 'framer-motion';
import ModuleCard from '../components/ModuleCard';
import { FaCode, FaJsSquare, FaBox, FaRocket, FaGlobe } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Học JavaScript Chuyên Sâu
        </h1>
        <p className="text-2xl text-gray-600 mb-4">
          Từ cơ bản đến nâng cao - Nắm vững kiến thức JavaScript hiện đại
        </p>
        <div className="flex items-center justify-center space-x-8 mt-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">4</div>
            <div className="text-gray-600">Modules</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600">60+</div>
            <div className="text-gray-600">Bài tập</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">100%</div>
            <div className="text-gray-600">Miễn phí</div>
          </div>
        </div>
      </motion.div>

      {/* Modules */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <ModuleCard
          icon={FaCode}
          title="Event Loop & Async"
          description="Hiểu sâu về JavaScript Event Loop, Call Stack, Micro/Macro tasks, và cơ chế bất đồng bộ"
          link="/event-loop"
          quizLink="/quiz/event-loop"
          color="from-blue-500 to-indigo-600"
          delay={0.1}
        />
        
        <ModuleCard
          icon={FaJsSquare}
          title="ES2015 - ES2024"
          description="Khám phá tất cả tính năng mới từ ES2015 đến ES2024 với ví dụ thực tế"
          link="/es-features"
          quizLink="/quiz/es-features"
          color="from-yellow-500 to-orange-600"
          delay={0.2}
        />
        
        <ModuleCard
          icon={FaBox}
          title="Bundling & Setup"
          description="Học cách setup và sử dụng Webpack, Vite, Parcel để tối ưu dự án JavaScript"
          link="/bundling"
          quizLink="/quiz/bundling"
          color="from-green-500 to-teal-600"
          delay={0.3}
        />
        
        <ModuleCard
          icon={FaGlobe}
          title="Browser Compatibility"
          description="Tìm hiểu các JavaScript functions tương thích với trình duyệt từ năm nào - Chrome, Firefox, Safari, Edge"
          link="/browser-compatibility"
          quizLink="/quiz/browser-compatibility"
          color="from-purple-500 to-pink-600"
          delay={0.4}
        />
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-12 text-white"
      >
        <div className="flex items-center justify-center mb-6">
          <FaRocket className="text-6xl" />
        </div>
        <h2 className="text-4xl font-bold text-center mb-6">
          Tại sao nên học tại đây?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-3">📚 Nội dung chất lượng</h3>
            <p className="text-blue-100">
              Kiến thức được tổng hợp từ tài liệu chính thức và kinh nghiệm thực tế
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-3">✅ Bài tập thực hành</h3>
            <p className="text-blue-100">
              Hệ thống quiz giúp củng cố kiến thức và đánh giá tiến độ học tập
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-3">🎯 Học từng bước</h3>
            <p className="text-blue-100">
              Nội dung được sắp xếp logic từ cơ bản đến nâng cao
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;

