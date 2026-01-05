import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock';
import { FaQuestionCircle, FaArrowLeft } from 'react-icons/fa';

const ESFeatures = () => {
  const esVersions = [
    {
      version: "ES2015 (ES6)",
      year: "2015",
      color: "from-yellow-400 to-orange-500",
      features: [
        { name: "let / const", desc: "Khai báo biến theo block scope, thay vì var global/function scope" },
        { name: "Arrow functions", desc: "Cú pháp ngắn gọn, this giữ nguyên ngữ cảnh" },
        { name: "Template literals", desc: "Chuỗi có thể nhúng biến: `Hello ${name}`" },
        { name: "Default parameters", desc: "Đặt giá trị mặc định cho tham số hàm" },
        { name: "Destructuring", desc: "Tách giá trị từ array/object: const {a,b} = obj" },
        { name: "Spread & Rest", desc: "...args dùng copy array, merge object, hoặc gộp tham số" },
        { name: "Classes", desc: "Tạo class & kế thừa: class A extends B {}" },
        { name: "Modules", desc: "Tách file JS, import/export" },
        { name: "Promises", desc: "Xử lý async thay callback" },
        { name: "Enhanced object literals", desc: "Viết object ngắn gọn: {x, y, method(){}}" }
      ],
      example: `// let/const
const PI = 3.14;
let count = 0;

// Arrow function
const sum = (a, b) => a + b;

// Template literal
const name = "JS";
console.log(\`Hello \${name}\`);

// Destructuring
const {x, y} = {x: 10, y: 20};

// Spread
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];

// Class
class Animal {
  constructor(name) {
    this.name = name;
  }
}`
    },
    {
      version: "ES2016 (ES7)",
      year: "2016",
      color: "from-green-400 to-teal-500",
      features: [
        { name: "Array.includes(value)", desc: "Kiểm tra phần tử có trong array" },
        { name: "Exponentiation operator **", desc: "2 ** 3 = 8, thay Math.pow(2,3)" }
      ],
      example: `// Array.includes
[1, 2, 3].includes(2); // true

// Exponentiation
2 ** 3; // 8
2 ** 10; // 1024`
    },
    {
      version: "ES2017 (ES8)",
      year: "2017",
      color: "from-blue-400 to-indigo-500",
      features: [
        { name: "Async/Await", desc: "Xử lý Promise dễ đọc hơn, giống code đồng bộ" },
        { name: "Object.entries() / Object.values()", desc: "Lấy key-value/object values" },
        { name: "String padding", desc: "padStart() / padEnd(), thêm ký tự để căn chỉnh" },
        { name: "Trailing commas", desc: "Cho phép dấu phẩy cuối trong function parameters" }
      ],
      example: `// Async/Await
async function fetchData() {
  const response = await fetch('/api');
  const data = await response.json();
  return data;
}

// Object.entries/values
const obj = {a: 1, b: 2};
Object.entries(obj); // [['a', 1], ['b', 2]]
Object.values(obj);  // [1, 2]

// String padding
'5'.padStart(3, '0');  // "005"
'hi'.padEnd(5, '!');   // "hi!!!"`
    },
    {
      version: "ES2018 (ES9)",
      year: "2018",
      color: "from-purple-400 to-pink-500",
      features: [
        { name: "Rest/Spread cho object", desc: "{...obj}" },
        { name: "Asynchronous iteration", desc: "for await (const x of arr)" },
        { name: "Promise.finally()", desc: "Thực thi code sau khi Promise hoàn thành" },
        { name: "RegExp nâng cao", desc: "lookbehind, named capture groups, dotAll flag" }
      ],
      example: `// Object spread/rest
const obj1 = {a: 1, b: 2};
const obj2 = {...obj1, c: 3}; // {a:1, b:2, c:3}

// Async iteration
async function process() {
  for await (const item of asyncIterable) {
    console.log(item);
  }
}

// Promise.finally
fetch('/api')
  .then(res => res.json())
  .catch(err => console.error(err))
  .finally(() => console.log('Done'));`
    },
    {
      version: "ES2019 (ES10)",
      year: "2019",
      color: "from-red-400 to-pink-500",
      features: [
        { name: "Array.flat() / flatMap()", desc: "Làm phẳng mảng đa chiều" },
        { name: "Object.fromEntries()", desc: "Tạo object từ entries" },
        { name: "String.trimStart() / trimEnd()", desc: "Xóa khoảng trắng đầu/cuối" },
        { name: "Optional catch binding", desc: "catch {} không cần parameter" },
        { name: "Symbol.description", desc: "Lấy mô tả symbol" }
      ],
      example: `// Array.flat
[1, [2, [3, 4]]].flat(2); // [1, 2, 3, 4]

// Array.flatMap
[1, 2, 3].flatMap(x => [x, x * 2]); 
// [1, 2, 2, 4, 3, 6]

// Object.fromEntries
const entries = [['a', 1], ['b', 2]];
Object.fromEntries(entries); // {a: 1, b: 2}

// String trim
'  hello  '.trimStart(); // "hello  "
'  hello  '.trimEnd();   // "  hello"`
    },
    {
      version: "ES2020 (ES11)",
      year: "2020",
      color: "from-indigo-400 to-purple-500",
      features: [
        { name: "BigInt", desc: "Số nguyên lớn: 123n" },
        { name: "Nullish coalescing ??", desc: "Chỉ kiểm null/undefined" },
        { name: "Optional chaining ?.", desc: "Truy cập property an toàn: obj?.prop" },
        { name: "Dynamic import", desc: "import('module.js')" },
        { name: "Promise.allSettled()", desc: "Đợi tất cả Promise hoàn thành" },
        { name: "globalThis", desc: "Tham chiếu global object" }
      ],
      example: `// BigInt
const bigNum = 9007199254740991n;
const huge = BigInt(9007199254740991);

// Nullish coalescing
const value = null ?? 'default';     // "default"
const value2 = 0 ?? 'default';       // 0
const value3 = '' ?? 'default';      // ''

// Optional chaining
const user = {profile: {name: 'John'}};
user?.profile?.name;        // "John"
user?.address?.street;      // undefined

// Dynamic import
const module = await import('./utils.js');

// Promise.allSettled
Promise.allSettled([
  Promise.resolve(1),
  Promise.reject('error'),
  Promise.resolve(3)
]); // Trả về tất cả kết quả`
    },
    {
      version: "ES2021 (ES12)",
      year: "2021",
      color: "from-teal-400 to-cyan-500",
      features: [
        { name: "String.replaceAll()", desc: "Thay thế tất cả occurrence" },
        { name: "Logical assignment", desc: "&&=, ||=, ??=" },
        { name: "Numeric separators", desc: "1_000_000 cho dễ đọc" },
        { name: "WeakRefs & FinalizationRegistry", desc: "Quản lý bộ nhớ" },
        { name: "Promise.any()", desc: "Trả về Promise đầu tiên resolve thành công" }
      ],
      example: `// String.replaceAll
'hello world world'.replaceAll('world', 'JS');
// "hello JS JS"

// Logical assignment
let x = 1;
x &&= 2;  // x = x && 2
x ||= 5;  // x = x || 5
x ??= 10; // x = x ?? 10

// Numeric separators
const billion = 1_000_000_000;
const bytes = 0b1010_0001_1000_0101;

// Promise.any
Promise.any([
  Promise.reject('err1'),
  Promise.resolve('success'),
  Promise.resolve('success2')
]); // Trả về 'success'`
    },
    {
      version: "ES2022 (ES13)",
      year: "2022",
      color: "from-orange-400 to-red-500",
      features: [
        { name: "Class fields & private methods", desc: "#private cho class" },
        { name: "Top-level await", desc: "await ở top level trong module" },
        { name: "Ergonomic brand checks", desc: "Kiểm tra private field" },
        { name: "Object.hasOwn()", desc: "Thay thế hasOwnProperty" },
        { name: "Error.cause", desc: "Thêm nguyên nhân cho error" }
      ],
      example: `// Class private fields
class Counter {
  #count = 0;  // private field
  
  increment() {
    this.#count++;
  }
  
  #privateMethod() {
    return this.#count;
  }
}

// Top-level await (trong module)
const data = await fetch('/api');

// Object.hasOwn
Object.hasOwn(obj, 'property');

// Error.cause
throw new Error('Failed', {
  cause: originalError
});`
    },
    {
      version: "ES2023 (ES14)",
      year: "2023",
      color: "from-pink-400 to-rose-500",
      features: [
        { name: "Array.findLast() / findLastIndex()", desc: "Tìm từ cuối mảng" },
        { name: "Hashbang #!", desc: "Hỗ trợ shebang cho CLI scripts" },
        { name: "Array.toSorted() / toReversed() / toSpliced()", desc: "Immutable array methods" }
      ],
      example: `// findLast/findLastIndex
[1, 2, 3, 4, 5].findLast(x => x > 2);  // 5
[1, 2, 3, 4, 5].findLastIndex(x => x > 2);  // 4

// Immutable array methods
const arr = [3, 1, 4, 1, 5];
arr.toSorted();   // [1, 1, 3, 4, 5] (arr unchanged)
arr.toReversed(); // [5, 1, 4, 1, 3] (arr unchanged)
arr.toSpliced(1, 2, 10); // [3, 10, 1, 5]`
    },
    {
      version: "ES2024 (ES15)",
      year: "2024",
      color: "from-cyan-400 to-blue-500",
      features: [
        { name: "Temporal API", desc: "Xử lý thời gian chính xác, thay Date" },
        { name: "Pattern matching", desc: "Switch expressions nâng cao" },
        { name: "Array.groupBy() / groupByToMap()", desc: "Nhóm array theo tiêu chí" },
        { name: "Top-level await cải tiến", desc: "Tối ưu performance" }
      ],
      example: `// Array grouping (proposal)
const people = [
  {name: 'John', age: 25},
  {name: 'Jane', age: 30},
  {name: 'Bob', age: 25}
];

// Nhóm theo tuổi
const grouped = people.reduce((acc, person) => {
  const key = person.age;
  if (!acc[key]) acc[key] = [];
  acc[key].push(person);
  return acc;
}, {});

// Temporal API (đang proposal)
// const now = Temporal.Now.instant();
// const date = Temporal.PlainDate.from('2024-12-31');`
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3 sm:mb-4 px-2">
          ES2015 - ES2024 Features
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
          Khám phá tất cả tính năng JavaScript từ 2015 đến 2024
        </p>
        
        <Link to="/quiz/es-features" className="inline-block mt-4 sm:mt-6">
          <button className="btn-primary flex items-center space-x-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
            <FaQuestionCircle />
            <span>Làm bài quiz</span>
          </button>
        </Link>
      </motion.div>

      <div className="space-y-6 sm:space-y-8">
        {esVersions.map((version, index) => (
          <motion.div
            key={version.version}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <div className={`inline-block bg-gradient-to-r ${version.color} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg lg:text-xl mb-3 sm:mb-4`}>
              {version.version} - {version.year}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {version.features.map((feature, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-3 sm:p-4 border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">{feature.name}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>

            <CodeBlock
              title={`Ví dụ ${version.version}`}
              code={version.example}
            />
          </motion.div>
        ))}

        {/* Summary Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="card"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center px-2">
            📊 Bảng so sánh tổng hợp
          </h2>
          
          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <table className="w-full border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                  <th className="border p-2 sm:p-3 text-left text-xs sm:text-sm">Phiên bản</th>
                  <th className="border p-2 sm:p-3 text-left text-xs sm:text-sm">Năm</th>
                  <th className="border p-2 sm:p-3 text-left text-xs sm:text-sm">Feature nổi bật</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-yellow-50">
                  <td className="border p-2 sm:p-3 font-bold text-xs sm:text-sm">ES2015 (ES6)</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">2015</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">let/const, arrow fn, class, Promise, module</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border p-2 sm:p-3 font-bold text-xs sm:text-sm">ES2016 (ES7)</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">2016</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">Array.includes, ** operator</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border p-2 sm:p-3 font-bold text-xs sm:text-sm">ES2017 (ES8)</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">2017</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">Async/await, Object.entries/values</td>
                </tr>
                <tr className="bg-purple-50">
                  <td className="border p-2 sm:p-3 font-bold text-xs sm:text-sm">ES2018 (ES9)</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">2018</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">Object spread/rest, for-await-of</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="border p-2 sm:p-3 font-bold text-xs sm:text-sm">ES2019 (ES10)</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">2019</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">Array.flat/flatMap, Object.fromEntries</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="border p-2 sm:p-3 font-bold text-xs sm:text-sm">ES2020 (ES11)</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">2020</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">BigInt, ??, ?., dynamic import</td>
                </tr>
                <tr className="bg-teal-50">
                  <td className="border p-2 sm:p-3 font-bold text-xs sm:text-sm">ES2021 (ES12)</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">2021</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">replaceAll, logical assignment, Promise.any</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="border p-2 sm:p-3 font-bold text-xs sm:text-sm">ES2022 (ES13)</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">2022</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">Class private, top-level await</td>
                </tr>
                <tr className="bg-pink-50">
                  <td className="border p-2 sm:p-3 font-bold text-xs sm:text-sm">ES2023 (ES14)</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">2023</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">findLast, toSorted/toReversed</td>
                </tr>
                <tr className="bg-cyan-50">
                  <td className="border p-2 sm:p-3 font-bold text-xs sm:text-sm">ES2024 (ES15)</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">2024</td>
                  <td className="border p-2 sm:p-3 text-xs sm:text-sm">Temporal API, Array groupBy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="card bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-center p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Đã hiểu rõ các tính năng ES?</h3>
          <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">Làm bài quiz để kiểm tra kiến thức của bạn!</p>
          <Link to="/quiz/es-features">
            <button className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg lg:text-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Bắt đầu Quiz ngay
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ESFeatures;

