import React from "react";

const questions = [
  {
    ques: "How I can become a good coder",
    ans: "Learn and Learn better, dive into deeper concepts and Practice ,",
  },
  {
    ques: "What are the essential skills needed to start learning programming languages",
    ans: "The essential skills needed to start learning programming languages include logical thinking, problem-solving abilities, attention to detail, and a willingness to learn and experiment.",
  },
  {
    ques: "How should I approach learning multiple languages simultaneously",
    ans: "When learning multiple programming languages simultaneously, focus on understanding the core concepts shared across languages, tackle one language at a time for mastery, and aim to build projects that apply the concepts learned in each language.",
  },
  {
    ques: "What is the importance of algorithms in programming",
    ans: "Algorithms provide systematic approaches to problem-solving, enabling efficient solutions in programming.",
  },
  {
    ques: "How does one determine which programming language to learn first",
    ans: "Consider factors like your goals (web dev, data analysis), community support, simplicity (Python, JavaScript), or demand (Java, C++).",
  },
  {
    ques: "How can I improve my problem-solving abilities in programming",
    ans: "Understand the problem thoroughly, break it into smaller steps, try different solutions, and seek help from resources or peers.",
  },
  {
    ques: "What types of jobs or industries commonly require programming skills",
    ans: "Industries like software development, IT, finance, healthcare often require programming skills.",
  },
  {
    ques: "How do I handle errors or bugs in my code effectively",
    ans: "Use debugging tools, analyze error messages, break down the code to find issues, and search online resources or forums for solutions.",
  },
];

const FAQComponent = () => {
  return (
    <div className="my-8 bg-main-background dark:bg-slate-800 py-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-6 text-black dark:text-white">
        Most Asked <span className="text-green-500">Questions</span>
      </h2>
      <div className="container mx-auto grid grid-cols-1 gap-6 px-4">
        {questions.map(({ ques, ans }, index) => (
          <div
            key={index}
            className="i-box p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500 transition-all duration-700 ease-in-out bg-white"
          >
            <h3 className="ab text-lg font-semibold mb-2 text-black text-center">
              {ques}
              <span>?</span>
            </h3>
            <p className="abans text-blue-700 hidden text-center text-2xl">
              {ans}
            </p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .i-box:hover .ab {
          display: none;
        }
        .i-box:hover .abans {
          display: flex;
        }
        .i-box:hover {
          border-radius: 2px 80px 2px 80px;
        }
      `}</style>
    </div>
  );
};

export default FAQComponent;
