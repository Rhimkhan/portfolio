export interface ProjectItem {
  name: string;
  tag: string;
  tagColor?: string;
  description: string;
  tech: string[];
  github: string;
  liveUrl?: string | null;
  /** Backward-compatibility alias */
  live?: string | null;
}

export const projectsData: ProjectItem[] = [
  {
    name: "Object Detection API",
    tag: "AI / Computer Vision",
    tagColor: "#3b82f6",
    description:
      "Flask REST API serving real-time object detection using YOLOv8. Accepts image input and returns detected objects with bounding box coordinates via API endpoints.",
    tech: ["Python", "YOLOv8", "Flask", "Computer Vision", "REST API"],
    github: "https://github.com/Rhimkhan/object-detection-api",
    liveUrl: null,
    live: null,
  },
  {
    name: "Real-Time Sentiment Analysis Pipeline",
    tag: "AI / NLP",
    tagColor: "#8b5cf6",
    description:
      "Python NLP pipeline classifying text sentiment in real time using text preprocessing and classification techniques on live/streamed text data.",
    tech: ["Python", "NLP", "Scikit-Learn", "Machine Learning", "Text Preprocessing"],
    github: "https://github.com/Rhimkhan/sentiment-analysis-project",
    liveUrl: null,
    live: null,
  },
  {
    name: "House Price Predictor",
    tag: "ML / Regression",
    tagColor: "#10b981",
    description:
      "Regression-based ML model predicting housing prices from historical data with feature engineering and model evaluation to improve accuracy.",
    tech: ["Python", "Pandas", "Regression", "Scikit-Learn", "Feature Engineering"],
    github: "https://github.com/Rhimkhan/house-price-predictor",
    liveUrl: null,
    live: null,
  },
  {
    name: "Titanic Survival Prediction",
    tag: "ML / Classification",
    tagColor: "#f59e0b",
    description:
      "Classification model predicting passenger survival on Titanic dataset using EDA and multiple ML algorithms.",
    tech: ["Python", "Machine Learning", "Classification", "Data Analysis", "EDA"],
    github: "https://github.com/Rhimkhan/Titanic-prediction",
    liveUrl: null,
    live: null,
  },
];
