import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import QuizComponent from '../components/QuizComponent';
import { eventLoopQuiz, esFeaturesQuiz, bundlingQuiz, browserCompatibilityQuiz } from '../data/quizzes';
import { FaArrowLeft } from 'react-icons/fa';

const Quiz = () => {
  const { topic } = useParams();

  const quizData = {
    'event-loop': {
      title: 'Quiz: Event Loop & Async JavaScript',
      questions: eventLoopQuiz,
      backLink: '/event-loop'
    },
    'es-features': {
      title: 'Quiz: ES2015 - ES2024 Features',
      questions: esFeaturesQuiz,
      backLink: '/es-features'
    },
    'bundling': {
      title: 'Quiz: Bundling & Setup',
      questions: bundlingQuiz,
      backLink: '/bundling'
    },
    'browser-compatibility': {
      title: 'Quiz: Browser Compatibility',
      questions: browserCompatibilityQuiz,
      backLink: '/browser-compatibility'
    }
  };

  const quiz = quizData[topic];

  if (!quiz) {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Quiz không tồn tại</h1>
        <Link to="/" className="btn-primary">Về trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="px-2 sm:px-4">
      <Link to={quiz.backLink} className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-4 sm:mb-6 text-sm sm:text-base">
        <FaArrowLeft />
        <span>Quay lại học tập</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-2">
          {quiz.title}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
          Kiểm tra kiến thức của bạn với {quiz.questions.length} câu hỏi
        </p>
      </motion.div>

      <QuizComponent questions={quiz.questions} />
    </div>
  );
};

export default Quiz;

