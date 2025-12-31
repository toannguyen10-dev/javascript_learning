import { motion } from 'framer-motion';

const CodeBlock = ({ code, language = 'javascript', title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="my-4"
    >
      {title && (
        <div className="bg-gray-800 text-white px-4 py-2 rounded-t-lg font-semibold">
          {title}
        </div>
      )}
      <pre className={`${title ? 'rounded-b-lg' : 'rounded-lg'} bg-gray-900 text-gray-100 p-4 overflow-x-auto`}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </motion.div>
  );
};

export default CodeBlock;

