import { useRef, useState, useEffect } from "react";
import "../css/PopUp.css";
import "../css/UploadReceiptPopup.css";

const PLACEHOLDER_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='%23aaa'%3E%3Crect width='64' height='64' fill='none'/%3E%3Crect x='8' y='14' width='48' height='36' rx='4' stroke='%23aaa' stroke-width='3' fill='none'/%3E%3Ccircle cx='22' cy='26' r='5' fill='%23aaa'/%3E%3Cpath d='M8 40l14-12 10 10 8-8 14 12' stroke='%23aaa' stroke-width='3' fill='none' stroke-linejoin='round'/%3E%3C/svg%3E";

/* ═══════════════════════════════════════════════════════════════════
   UPLOAD RECEIPT POPUP
   Props:
     onClose  — () => void
     onSubmit — (file: File) => void
═══════════════════════════════════════════════════════════════════ */
export default function UploadReceiptPopup({ onClose, onSubmit }) {
  const [preview, setPreview] = useState(null);
  const [file, setFile]       = useState(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef();
  const overlayRef   = useRef();

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  /* click outside to close */
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const loadFile = (f) => {
    if (!f || !f.type.startsWith("image/")) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleFileChange = (e) => loadFile(e.target.files[0]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    loadFile(e.dataTransfer.files[0]);
  };

  const handleSubmit = () => {
    if (!file) return;
    onSubmit?.(file);
    onClose();
  };

  return (
    <div className="popup-overlay upload-overlay" ref={overlayRef} onClick={handleOverlayClick}>
      <div className="popup upload-popup">

        {/* ── Drop zone ── */}
        <div
          className={`upload-dropzone ${dragging ? "upload-dropzone--drag" : ""} ${preview ? "upload-dropzone--has-preview" : ""}`}
          onClick={() => fileInputRef.current.click()}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
        >
          {preview ? (
            <img src={preview} alt="Receipt preview" className="upload-preview-img" />
          ) : (
            <div className="upload-placeholder">
              <img src={PLACEHOLDER_IMG} alt="" className="upload-placeholder-icon" />
              <span className="upload-placeholder-text">Upload Image Here</span>
            </div>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        {/* ── Buttons ── */}
        <div className="upload-footer">
          <button
            className="upload-btn-submit"
            onClick={handleSubmit}
            disabled={!file}
          >
            Submit Receipt
          </button>
          <button className="upload-btn-back" onClick={onClose}>
            Back
          </button>
        </div>

      </div>
    </div>
  );
}