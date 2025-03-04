import { useState } from "react";
import axios from "axios";
import "./fileUpload.css";
import { useNavigate } from "react-router-dom";
import illustration from '../assets/upload.png';

export const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [responseMsg, setResponseMsg] = useState<string>("");
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please select file to upload");

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5050/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setResponseMsg("Error uploading file");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="pageWrapper">
      <div className="p-container">
      <div className="form-container">
        <h1> Upload A CSV File for Analysis</h1>
        <form onSubmit={handleSubmit}>
          <input type="file" accept=".csv" onChange={handleFileChange} />
          <button type="submit" disabled={uploading}>
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </form>
        {responseMsg && <p>{responseMsg}</p>}
      </div>
      <img src={illustration}/>
      </div>
    </div>
  );
};
