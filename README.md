# 📄 ATS-Friendly Resume Builder

A modern, printable, and ATS-safe resume builder built with React.

[![React](https://img.shields.io/badge/React-2025-blue)](https://reactjs.org/)
[![PDF Export](https://img.shields.io/badge/PDF-Export-green)]()
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Coming%20Soon-blueviolet)]()

---

### 🧠 About the Project

This is a resume/CV builder made as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-cv-application#project-solution).  
The app saves user data to localStorage, generates an HTML resume preview, and allows exporting to PDF using `@react-pdf/renderer`.

---

### 🚀 Features

- Fully responsive and styled with Tailwind CSS
- ATS-compliant layout (semantic HTML, real text, no images)
- Resume preview formatted for A4 size
- Downloadable PDF via blob rendering
- Component reuse across work experience, projects, and certifications
- Supports drag ordering of cards and bullet points
- Persistent resume data via localStorage

---

### 🖱️ How to Use

1. Fill in your resume details
2. Click **Save** to persist it to localStorage
3. Click **Preview** to see your resume in A4 layout
4. Click **Download** to export a clean, PDF version

---

### 🧪 Tech Stack

- **React** with Hooks
- **Tailwind CSS** for utility-first styling
- **@react-pdf/renderer** for generating downloadable PDF blobs
- **LocalStorage** for saving data

---

### 🗂️ Project Log

**4/18/2025**  
The design is inspired by https://www.hyrd.dev/resume.  
Struggled with state and components. I had lots of nested components...

---

**4/19/2025**  
State and props finally _clicked_ for me.  
I'm passing a lot of state to other components though—not sure if that’s good practice.

Components are so convenient! I reused the same one for work experience, projects, and certifications.  
Implemented re-ordering for cards and bullet points.

---

**4/20/2025**  
Tried different ways to display the resume.

I created a `div` that wraps all resume elements. It's not terrible.  
Then I asked: _How do I print this or download it as a PDF?_

Here's the journey:

- **html2pdf** → couldn’t install it correctly ❌
- **jsPDF** → doesn't support Tailwind if converting HTML directly ❌
- **jsPDF + html2canvas** → works, but:
  - it's just a screenshot
  - blurry result
  - no selectable text
  - **not ATS-friendly** ❌

---

### ✍️ Original Resume Component (Legacy HTML version)

<details>
<summary>Click to expand</summary>

```jsx
export function Resume({
  general,
  work,
  projects,
  education,
  certification,
  skills,
}) {
  function formatDateRange(start, end, isCurrent) {
    const format = (str) => {
      if (!str) return "";
      const [year, month] = str.split("-");
      const date = new Date(year, month - 1);
      return date.toLocaleString("en-US", { year: "numeric", month: "short" });
    };

    const formattedStart = format(start);
    const formattedEnd = isCurrent ? "Present" : format(end);

    return ${formattedStart} - ${formattedEnd};
  }

  return (
    <div
      className="resume-to-print bg-white text-black mx-auto shadow-md pt-6 pb-6 pl-8 pr-8"
      style={{ width: "794px", minHeight: "1123px", fontFamily: "serif" }}
    >
      {/* NAME + CONTACT */}
      <header className="text-center mb-3">
        <h1 className="text-3xl font-bold">{general.name}</h1>
        <p className="mt-1">{general.location}</p>
        <p className="mt-1">
          {general.email} | {general.phone} |{" "}
          <a href={general.github} className="text-blue-800 underline">
            {general.github}
          </a>{" "}
          |{" "}
          <a href={general.linkedIn} className="text-blue-800 underline">
            {general.linkedIn}
          </a>
        </p>
      </header>

      {/* SUMMARY */}
      {general.summary && (
        <section className="mb-3">
          <h2 className="border-b-1 border-black font-bold uppercase text-sm">
            Summary
          </h2>
          <p className="mt-2 text-sm">{general.summary}</p>
        </section>
      )}

      {/* SKILLS */}
      {skills.length > 0 && (
        <section className="mb-3">
          <h2 className="border-b-1 border-black font-bold uppercase text-sm">
            Skills
          </h2>
          <p className="mt-2 text-sm">{skills.join(", ")}</p>
        </section>
      )}

      {/* WORK EXPERIENCE */}
      {work.length > 0 && (
        <section className="mb-3">
          <h2 className="border-b-1 border-black font-bold uppercase text-sm">
            Work Experience
          </h2>
          {work.map((job) => (
            <div key={job.id} className="mt-2">
              <div className="flex justify-between text-sm font-semibold">
                <span>{job.companyName}</span>
                <span className=" text-right">
                  {formatDateRange(job.startDate, job.endDate, job.isCurrent)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                {job.roleTitle && ${job.roleTitle}}

                <span className="ml-2">{job.location}</span>
              </div>
              <ul className="list-disc list-inside text-sm mt-1 pl-4">
                {job.bulletPoints?.map((pt, i) => (
                  <li key={i}>{pt.content}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* PROJECTS */}
      {projects.length > 0 && (
        <section className="mb-3">
          <h2 className="border-b-1 border-black font-bold uppercase text-sm">
            Projects
          </h2>
          {projects.map((proj) => (
            <div key={proj.id} className="mt-2">
              <div className="flex justify-between text-sm font-semibold">
                <span>{proj.projectName}</span>
                <span className="text-right">
                  {formatDateRange(
                    proj.startDate,
                    proj.endDate,
                    proj.isCurrent,
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                {proj.roleTitle && ${proj.roleTitle}}
                <span className="ml-2">{proj.location}</span>
              </div>
              <ul className="list-disc list-inside text-sm mt-1 pl-4">
                {proj.bulletPoints?.map((pt, i) => (
                  <li key={i}>{pt.content}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* EDUCATION */}
      {education.length > 0 && (
        <section className="mb-3">
          <h2 className="border-b-1 border-black font-bold uppercase text-sm">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mt-2">
              <div className="flex justify-between text-sm font-semibold">
                <span>{edu.institutionName}</span>
                <span className=" text-right">
                  {formatDateRange(edu.startDate, edu.endDate, edu.isCurrent)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                {edu.certification}
                {edu.gpa && <p className="text-sm mt-1">GPA: {edu.gpa}</p>}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* CERTIFICATIONS */}
      {certification.length > 0 && (
        <section className="mb-6">
          <h2 className="border-b-2 border-black font-bold uppercase text-sm">
            Certifications
          </h2>
          {certification.map((cert) => (
            <div key={cert.id} className="mt-4">
              <div className="text-sm font-semibold">
                {cert.certificationName}
              </div>
              <p className="text-sm">{cert.description}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
```
