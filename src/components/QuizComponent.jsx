import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaRedo } from 'react-icons/fa';

const QuizComponent = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const question = questions[currentQuestion];

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    const isCorrect = index === question.correctAnswer;
    
    setAnswers([...answers, { question: currentQuestion, answer: index, isCorrect }]);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    const passed = percentage >= 70;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card text-center max-w-2xl mx-auto"
      >
        <div className={`text-6xl mb-4 ${passed ? 'text-green-500' : 'text-red-500'}`}>
          {passed ? <FaCheckCircle className="mx-auto" /> : <FaTimesCircle className="mx-auto" />}
        </div>
        
        <h2 className="text-3xl font-bold mb-4">
          {passed ? 'Xuất sắc! 🎉' : 'Cần cố gắng thêm! 💪'}
        </h2>
        
        <div className="text-5xl font-bold mb-4 text-blue-600">
          {score}/{questions.length}
        </div>
        
        <p className="text-xl text-gray-600 mb-8">
          Bạn đã trả lời đúng {percentage.toFixed(0)}% câu hỏi
        </p>

        <button onClick={resetQuiz} className="btn-primary flex items-center space-x-2 mx-auto">
          <FaRedo />
          <span>Làm lại</span>
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Câu hỏi {currentQuestion + 1}/{questions.length}</span>
          <span>Điểm: {score}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="card"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            {question.question}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              let className = 'quiz-option';
              
              if (selectedAnswer !== null) {
                if (index === question.correctAnswer) {
                  className += ' correct';
                } else if (index === selectedAnswer) {
                  className += ' incorrect';
                }
              } else if (selectedAnswer === index) {
                className += ' selected';
              }

              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                  whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                  onClick={() => handleAnswer(index)}
                  className={className}
                >
                  <div className="flex items-center">
                    <span className="font-semibold mr-3 text-blue-600">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="text-gray-800">{option}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {selectedAnswer !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 p-4 rounded-lg ${
                selectedAnswer === question.correctAnswer
                  ? 'bg-green-50 border-2 border-green-500'
                  : 'bg-red-50 border-2 border-red-500'
              }`}
            >
              <p className="font-semibold text-lg mb-2">
                {selectedAnswer === question.correctAnswer ? '✅ Chính xác!' : '❌ Sai rồi!'}
              </p>
              <p className="text-gray-700">{question.explanation}</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuizComponent;

