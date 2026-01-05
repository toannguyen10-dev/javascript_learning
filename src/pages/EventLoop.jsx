import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock';
import { FaQuestionCircle, FaArrowLeft } from 'react-icons/fa';

const EventLoop = () => {
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4">
      <Link to="/" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-4 sm:mb-6 text-sm sm:text-base">
        <FaArrowLeft />
        <span>Về trang chủ</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-2">
          Event Loop & Async JavaScript
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
          Hiểu sâu về cơ chế hoạt động bất đồng bộ trong JavaScript
        </p>
        
        <Link to="/quiz/event-loop" className="inline-block mt-4 sm:mt-6">
          <button className="btn-primary flex items-center space-x-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
            <FaQuestionCircle />
            <span>Làm bài quiz</span>
          </button>
        </Link>
      </motion.div>

      <div className="space-y-6 sm:space-y-8">
        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="card"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">1. JavaScript là Single-threaded</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            JS chạy trên một luồng duy nhất (main thread). Điều này có nghĩa là một lúc chỉ thực thi một lệnh.
          </p>
          
          <CodeBlock
            title="Ví dụ"
            code={`console.log("Start");

for(let i = 0; i < 3; i++) {
    console.log(i);
}

console.log("End");`}
          />

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <h4 className="font-semibold text-blue-900 mb-2">Thứ tự xử lý:</h4>
            <ol className="list-decimal list-inside space-y-1 text-blue-800">
              <li>"Start" in ra</li>
              <li>Vòng lặp chạy từ 0 → 2, in lần lượt 0, 1, 2</li>
              <li>"End" in ra</li>
            </ol>
            <p className="mt-2 text-blue-900">
              ⚠️ Nếu vòng lặp quá dài, toàn bộ JS sẽ bị chặn, không thể xử lý click hay setTimeout.
            </p>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="card"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">2. Call Stack (Ngăn xếp cuộc gọi)</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            JS sử dụng stack (LIFO - Last In First Out) để quản lý các hàm đang thực thi.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
            <h4 className="font-semibold text-yellow-900 mb-2">Cơ chế:</h4>
            <ul className="list-disc list-inside space-y-1 text-yellow-800">
              <li>Khi gọi hàm → push vào stack</li>
              <li>Hàm chạy xong → pop khỏi stack</li>
            </ul>
          </div>

          <CodeBlock
            title="Ví dụ"
            code={`function first() {
    console.log('First');
}

function second() {
    first();
    console.log('Second');
}

second();`}
          />

          <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
            <h4 className="font-semibold text-green-900 mb-2">Thứ tự xử lý:</h4>
            <ol className="list-decimal list-inside space-y-1 text-green-800">
              <li>second() push vào stack</li>
              <li>first() push vào stack</li>
              <li>console.log('First') → in "First"</li>
              <li>first() pop khỏi stack</li>
              <li>console.log('Second') → in "Second"</li>
              <li>second() pop khỏi stack</li>
            </ol>
            <p className="mt-2 font-semibold text-green-900">Kết quả: First → Second</p>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="card"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">3. Asynchronous JavaScript</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            JS có thể xử lý asynchronous tasks nhờ Web APIs và Event Loop.
          </p>

          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">3.1 Macro-task (Task Queue)</h3>
          <p className="text-gray-700 mb-2">Bao gồm: setTimeout, setInterval, setImmediate, I/O events</p>

          <CodeBlock
            title="Ví dụ Macro-task"
            code={`console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

console.log("End");`}
          />

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-4 mb-6">
            <h4 className="font-semibold text-purple-900 mb-2">Thứ tự xử lý:</h4>
            <ol className="list-decimal list-inside space-y-1 text-purple-800">
              <li>"Start" in ra</li>
              <li>setTimeout gửi callback vào macro-task queue</li>
              <li>"End" in ra</li>
              <li>Event loop kiểm tra stack rỗng → lấy callback từ macro-task queue → "Timeout" in ra</li>
            </ol>
            <p className="mt-2 font-semibold text-purple-900">Kết quả: Start → End → Timeout</p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">3.2 Micro-task (Micro-task Queue)</h3>
          <p className="text-gray-700 mb-2">
            Bao gồm: Promise, async/await, queueMicrotask, MutationObserver
          </p>
          <p className="text-red-600 font-semibold mb-4">
            ⚡ Luôn ưu tiên xử lý trước macro-task sau khi call stack rỗng
          </p>

          <CodeBlock
            title="Ví dụ Micro-task"
            code={`console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");`}
          />

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mt-4">
            <h4 className="font-semibold text-indigo-900 mb-2">Thứ tự xử lý:</h4>
            <ol className="list-decimal list-inside space-y-1 text-indigo-800">
              <li>"Start" → in ra</li>
              <li>setTimeout → macro-task queue</li>
              <li>Promise.resolve().then() → micro-task queue</li>
              <li>"End" → in ra</li>
              <li>Micro-task queue chạy → "Promise" in ra</li>
              <li>Macro-task queue chạy → "Timeout" in ra</li>
            </ol>
            <p className="mt-2 font-semibold text-indigo-900">Kết quả: Start → End → Promise → Timeout</p>
          </div>
        </motion.div>

        {/* Section 4 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="card"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">4. Async/Await</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            await là sugar cho Promise.then(), tức là micro-task. Khi gặp await, hàm async tạm dừng để main thread xử lý task khác.
          </p>

          <CodeBlock
            title="Ví dụ Async/Await"
            code={`async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

foo();
console.log("C");`}
          />

          <div className="bg-pink-50 border-l-4 border-pink-500 p-4 mt-4">
            <h4 className="font-semibold text-pink-900 mb-2">Thứ tự xử lý:</h4>
            <ol className="list-decimal list-inside space-y-1 text-pink-800">
              <li>foo() gọi → "A" in ra</li>
              <li>await → hàm tạm dừng, callback vào micro-task queue</li>
              <li>"C" in ra</li>
              <li>Micro-task queue chạy → "B" in ra</li>
            </ol>
            <p className="mt-2 font-semibold text-pink-900">Kết quả: A → C → B</p>
          </div>
        </motion.div>

        {/* Section 5 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="card"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">5. Event Loop</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Event Loop là cơ chế lặp vô hạn để kiểm tra và xử lý tasks.
          </p>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-6 mb-4">
            <h4 className="font-semibold text-xl mb-4">Luồng tổng quan - Main thread:</h4>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li>Thực thi call stack</li>
              <li>Khi stack trống → chạy tất cả micro-task</li>
              <li>Nếu micro-task xong → chạy 1 macro-task</li>
              <li>Lặp lại từ bước 1</li>
            </ol>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
            <h4 className="font-bold text-yellow-900 text-center text-xl mb-2">
              ⚡ Công thức vàng ⚡
            </h4>
            <p className="text-center text-lg sm:text-xl lg:text-2xl font-bold text-yellow-900">
              Call Stack → Micro-task → Macro-task → Lặp lại
            </p>
          </div>
        </motion.div>

        {/* Section 6 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="card"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">6. Bảng tóm tắt thứ tự ưu tiên</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                  <th className="border p-3 text-left">Thứ tự</th>
                  <th className="border p-3 text-left">Task type</th>
                  <th className="border p-3 text-left">Ví dụ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50">
                  <td className="border p-3 font-bold">1</td>
                  <td className="border p-3 font-semibold">Call stack</td>
                  <td className="border p-3">Đồng bộ (console.log, vòng lặp, hàm)</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border p-3 font-bold">2</td>
                  <td className="border p-3 font-semibold">Micro-task queue</td>
                  <td className="border p-3">Promise.then, async/await, queueMicrotask</td>
                </tr>
                <tr className="bg-purple-50">
                  <td className="border p-3 font-bold">3</td>
                  <td className="border p-3 font-semibold">Macro-task queue</td>
                  <td className="border p-3">setTimeout, setInterval, I/O events</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Section 7 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="card"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">7. Ví dụ nâng cao</h2>
          
          <CodeBlock
            title="Thử thách cuối cùng"
            code={`console.log("Start");

setTimeout(() => console.log("setTimeout1"), 0);

Promise.resolve().then(() => {
    console.log("Promise1");
    setTimeout(() => console.log("setTimeout2"), 0);
});

Promise.resolve().then(() => console.log("Promise2"));

console.log("End");`}
          />

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-6 mt-4">
            <h4 className="font-semibold text-xl mb-3">Thứ tự xử lý chi tiết:</h4>
            <ol className="list-decimal list-inside space-y-2">
              <li>"Start" → in</li>
              <li>setTimeout1 → macro-task queue</li>
              <li>Promise1 → micro-task queue</li>
              <li>Promise2 → micro-task queue</li>
              <li>"End" → in</li>
              <li>Micro-task queue chạy:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>"Promise1" in</li>
                  <li>setTimeout2 → macro-task queue</li>
                  <li>"Promise2" in</li>
                </ul>
              </li>
              <li>Macro-task queue chạy:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>"setTimeout1" in</li>
                  <li>"setTimeout2" in</li>
                </ul>
              </li>
            </ol>
            <div className="mt-4 p-4 bg-white/20 rounded-lg">
              <p className="font-bold text-base sm:text-lg lg:text-xl">Kết quả cuối cùng:</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold mt-2">
                Start → End → Promise1 → Promise2 → setTimeout1 → setTimeout2
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="card bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Sẵn sàng kiểm tra kiến thức?</h3>
          <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">Làm bài quiz để xem bạn đã nắm vững chưa!</p>
          <Link to="/quiz/event-loop">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Bắt đầu Quiz ngay
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default EventLoop;

