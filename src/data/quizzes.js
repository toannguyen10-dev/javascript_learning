export const eventLoopQuiz = [
  {
    question: "JavaScript là ngôn ngữ gì?",
    options: [
      "Multi-threaded",
      "Single-threaded",
      "Dual-threaded",
      "No-threaded"
    ],
    correctAnswer: 1,
    explanation: "JavaScript chạy trên một luồng duy nhất (single-threaded), nghĩa là một lúc chỉ thực thi một lệnh."
  },
  {
    question: "Call Stack hoạt động theo cơ chế nào?",
    options: [
      "FIFO (First In First Out)",
      "LIFO (Last In First Out)",
      "Random",
      "Priority Queue"
    ],
    correctAnswer: 1,
    explanation: "Call Stack hoạt động theo cơ chế LIFO - hàm được gọi sau cùng sẽ được thực thi và pop ra trước."
  },
  {
    question: "Kết quả của đoạn code sau là gì?\nconsole.log('A');\nsetTimeout(() => console.log('B'), 0);\nPromise.resolve().then(() => console.log('C'));\nconsole.log('D');",
    options: [
      "A, B, C, D",
      "A, D, C, B",
      "A, D, B, C",
      "A, C, D, B"
    ],
    correctAnswer: 1,
    explanation: "Thứ tự: A (sync) → D (sync) → C (microtask) → B (macrotask). Promise luôn được xử lý trước setTimeout."
  },
  {
    question: "Micro-task queue bao gồm những gì?",
    options: [
      "setTimeout, setInterval",
      "Promise, async/await, queueMicrotask",
      "I/O events, UI rendering",
      "XMLHttpRequest, fetch"
    ],
    correctAnswer: 1,
    explanation: "Micro-task queue bao gồm Promise.then(), async/await, queueMicrotask, và MutationObserver."
  },
  {
    question: "Event Loop ưu tiên thực thi theo thứ tự nào?",
    options: [
      "Macro-task → Micro-task → Call Stack",
      "Call Stack → Macro-task → Micro-task",
      "Call Stack → Micro-task → Macro-task",
      "Micro-task → Call Stack → Macro-task"
    ],
    correctAnswer: 2,
    explanation: "Event Loop luôn ưu tiên: Call Stack (đồng bộ) → tất cả Micro-tasks → 1 Macro-task → lặp lại."
  },
  {
    question: "Khi gặp await, điều gì xảy ra?",
    options: [
      "Hàm chạy tiếp ngay lập tức",
      "Hàm async tạm dừng, callback vào micro-task queue",
      "Hàm async dừng hẳn",
      "Hàm async vào macro-task queue"
    ],
    correctAnswer: 1,
    explanation: "Khi gặp await, hàm async tạm dừng để main thread xử lý task khác, phần còn lại được đưa vào micro-task queue."
  },
  {
    question: "setTimeout(..., 0) có nghĩa là gì?",
    options: [
      "Thực thi ngay lập tức",
      "Thực thi sau khi call stack rỗng và tất cả micro-tasks xong",
      "Không bao giờ thực thi",
      "Thực thi sau 0.1 giây"
    ],
    correctAnswer: 1,
    explanation: "setTimeout với delay 0ms vẫn là macro-task, chỉ thực thi sau khi call stack rỗng và micro-tasks hoàn thành."
  },
  {
    question: "Đâu là macro-task?",
    options: [
      "Promise.then()",
      "async/await",
      "setTimeout, setInterval",
      "queueMicrotask"
    ],
    correctAnswer: 2,
    explanation: "setTimeout, setInterval, setImmediate và I/O events là macro-tasks."
  },
  {
    question: "Kết quả của: async function f() { console.log('A'); await Promise.resolve(); console.log('B'); } f(); console.log('C');",
    options: [
      "A, B, C",
      "A, C, B",
      "C, A, B",
      "A, B, C (random)"
    ],
    correctAnswer: 1,
    explanation: "A in ra → await tạm dừng → C in ra → micro-task queue xử lý → B in ra."
  },
  {
    question: "Promise.resolve().then() thuộc loại task nào?",
    options: [
      "Sync task",
      "Macro-task",
      "Micro-task",
      "I/O task"
    ],
    correctAnswer: 2,
    explanation: "Promise.then() là micro-task, được ưu tiên xử lý trước macro-task sau khi call stack rỗng."
  }
];

export const esFeaturesQuiz = [
  {
    question: "let và const được giới thiệu trong phiên bản ES nào?",
    options: [
      "ES5",
      "ES2015 (ES6)",
      "ES2016 (ES7)",
      "ES2017 (ES8)"
    ],
    correctAnswer: 1,
    explanation: "let và const được giới thiệu trong ES2015 (ES6), cho phép khai báo biến theo block scope."
  },
  {
    question: "Arrow function khác gì so với function thông thường?",
    options: [
      "Nhanh hơn",
      "Giữ nguyên ngữ cảnh this",
      "Không có tham số",
      "Không có gì khác"
    ],
    correctAnswer: 1,
    explanation: "Arrow function giữ nguyên ngữ cảnh this từ scope bên ngoài, không tạo this riêng."
  },
  {
    question: "Toán tử ** được giới thiệu trong ES nào?",
    options: [
      "ES2015",
      "ES2016",
      "ES2017",
      "ES2018"
    ],
    correctAnswer: 1,
    explanation: "Toán tử ** (exponentiation) được giới thiệu trong ES2016, thay thế Math.pow()."
  },
  {
    question: "async/await được thêm vào ES nào?",
    options: [
      "ES2015",
      "ES2016",
      "ES2017",
      "ES2018"
    ],
    correctAnswer: 2,
    explanation: "async/await được giới thiệu trong ES2017 (ES8), giúp xử lý Promise dễ đọc hơn."
  },
  {
    question: "Optional chaining (?.) được thêm vào ES nào?",
    options: [
      "ES2018",
      "ES2019",
      "ES2020",
      "ES2021"
    ],
    correctAnswer: 2,
    explanation: "Optional chaining (?.) được giới thiệu trong ES2020, giúp truy cập property an toàn."
  },
  {
    question: "Nullish coalescing operator (??) khác gì với ||?",
    options: [
      "Giống nhau hoàn toàn",
      "?? chỉ kiểm tra null/undefined, || kiểm tra tất cả falsy values",
      "?? nhanh hơn",
      "|| mới hơn"
    ],
    correctAnswer: 1,
    explanation: "?? chỉ trả về giá trị bên phải khi bên trái là null hoặc undefined, còn || kiểm tra tất cả falsy values (0, '', false, etc.)."
  },
  {
    question: "BigInt được thêm vào ES nào?",
    options: [
      "ES2018",
      "ES2019",
      "ES2020",
      "ES2021"
    ],
    correctAnswer: 2,
    explanation: "BigInt được giới thiệu trong ES2020, cho phép làm việc với số nguyên lớn hơn Number.MAX_SAFE_INTEGER."
  },
  {
    question: "Promise.allSettled() có tác dụng gì?",
    options: [
      "Chỉ trả về các Promise thành công",
      "Trả về tất cả Promise khi đã settled (fulfilled hoặc rejected)",
      "Giống Promise.all()",
      "Dừng khi có Promise reject"
    ],
    correctAnswer: 1,
    explanation: "Promise.allSettled() đợi tất cả Promise hoàn thành (fulfilled hoặc rejected) và trả về kết quả của tất cả."
  },
  {
    question: "Array.flat() được thêm vào ES nào?",
    options: [
      "ES2017",
      "ES2018",
      "ES2019",
      "ES2020"
    ],
    correctAnswer: 2,
    explanation: "Array.flat() được giới thiệu trong ES2019, giúp làm phẳng mảng đa chiều."
  },
  {
    question: "Top-level await được hỗ trợ từ ES nào?",
    options: [
      "ES2020",
      "ES2021",
      "ES2022",
      "ES2023"
    ],
    correctAnswer: 2,
    explanation: "Top-level await (await ngoài async function trong module) được hỗ trợ từ ES2022."
  }
];

export const bundlingQuiz = [
  {
    question: "Bundle là gì?",
    options: [
      "Một thư viện JavaScript",
      "Quá trình gộp nhiều file thành một hoặc vài file",
      "Một framework",
      "Một ngôn ngữ lập trình"
    ],
    correctAnswer: 1,
    explanation: "Bundle là quá trình gộp nhiều file JavaScript (và assets khác) thành một hoặc vài file để tối ưu hiệu suất."
  },
  {
    question: "Tại sao cần bundling?",
    options: [
      "Để code chạy nhanh hơn",
      "Giảm số lần HTTP request và hỗ trợ module ES6",
      "Để code đẹp hơn",
      "Bắt buộc phải dùng"
    ],
    correctAnswer: 1,
    explanation: "Bundling giúp giảm số HTTP requests, hỗ trợ ES6 modules cho trình duyệt cũ, và tối ưu code (minify, tree-shaking)."
  },
  {
    question: "Tree-shaking là gì?",
    options: [
      "Xóa tất cả file",
      "Loại bỏ code không được sử dụng",
      "Tối ưu hình ảnh",
      "Nén CSS"
    ],
    correctAnswer: 1,
    explanation: "Tree-shaking là kỹ thuật loại bỏ code không được sử dụng trong bundle, giúp giảm kích thước file."
  },
  {
    question: "Bundler nào được biết đến với cấu hình linh hoạt và plugin mạnh?",
    options: [
      "Parcel",
      "Rollup",
      "Webpack",
      "Vite"
    ],
    correctAnswer: 2,
    explanation: "Webpack nổi tiếng với hệ thống cấu hình linh hoạt và ecosystem plugin phong phú."
  },
  {
    question: "Vite có ưu điểm gì nổi bật?",
    options: [
      "Config phức tạp",
      "Siêu nhanh, HMR tốt, sử dụng ES modules",
      "Chỉ dùng cho Vue",
      "Không hỗ trợ React"
    ],
    correctAnswer: 1,
    explanation: "Vite nổi bật với tốc độ build nhanh, Hot Module Replacement (HMR) xuất sắc, và tận dụng ES modules native."
  },
  {
    question: "HMR (Hot Module Replacement) là gì?",
    options: [
      "Reload toàn bộ trang",
      "Cập nhật module khi dev mà không reload trang",
      "Xóa cache",
      "Một plugin của Webpack"
    ],
    correctAnswer: 1,
    explanation: "HMR cho phép cập nhật module trong quá trình dev mà không cần reload toàn bộ trang, giữ lại state của app."
  },
  {
    question: "Bundler nào được biết đến là zero-config?",
    options: [
      "Webpack",
      "Rollup",
      "Parcel",
      "Browserify"
    ],
    correctAnswer: 2,
    explanation: "Parcel nổi tiếng với việc không cần config (zero-config), tự động detect và bundle các file."
  },
  {
    question: "Entry point trong bundler là gì?",
    options: [
      "File cuối cùng",
      "File bắt đầu mà bundler phân tích dependencies",
      "File config",
      "Output file"
    ],
    correctAnswer: 1,
    explanation: "Entry point là file bắt đầu mà bundler sử dụng để phân tích và xây dựng dependency graph."
  },
  {
    question: "Code splitting có tác dụng gì?",
    options: [
      "Xóa code thừa",
      "Tách bundle lớn thành nhiều file nhỏ để lazy-loading",
      "Nén code",
      "Format code"
    ],
    correctAnswer: 1,
    explanation: "Code splitting tách bundle lớn thành nhiều file nhỏ, cho phép lazy-loading để tải code khi cần, cải thiện performance."
  },
  {
    question: "Source map có tác dụng gì?",
    options: [
      "Tối ưu code",
      "Map code đã bundle về code gốc để debug dễ hơn",
      "Tạo documentation",
      "Kiểm tra lỗi"
    ],
    correctAnswer: 1,
    explanation: "Source map giúp map code đã được minify/transform về code gốc, giúp debug dễ dàng hơn trong dev tools."
  }
];

export const browserCompatibilityQuiz = [
  {
    question: "Arrow functions được hỗ trợ sớm nhất bởi trình duyệt nào?",
    options: [
      "Chrome",
      "Firefox (2013)",
      "Safari",
      "Edge"
    ],
    correctAnswer: 1,
    explanation: "Arrow functions được Firefox hỗ trợ sớm nhất vào năm 2013, trước khi ES2015 chính thức ra mắt."
  },
  {
    question: "let và const được hỗ trợ rộng rãi bởi các trình duyệt chính từ năm nào?",
    options: [
      "2014",
      "2015",
      "2015-2016",
      "2017"
    ],
    correctAnswer: 2,
    explanation: "let và const được hỗ trợ rộng rãi từ 2015-2016. Edge hỗ trợ sớm nhất (2015), các browser khác vào 2016."
  },
  {
    question: "Template literals được Firefox hỗ trợ từ năm nào?",
    options: [
      "2013",
      "2014",
      "2015",
      "2016"
    ],
    correctAnswer: 1,
    explanation: "Template literals được Firefox hỗ trợ sớm nhất vào năm 2014, trước khi ES2015 chính thức ra mắt."
  },
  {
    question: "Promises được hỗ trợ đồng loạt bởi Chrome, Firefox, Safari từ năm nào?",
    options: [
      "2013",
      "2014",
      "2015",
      "2016"
    ],
    correctAnswer: 1,
    explanation: "Promises được Chrome, Firefox, Safari hỗ trợ vào năm 2014, Edge vào 2015."
  },
  {
    question: "Async/await được Chrome và Edge hỗ trợ từ năm nào?",
    options: [
      "2015",
      "2016",
      "2017",
      "2018"
    ],
    correctAnswer: 1,
    explanation: "Async/await được Chrome (v55) và Edge (v14) hỗ trợ sớm nhất vào năm 2016, Firefox và Safari vào 2017."
  },
  {
    question: "Array.includes() được hỗ trợ sớm nhất bởi các trình duyệt từ năm nào?",
    options: [
      "2014",
      "2015",
      "2016",
      "2017"
    ],
    correctAnswer: 1,
    explanation: "Array.includes() được Chrome, Firefox, Safari hỗ trợ vào năm 2015, Edge vào 2016."
  },
  {
    question: "Optional chaining (?.) được hỗ trợ đồng loạt bởi tất cả trình duyệt chính từ năm nào?",
    options: [
      "2019",
      "2020",
      "2021",
      "2022"
    ],
    correctAnswer: 1,
    explanation: "Optional chaining được hỗ trợ đồng loạt vào năm 2020: Chrome 80, Firefox 74, Safari 13.1, Edge 80."
  },
  {
    question: "Nullish coalescing operator (??) được hỗ trợ từ năm nào?",
    options: [
      "2019",
      "2020",
      "2021",
      "2022"
    ],
    correctAnswer: 1,
    explanation: "Nullish coalescing được hỗ trợ đồng loạt vào năm 2020: Chrome 80, Firefox 72, Safari 13.1, Edge 80."
  },
  {
    question: "BigInt được Chrome hỗ trợ từ năm nào?",
    options: [
      "2017",
      "2018",
      "2019",
      "2020"
    ],
    correctAnswer: 1,
    explanation: "BigInt được Chrome hỗ trợ sớm nhất vào năm 2018 (v67), Firefox vào 2019, Safari và Edge vào 2020."
  },
  {
    question: "Array.flat() và flatMap() được hỗ trợ sớm nhất bởi các trình duyệt từ năm nào?",
    options: [
      "2017",
      "2018",
      "2019",
      "2020"
    ],
    correctAnswer: 1,
    explanation: "Array.flat/flatMap được Chrome, Firefox, Safari hỗ trợ vào năm 2018, Edge vào 2020."
  },
  {
    question: "String.replaceAll() được hỗ trợ đồng loạt từ năm nào?",
    options: [
      "2019",
      "2020",
      "2021",
      "2022"
    ],
    correctAnswer: 1,
    explanation: "String.replaceAll() được hỗ trợ đồng loạt vào năm 2020: Chrome 85, Firefox 77, Safari 13.1, Edge 85."
  },
  {
    question: "Top-level await được hỗ trợ đồng loạt từ năm nào?",
    options: [
      "2020",
      "2021",
      "2022",
      "2023"
    ],
    correctAnswer: 1,
    explanation: "Top-level await được hỗ trợ đồng loạt vào năm 2021: Chrome 89, Firefox 89, Safari 15, Edge 89."
  },
  {
    question: "Class private fields (#) được Chrome hỗ trợ từ năm nào?",
    options: [
      "2018",
      "2019",
      "2020",
      "2021"
    ],
    correctAnswer: 1,
    explanation: "Class private fields được Chrome hỗ trợ sớm nhất vào năm 2019 (v74), Firefox vào 2021, Safari và Edge vào 2020-2021."
  },
  {
    question: "Array.findLast() và findLastIndex() được hỗ trợ từ năm nào?",
    options: [
      "2021",
      "2022",
      "2023",
      "2024"
    ],
    correctAnswer: 1,
    explanation: "Array.findLast/findLastIndex được hỗ trợ đồng loạt vào năm 2022: Chrome 97, Firefox 104, Safari 15.4, Edge 97."
  },
  {
    question: "Array.toSorted() và toReversed() được Safari hỗ trợ từ năm nào?",
    options: [
      "2021",
      "2022",
      "2023",
      "2024"
    ],
    correctAnswer: 1,
    explanation: "Immutable array methods được Safari hỗ trợ sớm nhất vào năm 2022 (v16), Chrome, Firefox, Edge vào 2023."
  },
  {
    question: "Object.entries() và Object.values() được hỗ trợ từ năm nào?",
    options: [
      "2015",
      "2016",
      "2016-2017",
      "2018"
    ],
    correctAnswer: 2,
    explanation: "Object.entries/values được Chrome và Firefox hỗ trợ vào 2016, Safari vào 2017, Edge vào 2016."
  },
  {
    question: "Destructuring được Safari hỗ trợ từ năm nào?",
    options: [
      "2013",
      "2014",
      "2015",
      "2016"
    ],
    correctAnswer: 1,
    explanation: "Destructuring được Safari hỗ trợ sớm nhất vào năm 2014 (v8), Firefox vào 2015, Chrome và Edge vào 2016."
  },
  {
    question: "Classes được hỗ trợ đồng loạt bởi tất cả trình duyệt chính từ năm nào?",
    options: [
      "2015",
      "2016",
      "2017",
      "2018"
    ],
    correctAnswer: 1,
    explanation: "Classes được hỗ trợ đồng loạt vào năm 2016: Chrome 49, Firefox 45, Safari 10, Edge 13."
  },
  {
    question: "Nếu bạn cần hỗ trợ Optional chaining (?.) cho tất cả trình duyệt, bạn nên target từ năm nào?",
    options: [
      "2019",
      "2020",
      "2021",
      "2022"
    ],
    correctAnswer: 1,
    explanation: "Optional chaining được hỗ trợ đồng loạt từ năm 2020, nên bạn nên target từ năm này để đảm bảo tương thích."
  },
  {
    question: "Để sử dụng async/await mà vẫn hỗ trợ trình duyệt cũ (trước 2016), bạn cần làm gì?",
    options: [
      "Không cần làm gì, async/await tự động tương thích",
      "Sử dụng Babel để transpile về Promise",
      "Chỉ dùng Promise, không dùng async/await",
      "Cập nhật trình duyệt"
    ],
    correctAnswer: 1,
    explanation: "Để hỗ trợ trình duyệt cũ, bạn cần sử dụng Babel để transpile async/await về Promise và generator functions."
  },
  {
    question: "Template literals được Chrome hỗ trợ từ phiên bản nào?",
    options: [
      "Chrome 40",
      "Chrome 41",
      "Chrome 42",
      "Chrome 43"
    ],
    correctAnswer: 1,
    explanation: "Template literals được Chrome hỗ trợ từ phiên bản 41, phát hành vào năm 2015."
  },
  {
    question: "Firefox hỗ trợ arrow functions từ phiên bản nào?",
    options: [
      "Firefox 20",
      "Firefox 21",
      "Firefox 22",
      "Firefox 23"
    ],
    correctAnswer: 2,
    explanation: "Firefox hỗ trợ arrow functions từ phiên bản 22, phát hành vào năm 2013."
  },
  {
    question: "Safari hỗ trợ let và const từ phiên bản nào?",
    options: [
      "Safari 8",
      "Safari 9",
      "Safari 10",
      "Safari 11"
    ],
    correctAnswer: 2,
    explanation: "Safari hỗ trợ let và const từ phiên bản 10, phát hành vào năm 2016."
  },
  {
    question: "Edge hỗ trợ Promises từ phiên bản nào?",
    options: [
      "Edge 11",
      "Edge 12",
      "Edge 13",
      "Edge 14"
    ],
    correctAnswer: 1,
    explanation: "Edge hỗ trợ Promises từ phiên bản 12, phát hành vào năm 2015."
  },
  {
    question: "Chrome hỗ trợ BigInt từ phiên bản nào?",
    options: [
      "Chrome 65",
      "Chrome 66",
      "Chrome 67",
      "Chrome 68"
    ],
    correctAnswer: 2,
    explanation: "Chrome hỗ trợ BigInt từ phiên bản 67, phát hành vào năm 2018."
  },
  {
    question: "Array.flat() được Firefox hỗ trợ từ phiên bản nào?",
    options: [
      "Firefox 60",
      "Firefox 61",
      "Firefox 62",
      "Firefox 63"
    ],
    correctAnswer: 2,
    explanation: "Array.flat() được Firefox hỗ trợ từ phiên bản 62, phát hành vào năm 2018."
  },
  {
    question: "Safari hỗ trợ Optional chaining từ phiên bản nào?",
    options: [
      "Safari 12.1",
      "Safari 13",
      "Safari 13.1",
      "Safari 14"
    ],
    correctAnswer: 2,
    explanation: "Safari hỗ trợ Optional chaining từ phiên bản 13.1, phát hành vào năm 2020."
  },
  {
    question: "Top-level await được Edge hỗ trợ từ phiên bản nào?",
    options: [
      "Edge 87",
      "Edge 88",
      "Edge 89",
      "Edge 90"
    ],
    correctAnswer: 2,
    explanation: "Top-level await được Edge hỗ trợ từ phiên bản 89, phát hành vào năm 2021."
  },
  {
    question: "Class private fields được Firefox hỗ trợ từ phiên bản nào?",
    options: [
      "Firefox 88",
      "Firefox 89",
      "Firefox 90",
      "Firefox 91"
    ],
    correctAnswer: 2,
    explanation: "Class private fields được Firefox hỗ trợ từ phiên bản 90, phát hành vào năm 2021."
  },
  {
    question: "Array.findLast() được Chrome hỗ trợ từ phiên bản nào?",
    options: [
      "Chrome 95",
      "Chrome 96",
      "Chrome 97",
      "Chrome 98"
    ],
    correctAnswer: 2,
    explanation: "Array.findLast() được Chrome hỗ trợ từ phiên bản 97, phát hành vào năm 2022."
  },
  {
    question: "Array.toSorted() được Safari hỗ trợ từ phiên bản nào?",
    options: [
      "Safari 14",
      "Safari 15",
      "Safari 16",
      "Safari 17"
    ],
    correctAnswer: 2,
    explanation: "Array.toSorted() được Safari hỗ trợ từ phiên bản 16, phát hành vào năm 2022."
  },
  {
    question: "Nếu bạn cần hỗ trợ Array.flat() cho tất cả trình duyệt, bạn nên target từ năm nào?",
    options: [
      "2017",
      "2018",
      "2019",
      "2020"
    ],
    correctAnswer: 3,
    explanation: "Array.flat() được hỗ trợ rộng rãi từ 2018, nhưng Edge chỉ hỗ trợ từ 2020, nên nên target từ 2020 để đảm bảo tương thích đầy đủ."
  },
  {
    question: "Để kiểm tra tương thích chi tiết của một tính năng JavaScript, bạn nên sử dụng công cụ nào?",
    options: [
      "MDN Web Docs",
      "caniuse.com",
      "JavaScript.info",
      "Tất cả các công cụ trên"
    ],
    correctAnswer: 3,
    explanation: "Cả ba công cụ đều hữu ích: caniuse.com cho browser compatibility, MDN cho documentation, JavaScript.info cho tutorials."
  },
  {
    question: "Tính năng nào được hỗ trợ sớm nhất bởi Firefox (2013)?",
    options: [
      "let và const",
      "Arrow functions",
      "Classes",
      "Promises"
    ],
    correctAnswer: 1,
    explanation: "Arrow functions được Firefox hỗ trợ sớm nhất vào năm 2013, trước khi ES2015 chính thức ra mắt."
  },
  {
    question: "Tính năng nào được Chrome hỗ trợ sớm nhất (2018)?",
    options: [
      "BigInt",
      "Optional chaining",
      "Top-level await",
      "Class private fields"
    ],
    correctAnswer: 0,
    explanation: "BigInt được Chrome hỗ trợ sớm nhất vào năm 2018 (v67), trước các tính năng ES2020 khác."
  },
  {
    question: "Tính năng nào được Safari hỗ trợ sớm nhất (2014)?",
    options: [
      "Destructuring",
      "Template literals",
      "Promises",
      "Array.includes"
    ],
    correctAnswer: 0,
    explanation: "Destructuring được Safari hỗ trợ sớm nhất vào năm 2014 (v8), trước các tính năng ES2015 khác."
  }
];

