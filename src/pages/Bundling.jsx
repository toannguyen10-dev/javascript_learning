import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock';
import { FaQuestionCircle, FaArrowLeft } from 'react-icons/fa';

const Bundling = () => {
  const bundlers = [
    {
      name: "Webpack",
      color: "from-blue-500 to-cyan-600",
      pros: "Cấu hình linh hoạt, plugin mạnh",
      use: "Dự án SPA, phức tạp",
      icon: "📦"
    },
    {
      name: "Rollup",
      color: "from-red-500 to-orange-600",
      pros: "Tree-shaking mạnh, output library",
      use: "Thư viện JS",
      icon: "📜"
    },
    {
      name: "Parcel",
      color: "from-green-500 to-teal-600",
      pros: "Zero-config, dev server tự động",
      use: "Project nhỏ, nhanh",
      icon: "📮"
    },
    {
      name: "Vite",
      color: "from-purple-500 to-pink-600",
      pros: "Siêu nhanh, HMR tốt, ES module",
      use: "SPA hiện đại, Vue/React",
      icon: "⚡"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4">
      <Link to="/" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-4 sm:mb-6 text-sm sm:text-base">
        <FaArrowLeft />
        <span>Về trang chủ</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent mb-3 sm:mb-4 px-2">
          Bundling & Setup
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
          Học cách setup và sử dụng bundler để tối ưu dự án JavaScript
        </p>
        
        <Link to="/quiz/bundling" className="inline-block mt-6">
          <button className="btn-primary flex items-center space-x-2">
            <FaQuestionCircle />
            <span>Làm bài quiz</span>
          </button>
        </Link>
      </motion.div>

      <div className="space-y-8">
        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="card"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">1. Khái niệm Bundle</h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            <strong>Bundle</strong> là quá trình gộp nhiều file JavaScript (và đôi khi CSS, hình ảnh, assets) 
            thành một hoặc vài file duy nhất.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong>Mục đích:</strong> tối ưu hiệu suất tải trang và hỗ trợ module ES6 cho trình duyệt cũ.
          </p>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-6 mb-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Tại sao cần bundling?</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="mr-3 text-xl sm:text-2xl">🚀</span>
                <div>
                  <strong>Giảm HTTP requests:</strong> Trình duyệt chỉ load 1 file thay vì 10-20 file
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-2xl">📦</span>
                <div>
                  <strong>Hỗ trợ module:</strong> Các file ES6 module (import/export) cần được gộp để trình duyệt hiểu
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-2xl">⚡</span>
                <div>
                  <strong>Tối ưu code:</strong> Minify (nén), tree-shaking (loại code không dùng), code splitting
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-2xl">💻</span>
                <div>
                  <strong>Dev experience:</strong> HMR (Hot Module Replacement), dev server, source map
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-semibold text-yellow-900 mb-2">Ví dụ:</h4>
            <CodeBlock
              code={`src/
 ├─ index.js
 ├─ utils.js
 └─ api.js

↓ Sau bundling ↓

dist/
 └─ bundle.js  (1 file duy nhất)`}
            />
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="card"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">2. Cơ chế hoạt động của bundler</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Bundler thực hiện các bước sau để tạo ra bundle:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <div className="flex items-center mb-2">
                <span className="text-2xl sm:text-3xl mr-3">1️⃣</span>
                <h4 className="font-bold text-gray-800">Entry point</h4>
              </div>
              <p className="text-gray-600 text-sm">Bắt đầu từ 1 file chính (ví dụ index.js)</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <div className="flex items-center mb-2">
                <span className="text-3xl mr-3">2️⃣</span>
                <h4 className="font-bold text-gray-800">Dependency graph</h4>
              </div>
              <p className="text-gray-600 text-sm">Phân tích tất cả các import/require trong project</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <div className="flex items-center mb-2">
                <span className="text-3xl mr-3">3️⃣</span>
                <h4 className="font-bold text-gray-800">Transform</h4>
              </div>
              <p className="text-gray-600 text-sm">Chuyển đổi code (ES6→ES5, CSS/SCSS→CSS, JSX→JS)</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
              <div className="flex items-center mb-2">
                <span className="text-3xl mr-3">4️⃣</span>
                <h4 className="font-bold text-gray-800">Tree-shaking</h4>
              </div>
              <p className="text-gray-600 text-sm">Loại bỏ code không được sử dụng</p>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <div className="flex items-center mb-2">
                <span className="text-3xl mr-3">5️⃣</span>
                <h4 className="font-bold text-gray-800">Minify</h4>
              </div>
              <p className="text-gray-600 text-sm">Nén code để giảm dung lượng</p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
              <div className="flex items-center mb-2">
                <span className="text-3xl mr-3">6️⃣</span>
                <h4 className="font-bold text-gray-800">Bundle output</h4>
              </div>
              <p className="text-gray-600 text-sm">Tạo 1 hoặc nhiều file JS/CSS để browser load</p>
            </div>
          </div>

          <div className="bg-gray-800 text-white rounded-lg p-6">
            <h4 className="font-semibold text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 text-center">Sơ đồ cơ chế bundler</h4>
            <pre className="text-center text-sm overflow-x-auto">
{`[src/index.js] → [parse imports] → [dependency graph]
      ↓
[transform + tree-shaking + minify]
      ↓
[bundle.js] → [browser load]`}
            </pre>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="card"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">3. Các bundler phổ biến</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {bundlers.map((bundler, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className={`inline-block bg-gradient-to-r ${bundler.color} text-white px-4 py-2 rounded-full font-bold mb-3`}>
                  <span className="text-xl sm:text-2xl mr-2">{bundler.icon}</span>
                  {bundler.name}
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold text-gray-700">Ưu điểm:</span>
                    <p className="text-gray-600">{bundler.pros}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Khi nào dùng:</span>
                    <p className="text-gray-600">{bundler.use}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 4 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="card"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">4. Setup Bundler – Ví dụ Webpack</h2>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Bước 1: Khởi tạo project</h4>
              <CodeBlock
                code={`mkdir my-project
cd my-project
npm init -y`}
              />
            </div>

            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Bước 2: Cài đặt Webpack</h4>
              <CodeBlock
                code={`npm install --save-dev webpack webpack-cli`}
              />
            </div>

            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Bước 3: Cấu trúc project</h4>
              <CodeBlock
                code={`my-project/
 ├─ src/
 │   ├─ index.js
 │   └─ utils.js
 └─ dist/`}
              />
            </div>

            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Bước 4: Tạo file code</h4>
              <CodeBlock
                title="src/index.js"
                code={`import { greet } from './utils.js';

console.log(greet('Capybara'));`}
              />
              <CodeBlock
                title="src/utils.js"
                code={`export function greet(name) {
    return \`Hello, \${name}!\`;
}`}
              />
            </div>

            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Bước 5: Cấu hình Webpack</h4>
              <CodeBlock
                title="webpack.config.js"
                code={`const path = require('path');

module.exports = {
  entry: './src/index.js', // file chính
  output: {
    filename: 'bundle.js', // file sau khi bundle
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development', // production để minify
};`}
              />
            </div>

            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Bước 6: Chạy Webpack</h4>
              <CodeBlock
                code={`npx webpack`}
              />
              <p className="text-gray-700 mt-2">Kết quả: tạo <code className="bg-gray-200 px-2 py-1 rounded">dist/bundle.js</code></p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Bước 7: Nhúng vào HTML</h4>
              <CodeBlock
                code={`<script src="dist/bundle.js"></script>`}
              />
            </div>
          </div>
        </motion.div>

        {/* Section 5 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="card"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">5. Advanced Features trong bundler</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-bold text-blue-900 mb-2">🗜️ Minify</h4>
              <p className="text-blue-800">Nén code để giảm dung lượng file</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-bold text-green-900 mb-2">🌳 Tree-shaking</h4>
              <p className="text-green-800">Loại bỏ code không được sử dụng</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-bold text-purple-900 mb-2">✂️ Code splitting</h4>
              <p className="text-purple-800">Tách bundle lớn thành nhiều file nhỏ (lazy-loading)</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="font-bold text-orange-900 mb-2">🔥 HMR</h4>
              <p className="text-orange-800">Hot Module Replacement - cập nhật module không reload</p>
            </div>

            <div className="bg-pink-50 rounded-lg p-4">
              <h4 className="font-bold text-pink-900 mb-2">🗺️ Source maps</h4>
              <p className="text-pink-800">Debug code gốc dễ dàng</p>
            </div>
          </div>

          <CodeBlock
            title="Ví dụ Code Splitting với Webpack"
            code={`// Dynamic import
button.addEventListener('click', async () => {
    const module = await import('./heavyModule.js');
    module.load();
});`}
          />
        </motion.div>

        {/* Section 6 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="card"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">6. Alternative Bundler – Parcel (Zero-config)</h2>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
            <p className="text-green-900">
              <strong>Parcel</strong> là bundler cực nhanh, không cần config!
            </p>
          </div>

          <CodeBlock
            title="Cài Parcel"
            code={`npm install --save-dev parcel`}
          />

          <CodeBlock
            title="HTML"
            code={`<script type="module" src="./src/index.js"></script>`}
          />

          <CodeBlock
            title="Chạy dev server"
            code={`npx parcel index.html`}
          />

          <p className="text-gray-700 mt-4">
            ✅ Parcel tự động bundle JS/CSS, dev server nóng, HMR - không cần config gì cả!
          </p>
        </motion.div>

        {/* Section 7 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="card"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">7. Ưu nhược điểm của bundling</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300">
              <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                <span className="text-3xl mr-2">✅</span> Ưu điểm
              </h3>
              <ul className="space-y-2 text-green-900">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Giảm HTTP request</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Hỗ trợ module ES6</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Minify, tree-shaking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Dev experience (HMR, dev server)</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
              <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                <span className="text-3xl mr-2">⚠️</span> Nhược điểm
              </h3>
              <ul className="space-y-2 text-red-900">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cấu hình ban đầu phức tạp (Webpack)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Build time lâu với project lớn</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bundle quá lớn nếu không code splitting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Phụ thuộc nhiều plugin/tool</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="card bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">✅ Tóm tắt</h2>
          <div className="space-y-4 text-lg">
            <div className="bg-white/20 rounded-lg p-4">
              <strong>Bundle</strong> = gộp nhiều file JS/CSS thành 1 hoặc vài file → browser load nhanh
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <strong>Setup:</strong> chọn bundler → cấu hình entry/output → build → nhúng HTML
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <strong>Bundler hiện đại:</strong> Webpack, Rollup, Parcel, Vite
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <strong>Advanced:</strong> minify, tree-shaking, code splitting, HMR
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="card bg-gradient-to-r from-green-500 to-teal-600 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Đã hiểu rõ về Bundling?</h3>
          <p className="text-xl mb-6">Làm bài quiz để kiểm tra kiến thức của bạn!</p>
          <Link to="/quiz/bundling">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Bắt đầu Quiz ngay
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Bundling;

