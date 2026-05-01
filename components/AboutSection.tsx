import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "SQL" },
  { skill: "TensorFlow" },
  { skill: "PyTorch" },
  { skill: "Scikit-learn" },
  { skill: "XGBoost" },
  { skill: "LLMs" },
  { skill: "RAG" },
  { skill: "LangChain" },
  { skill: "OpenAI APIs" },
  { skill: "FAISS" },
  { skill: "Pinecone" },
  { skill: "Spark" },
  { skill: "Kafka" },
  { skill: "AWS" },
  { skill: "Azure" },
  { skill: "GCP" },
  { skill: "MLflow" },
  { skill: "Docker" },
  { skill: "Kubernetes" },
  { skill: "FastAPI" },
  { skill: "Power BI" },
  { skill: "Tableau" },
  { skill: "Git" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Sai Kashyap Kaligotla and I am an{" "}
              <span className="font-bold">{"AI/ML engineer"}</span>,
              <span className="font-bold">{" data scientist"}</span>, and
              <span className="font-bold">{" Generative AI builder"}</span>{" "}
              based in Kansas.
            </p>
            <br />
            <p>
              My work focuses on building production-ready machine learning,
              NLP, and RAG-based LLM applications. I have worked across
              financial analytics, healthcare analytics, insurance fraud
              detection, and telecom churn prediction.
            </p>
            <br />
            <p>
              Recently, I built RAG-based LLM solutions at Cboe Global Markets
              using semantic search and FAISS, and developed predictive
              healthcare models at McKesson with TensorFlow, Spark, cloud
              deployment, and CI/CD workflows.
            </p>
            <br />
            <p>
              I completed my Master&#39;s in Computer Science at the
              University of Central Missouri and I am open to{" "}
              <span className="font-bold text-teal-500">
                full-time AI, ML, and data science roles
              </span>
              , including remote and relocation opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
