import { useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeVideo = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/audit", {
        video_url: url,
      });
      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Error analyzing video");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Multimodal Brand Compliance Engine</h1>

      <input
        type="text"
        placeholder="Enter YouTube URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "400px", padding: "10px" }}
      />

      <button onClick={analyzeVideo} style={{ marginLeft: "10px" }}>
        Analyze
      </button>

      {loading && <p>Analyzing...</p>}

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h2>Status: {result.status}</h2>
          <p>{result.final_report}</p>

          {result.compliance_results.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px 0",
              }}
            >
              <h3>{item.category}</h3>
              <p>
                <strong>Severity:</strong> {item.severity}
              </p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
