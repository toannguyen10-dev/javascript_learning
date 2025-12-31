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
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${color} mb-4`}>
        <Icon className="text-white text-4xl" />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      <div className="flex gap-3">
        <Link to={link} className="flex-1">
          <button className="w-full btn-primary flex items-center justify-center space-x-2">
            <span>Học ngay</span>
            <FaArrowRight />
          </button>
        </Link>
        
        <Link to={quizLink}>
          <button className="btn-secondary flex items-center space-x-2">
            <FaQuestionCircle />
            <span>Quiz</span>
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ModuleCard;

