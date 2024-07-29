import BackButton from "../components/backButton";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-700">
      <BackButton />
      <div className="max-w-2xl mx-auto p-6 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7 text-purple-700">
            Madhulika Dubey, (Founder)
          </h1>
          <div className="text-lg text-gray-700 dark:text-white">
            <p className="mb-6">
              Hello, I am Madhulika Dubey, a seasoned professional with over 12
              years of extensive experience in Corporate Training and Consulting
              for Full Stack software applications. My expertise encompasses a
              wide array of technologies including Java, Spring, Spring Boot
              Rest, Microservices, Angular 11, React JS, AWS, Docker, and
              Kubernetes, with proficiency in databases such as Oracle, MySQL,
              and Postgres.
            </p>

            <p className="mb-6">
              In my professional journey, I have taken on multifaceted roles and
              responsibilities, which include:
            </p>

            <ul className="list-disc list-inside mb-6 text-left">
              <li>
                Creating APIs: Utilizing Spring Boot to develop robust RESTful
                and microservices-based APIs, ensuring seamless integration and
                performance.
              </li>
              <li>
                API Management: Proficient in using tools like Postman and
                Swagger for efficient API management, documentation, and
                testing.
              </li>
              <li>
                UI Design: Skilled in designing intuitive and user-friendly
                interfaces for applications, enhancing user experience and
                engagement.
              </li>
              <li>
                Bug Fixing and Unit Testing: Diligent in identifying and
                resolving bugs, along with performing thorough unit testing to
                ensure code reliability and performance.
              </li>
              <li>
                Code Reviewing: Conducting meticulous code reviews to maintain
                high standards of code quality and adherence to best practices.
              </li>
              <li>
                Requirement Gathering and Analysis: Actively involved in
                understanding and analyzing client requirements to deliver
                tailored and effective software solutions.
              </li>
            </ul>

            <p className="mb-6">
              Additionally, I have contributed to the technical community by
              writing an insightful blog on the new features of JAVA 8 and 9,
              showcasing my deep understanding and expertise in the latest
              advancements in Java technology.
            </p>

            <p>
              My career is driven by a passion for continuous learning and
              staying abreast of emerging technologies, which allows me to
              deliver cutting-edge solutions and provide exceptional training
              and consulting services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
