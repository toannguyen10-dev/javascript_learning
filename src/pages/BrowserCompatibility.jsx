import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock';
import { FaQuestionCircle, FaArrowLeft, FaChrome, FaFirefox, FaSafari, FaEdge } from 'react-icons/fa';

const BrowserCompatibility = () => {
  const compatibilityData = [
    {
      feature: "Arrow Functions",
      esVersion: "ES2015",
      year: "2015",
      browsers: {
        chrome: "45 (2015)",
        firefox: "22 (2013)",
        safari: "10 (2016)",
        edge: "12 (2015)"
      },
      description: "Arrow functions được hỗ trợ sớm nhất bởi Firefox (2013), sau đó Chrome và Edge (2015), Safari (2016)",
      example: `// Arrow function
const add = (a, b) => a + b;
const square = x => x * x;
const greet = () => console.log('Hello');`
    },
    {
      feature: "let & const",
      esVersion: "ES2015",
      year: "2015",
      browsers: {
        chrome: "49 (2016)",
        firefox: "44 (2016)",
        safari: "10 (2016)",
        edge: "11 (2015)"
      },
      description: "let và const được hỗ trợ rộng rãi từ 2015-2016. Edge hỗ trợ sớm nhất (2015)",
      example: `// let & const
let count = 0;
const PI = 3.14;

if (true) {
  let x = 10; // block scope
  const y = 20;
}`
    },
    {
      feature: "Template Literals",
      esVersion: "ES2015",
      year: "2015",
      browsers: {
        chrome: "41 (2015)",
        firefox: "34 (2014)",
        safari: "9 (2015)",
        edge: "12 (2015)"
      },
      description: "Template literals được Firefox hỗ trợ sớm nhất (2014), các browser khác vào 2015",
      example: `// Template literals
const name = "JavaScript";
const message = \`Hello, \${name}!\`;
const multiLine = \`Line 1
Line 2
Line 3\`;`
    },
    {
      feature: "Destructuring",
      esVersion: "ES2015",
      year: "2015",
      browsers: {
        chrome: "49 (2016)",
        firefox: "41 (2015)",
        safari: "8 (2014)",
        edge: "14 (2016)"
      },
      description: "Safari hỗ trợ sớm nhất (2014), Firefox (2015), Chrome và Edge (2016)",
      example: `// Destructuring
const {name, age} = {name: 'John', age: 30};
const [first, second] = [1, 2, 3];
const {a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4};`
    },
    {
      feature: "Classes",
      esVersion: "ES2015",
      year: "2015",
      browsers: {
        chrome: "49 (2016)",
        firefox: "45 (2016)",
        safari: "10 (2016)",
        edge: "13 (2016)"
      },
      description: "Classes được hỗ trợ đồng loạt vào 2016 bởi tất cả các browser chính",
      example: `// Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

class Dog extends Animal {
  speak() {
    return \`\${this.name} barks\`;
  }
}`
    },
    {
      feature: "Promises",
      esVersion: "ES2015",
      year: "2015",
      browsers: {
        chrome: "32 (2014)",
        firefox: "29 (2014)",
        safari: "8 (2014)",
        edge: "12 (2015)"
      },
      description: "Promises được hỗ trợ sớm (2014) bởi Chrome, Firefox, Safari. Edge vào 2015",
      example: `// Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success!'), 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));`
    },
    {
      feature: "Async/Await",
      esVersion: "ES2017",
      year: "2017",
      browsers: {
        chrome: "55 (2016)",
        firefox: "52 (2017)",
        safari: "10.1 (2017)",
        edge: "14 (2016)"
      },
      description: "Async/await được Chrome và Edge hỗ trợ sớm (2016), Firefox và Safari (2017)",
      example: `// Async/Await
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}`
    },
    {
      feature: "Array.includes()",
      esVersion: "ES2016",
      year: "2016",
      browsers: {
        chrome: "47 (2015)",
        firefox: "43 (2015)",
        safari: "9 (2015)",
        edge: "14 (2016)"
      },
      description: "Array.includes() được hỗ trợ sớm (2015) bởi Chrome, Firefox, Safari",
      example: `// Array.includes
const fruits = ['apple', 'banana', 'orange'];
fruits.includes('banana'); // true
fruits.includes('grape');  // false`
    },
    {
      feature: "Object.entries() / Object.values()",
      esVersion: "ES2017",
      year: "2017",
      browsers: {
        chrome: "54 (2016)",
        firefox: "47 (2016)",
        safari: "10.1 (2017)",
        edge: "14 (2016)"
      },
      description: "Object.entries/values được hỗ trợ từ 2016-2017",
      example: `// Object.entries/values
const obj = {a: 1, b: 2, c: 3};
Object.entries(obj);  // [['a', 1], ['b', 2], ['c', 3]]
Object.values(obj);   // [1, 2, 3]
Object.keys(obj);     // ['a', 'b', 'c']`
    },
    {
      feature: "Optional Chaining (?.)",
      esVersion: "ES2020",
      year: "2020",
      browsers: {
        chrome: "80 (2020)",
        firefox: "74 (2020)",
        safari: "13.1 (2020)",
        edge: "80 (2020)"
      },
      description: "Optional chaining được hỗ trợ đồng loạt vào 2020 bởi tất cả browser",
      example: `// Optional chaining
const user = {
  profile: {
    name: 'John',
    address: {
      city: 'Hanoi'
    }
  }
};

user?.profile?.name;           // "John"
user?.profile?.address?.city;  // "Hanoi"
user?.profile?.phone?.number;   // undefined (không lỗi)`
    },
    {
      feature: "Nullish Coalescing (??)",
      esVersion: "ES2020",
      year: "2020",
      browsers: {
        chrome: "80 (2020)",
        firefox: "72 (2020)",
        safari: "13.1 (2020)",
        edge: "80 (2020)"
      },
      description: "Nullish coalescing được hỗ trợ đồng loạt vào 2020",
      example: `// Nullish coalescing
const value1 = null ?? 'default';      // "default"
const value2 = undefined ?? 'default'; // "default"
const value3 = 0 ?? 'default';        // 0 (không phải "default")
const value4 = '' ?? 'default';        // '' (không phải "default")`
    },
    {
      feature: "BigInt",
      esVersion: "ES2020",
      year: "2020",
      browsers: {
        chrome: "67 (2018)",
        firefox: "68 (2019)",
        safari: "14 (2020)",
        edge: "79 (2020)"
      },
      description: "BigInt được Chrome hỗ trợ sớm nhất (2018), Firefox (2019), Safari và Edge (2020)",
      example: `// BigInt
const bigNumber = 9007199254740991n;
const huge = BigInt(9007199254740991);
const result = bigNumber + 1n; // 9007199254740992n`
    },
    {
      feature: "Array.flat() / flatMap()",
      esVersion: "ES2019",
      year: "2019",
      browsers: {
        chrome: "69 (2018)",
        firefox: "62 (2018)",
        safari: "12 (2018)",
        edge: "79 (2020)"
      },
      description: "Array.flat/flatMap được hỗ trợ sớm (2018) bởi Chrome, Firefox, Safari",
      example: `// Array.flat
const nested = [1, [2, [3, 4]]];
nested.flat();        // [1, 2, [3, 4]]
nested.flat(2);       // [1, 2, 3, 4]

// Array.flatMap
[1, 2, 3].flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]`
    },
    {
      feature: "String.replaceAll()",
      esVersion: "ES2021",
      year: "2021",
      browsers: {
        chrome: "85 (2020)",
        firefox: "77 (2020)",
        safari: "13.1 (2020)",
        edge: "85 (2020)"
      },
      description: "String.replaceAll() được hỗ trợ đồng loạt vào 2020",
      example: `// String.replaceAll
const text = 'hello world world';
text.replaceAll('world', 'JavaScript');
// "hello JavaScript JavaScript"

// Trước ES2021 phải dùng regex
text.replace(/world/g, 'JavaScript');`
    },
    {
      feature: "Top-level await",
      esVersion: "ES2022",
      year: "2022",
      browsers: {
        chrome: "89 (2021)",
        firefox: "89 (2021)",
        safari: "15 (2021)",
        edge: "89 (2021)"
      },
      description: "Top-level await được hỗ trợ đồng loạt vào 2021",
      example: `// Top-level await (trong module)
// config.js
const config = await fetch('/api/config').then(r => r.json());
export default config;

// main.js
import config from './config.js';
console.log(config);`
    },
    {
      feature: "Class Private Fields (#)",
      esVersion: "ES2022",
      year: "2022",
      browsers: {
        chrome: "74 (2019)",
        firefox: "90 (2021)",
        safari: "14.1 (2021)",
        edge: "79 (2020)"
      },
      description: "Private fields được Chrome hỗ trợ sớm nhất (2019), các browser khác (2020-2021)",
      example: `// Class private fields
class Counter {
  #count = 0;  // private field
  
  increment() {
    this.#count++;
  }
  
  getCount() {
    return this.#count;
  }
  
  #privateMethod() {
    return 'private';
  }
}`
    },
    {
      feature: "Array.findLast() / findLastIndex()",
      esVersion: "ES2023",
      year: "2023",
      browsers: {
        chrome: "97 (2022)",
        firefox: "104 (2022)",
        safari: "15.4 (2022)",
        edge: "97 (2022)"
      },
      description: "findLast/findLastIndex được hỗ trợ đồng loạt vào 2022",
      example: `// Array.findLast
const numbers = [1, 2, 3, 4, 5];
numbers.findLast(x => x > 2);        // 5
numbers.findLastIndex(x => x > 2);   // 4`
    },
    {
      feature: "Array.toSorted() / toReversed()",
      esVersion: "ES2023",
      year: "2023",
      browsers: {
        chrome: "110 (2023)",
        firefox: "115 (2023)",
        safari: "16 (2022)",
        edge: "110 (2023)"
      },
      description: "Immutable array methods được Safari hỗ trợ sớm (2022), các browser khác (2023)",
      example: `// Immutable array methods
const arr = [3, 1, 4, 1, 5];
arr.toSorted();     // [1, 1, 3, 4, 5] (arr không đổi)
arr.toReversed();   // [5, 1, 4, 1, 3] (arr không đổi)
arr.toSpliced(1, 2, 10); // [3, 10, 1, 5] (arr không đổi)`
    }
  ];

  const BrowserIcon = ({ browser, version }) => {
    const icons = {
      chrome: FaChrome,
      firefox: FaFirefox,
      safari: FaSafari,
      edge: FaEdge
    };
    const colors = {
      chrome: "text-blue-600",
      firefox: "text-orange-600",
      safari: "text-blue-500",
      edge: "text-blue-700"
    };
    const Icon = icons[browser];
    return (
      <div className="flex items-center space-x-2">
        <Icon className={colors[browser]} />
        <span className="text-sm font-semibold">{version}</span>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Link to="/" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6">
        <FaArrowLeft />
        <span>Về trang chủ</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
          Browser Compatibility Guide
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Tìm hiểu các JavaScript functions tương thích với trình duyệt từ năm nào
        </p>
        <p className="text-lg text-gray-500">
          Hỗ trợ Chrome, Firefox, Safari, Edge
        </p>
        
        <Link to="/quiz/browser-compatibility" className="inline-block mt-6">
          <button className="btn-primary flex items-center space-x-2 mx-auto">
            <FaQuestionCircle />
            <span>Làm bài quiz</span>
          </button>
        </Link>
      </motion.div>

      {/* Info Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card bg-gradient-to-r from-purple-500 to-pink-600 text-white mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">📊 Lưu ý quan trọng</h2>
        <ul className="space-y-2 text-purple-50">
          <li>• Các năm được liệt kê là năm tính năng được hỗ trợ chính thức</li>
          <li>• Một số tính năng có thể được hỗ trợ sớm hơn trong các bản beta</li>
          <li>• Để kiểm tra tương thích chi tiết, sử dụng <a href="https://caniuse.com" target="_blank" rel="noopener noreferrer" className="underline font-bold">caniuse.com</a></li>
          <li>• Các tính năng ES2015+ thường cần transpiler (Babel) cho browser cũ</li>
        </ul>
      </motion.div>

      {/* Compatibility Cards */}
      <div className="space-y-6">
        {compatibilityData.map((item, index) => (
          <motion.div
            key={item.feature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="card hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.feature}
                </h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.esVersion}
                  </span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Năm: {item.year}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-4">{item.description}</p>

            {/* Browser Support */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center space-x-2">
                <span>🌐 Hỗ trợ trình duyệt:</span>
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <BrowserIcon browser="chrome" version={item.browsers.chrome} />
                <BrowserIcon browser="firefox" version={item.browsers.firefox} />
                <BrowserIcon browser="safari" version={item.browsers.safari} />
                <BrowserIcon browser="edge" version={item.browsers.edge} />
              </div>
            </div>

            <CodeBlock
              title={`Ví dụ: ${item.feature}`}
              code={item.example}
            />
          </motion.div>
        ))}
      </div>

      {/* Summary Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="card mt-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          📋 Bảng tóm tắt tương thích
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                <th className="border p-3 text-left">Tính năng</th>
                <th className="border p-3 text-left">ES Version</th>
                <th className="border p-3 text-left">Năm</th>
                <th className="border p-3 text-left">Chrome</th>
                <th className="border p-3 text-left">Firefox</th>
                <th className="border p-3 text-left">Safari</th>
                <th className="border p-3 text-left">Edge</th>
              </tr>
            </thead>
            <tbody>
              {compatibilityData.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border p-3 font-semibold">{item.feature}</td>
                  <td className="border p-3">{item.esVersion}</td>
                  <td className="border p-3">{item.year}</td>
                  <td className="border p-3 text-sm">{item.browsers.chrome}</td>
                  <td className="border p-3 text-sm">{item.browsers.firefox}</td>
                  <td className="border p-3 text-sm">{item.browsers.safari}</td>
                  <td className="border p-3 text-sm">{item.browsers.edge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="card bg-gradient-to-r from-purple-500 via-pink-600 to-red-500 text-white text-center mt-8"
      >
        <h3 className="text-3xl font-bold mb-4">Đã hiểu rõ về browser compatibility?</h3>
        <p className="text-xl mb-6">Làm bài quiz để kiểm tra kiến thức của bạn!</p>
        <Link to="/quiz/browser-compatibility">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Bắt đầu Quiz ngay
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default BrowserCompatibility;

