import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import QuizComponent from '../components/QuizComponent';
import { eventLoopQuiz, esFeaturesQuiz, bundlingQuiz } from '../data/quizzes';
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
    <div>
      <Link to={quiz.backLink} className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6">
        <FaArrowLeft />
        <span>Quay lại học tập</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          {quiz.title}
        </h1>
        <p className="text-xl text-gray-600">
          Kiểm tra kiến thức của bạn với {quiz.questions.length} câu hỏi
        </p>
      </motion.div>

      <QuizComponent questions={quiz.questions} />
    </div>
  );
};

export default Quiz;

