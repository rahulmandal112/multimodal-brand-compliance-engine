# Multimodal Brand Compliance Engine

Enterprise-grade multimodal LLMOps system for automated brand and regulatory compliance analysis of marketing videos using RAG, vector search, and Azure AI services.

---

## 📌 Overview

The **Multimodal Brand Compliance Engine** is an end-to-end AI system that automatically audits marketing videos for brand and regulatory violations.

It leverages multimodal AI, retrieval-augmented generation (RAG), and cloud-based LLM orchestration to generate structured compliance reports with severity levels and recommendations.

This project demonstrates real-world LLMOps architecture including:

- Multimodal processing
- Embedding-based retrieval
- Vector search
- LLM orchestration
- Observability
- Cloud deployment design

---

## 🏗 Architecture

### High-Level Flow

1. 🎥 Video ingestion (YouTube URL input)
2. 📝 Transcript extraction
3. 🧠 Compliance rule embedding generation
4. 🔎 Vector similarity search (RAG retrieval)
5. 🤖 LLM-based compliance reasoning
6. 📊 Structured JSON compliance report
7. 📡 Observability & logging

---

## 🧰 Tech Stack

### Backend

- FastAPI
- Python
- LangGraph (LLM orchestration)
- Azure OpenAI
- Azure AI Search (Vector DB)
- Azure Application Insights

### Frontend

- React (Vite)
- Axios

### AI Concepts Used

- Multimodal processing
- Retrieval-Augmented Generation (RAG)
- Embedding-based similarity search
- Prompt engineering
- Structured output generation
- Observability & latency tracking

---

## 📊 Sample Output

```json
{
  "video_id": "ad_1023",
  "compliance_status": "FAIL",
  "violations": [
    {
      "category": "Unsubstantiated Claims",
      "severity": "CRITICAL",
      "confidence": 0.89,
      "recommendation": "Provide clinical evidence for health-related claims."
    }
  ],
  "final_report": "The advertisement contains unsupported health benefit claims."
}
```
