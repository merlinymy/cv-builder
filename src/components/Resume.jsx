import "../styles/resume.css";

export function Resume({ resumeData }) {
  return (
    <div className="resume">
      {resumeData.name && <div className="name">{resumeData.name}</div>}
      {resumeData.location && (
        <div className="location">{resumeData.location}</div>
      )}
      <div className="contacts">
        {resumeData.email && <div className="email">{resumeData.email}</div>}
        {resumeData.phone && <div className="phone">{resumeData.phone}</div>}
        {resumeData.github && <div className="github">{resumeData.github}</div>}
        {resumeData.linkedIn && (
          <div className="linkedIn">{resumeData.linkedIn}</div>
        )}
      </div>
    </div>
  );
}
