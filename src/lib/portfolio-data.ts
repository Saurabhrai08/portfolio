export type Project = {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  featured?: boolean;
};

export const personalData = {
  name: "Saurabh Rai",
  role: "Aspiring AI/ML Engineer",
  location: "Faridabad, Haryana, India",
  email: "saurabhrai3108@gmail.com",
  phone: "9117868567",
  github: "https://github.com/Saurabhrai08",
  linkedin: "https://linkedin.com/in/saurabh-rai-31d08t2006",
};

export const summary = `I am an aspiring AI/ML Engineer currently pursuing B.Tech in Computer Science (Artificial Intelligence & Machine Learning) at Manav Rachna University. I have hands-on experience in building machine learning and deep learning models using Python, including Regression, K-Means, SVM, and Convolutional Neural Networks (CNN).

I have worked on real-world datasets involving data preprocessing, feature engineering, and model evaluation. I am passionate about AI applications, automation, and solving real-world problems. I am actively seeking internship opportunities in AI/ML and Data Science.`;

export const experience = [
  {
    company: "Prodigy InfoTech",
    role: "Machine Learning Intern",
    duration: "July 2025 - Present",
    responsibilities: [
      "Developed ML models using Regression, K-Means, and SVM",
      "Built CNN models for image classification",
      "Performed data preprocessing using NumPy & Pandas",
      "Improved model accuracy using Scikit-learn",
    ],
  },
];

export const education = [
  {
    institute: "Manav Rachna University",
    program: "B.Tech in Computer Science (AI & ML)",
    duration: "2023 - 2027",
  },
  {
    institute: "SS Public School",
    program: "10th & 12th (Science)",
    duration: "",
  },
];

export const skills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Data Science",
  "Computer Vision",
  "TensorFlow",
  "Scikit-learn",
  "NumPy",
  "Pandas",
  "OpenCV",
];

export const featuredProjects: Project[] = [
  {
    title: "Skin Cancer Detection",
    description:
      "CNN-based computer vision project for skin lesion image classification with a pipeline focused on preprocessing, augmentation, and model evaluation.",
    techStack: ["Python", "CNN", "TensorFlow", "OpenCV"],
    github: "https://github.com/Saurabhrai08",
    featured: true,
  },
  {
    title: "AI Chatbot (ClassmateBot)",
    description:
      "Conversational AI assistant designed to answer student queries with a lightweight chat interface and structured response handling.",
    techStack: ["Python", "NLP", "Automation", "AI Assistant"],
    github: "https://github.com/Saurabhrai08",
    featured: true,
  },
];

export const chatbotKnowledge = `
Name: Saurabh Rai
Role: Aspiring AI/ML Engineer
Location: Faridabad, Haryana, India
Email: saurabhrai3108@gmail.com
Phone: 9117868567
GitHub: https://github.com/Saurabhrai08
LinkedIn: https://linkedin.com/in/saurabh-rai-31d08t2006

Summary:
${summary}

Experience:
- Prodigy InfoTech | Machine Learning Intern | July 2025 - Present
  Responsibilities:
  - Developed ML models using Regression, K-Means, and SVM
  - Built CNN models for image classification
  - Performed data preprocessing using NumPy & Pandas
  - Improved model accuracy using Scikit-learn

Education:
- Manav Rachna University | B.Tech in Computer Science (AI & ML) | 2023 - 2027
- SS Public School | 10th & 12th (Science)

Skills:
- Python
- Machine Learning
- Deep Learning
- Data Science
- Computer Vision
- TensorFlow
- Scikit-learn
- NumPy
- Pandas
- OpenCV

Highlighted Projects:
- Skin Cancer Detection: CNN project for image classification.
- AI Chatbot (ClassmateBot): AI chatbot project.
`;

const fallbackResponses = [
  {
    keywords: ["who are you", "about you", "introduce", "yourself"],
    response:
      "I am Saurabh Rai, an aspiring AI/ML Engineer specializing in Machine Learning, Deep Learning, and Computer Vision.",
  },
  {
    keywords: ["skills", "tech stack", "technologies"],
    response:
      "Saurabh works with Python, Machine Learning, Deep Learning, Data Science, Computer Vision, TensorFlow, Scikit-learn, NumPy, Pandas, and OpenCV.",
  },
  {
    keywords: ["project", "projects", "built", "portfolio"],
    response:
      "Highlighted work includes Skin Cancer Detection using CNNs for image classification and an AI Chatbot called ClassmateBot. The portfolio also pulls public repositories from GitHub to showcase ongoing work.",
  },
  {
    keywords: ["experience", "intern", "work"],
    response:
      "Saurabh is currently a Machine Learning Intern at Prodigy InfoTech, where he has developed models with Regression, K-Means, SVM, and CNNs while improving pipelines with NumPy, Pandas, and Scikit-learn.",
  },
  {
    keywords: ["education", "study", "college", "university"],
    response:
      "He is pursuing a B.Tech in Computer Science with a specialization in Artificial Intelligence and Machine Learning at Manav Rachna University from 2023 to 2027.",
  },
  {
    keywords: ["contact", "email", "phone", "reach"],
    response:
      "You can reach Saurabh Rai at saurabhrai3108@gmail.com or 9117868567. His GitHub and LinkedIn links are also available in the portfolio.",
  },
];

export function getFallbackChatResponse(question: string) {
  const normalizedQuestion = question.toLowerCase();

  const matched = fallbackResponses.find(({ keywords }) =>
    keywords.some((keyword) => normalizedQuestion.includes(keyword)),
  );

  if (matched) {
    return matched.response;
  }

  return "Saurabh Rai is an aspiring AI/ML Engineer currently pursuing B.Tech in Computer Science (AI & ML) at Manav Rachna University and seeking internship opportunities in AI/ML and Data Science.";
}
