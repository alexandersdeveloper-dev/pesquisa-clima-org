export default function ProgressBar({ percent }) {
  return (
    <div className="progress-bar">
      <i style={{ width: percent + "%" }}></i>
    </div>
  );
}
