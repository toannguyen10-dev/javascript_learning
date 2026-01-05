import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaQuestionCircle } from 'react-icons/fa';

const ModuleCard = ({ icon: Icon, title, description, link, quizLink, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="module-card"
    >
      <div className={`inline-flex p-2 sm:p-3 rounded-xl bg-gradient-to-br ${color} mb-3 sm:mb-4`}>
        <Icon className="text-white text-3xl sm:text-4xl" />
      </div>
      
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{description}</p>
      
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <Link to={link} className="flex-1">
          <button className="w-full btn-primary flex items-center justify-center space-x-2 text-sm sm:text-base py-2 sm:py-3">
            <span>Học ngay</span>
            <FaArrowRight className="text-sm sm:text-base" />
          </button>
        </Link>
        
        <Link to={quizLink} className="flex-1 sm:flex-initial">
          <button className="w-full sm:w-auto btn-secondary flex items-center justify-center space-x-2 text-sm sm:text-base py-2 sm:py-3">
            <FaQuestionCircle className="text-sm sm:text-base" />
            <span>Quiz</span>
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ModuleCard;

