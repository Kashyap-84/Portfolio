import React from "react"
import SlideUp from "./SlideUp"

const projects = [
  {
    name: "Generative AI RAG System",
    description:
      "Built an end-to-end retrieval augmented generation pipeline using LangChain, OpenAI APIs, FAISS, and semantic search to support question answering over enterprise documents.",
    technologies: ["LangChain", "OpenAI APIs", "FAISS", "RAG", "Semantic Search"],
  },
  {
    name: "LLM-Based API Service",
    description:
      "Developed FastAPI-based REST APIs for serving LLM-powered applications with real-time inference, scalable deployment patterns, and production-focused API design.",
    technologies: ["FastAPI", "LLMs", "REST APIs", "Docker", "Model Deployment"],
  },
  {
    name: "Healthcare Predictive Analytics",
    description:
      "Created predictive machine learning models for healthcare analytics using TensorFlow, feature engineering, statistical modeling, and cloud-based deployment workflows.",
    technologies: ["TensorFlow", "Python", "Spark", "AWS", "Azure"],
  },
  {
    name: "Fraud Detection and Churn Modeling",
    description:
      "Built classification, anomaly detection, regression, and segmentation models for insurance and telecom datasets, supported by ETL pipelines and business dashboards.",
    technologies: ["Scikit-learn", "Kafka", "Power BI", "Tableau", "SQL"],
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Featured Work
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="h-full rounded-lg border border-neutral-200 p-6 shadow-sm animate-slideUpCubiBezier animation-delay-2 dark:border-stone-700">
                  <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
                  <p className="text-lg leading-7 mb-5 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="bg-gray-200 px-3 py-1 mr-2 mt-2 text-gray-500 rounded font-semibold text-sm"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
