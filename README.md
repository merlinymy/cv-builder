# ATS Friendly Resume Builder

### A react Project from The Odin Project

link to the lesson: https://www.theodinproject.com/lessons/node-path-react-new-cv-application#project-solution

### How to use

1. fill out your information
2. click save to save your info to localstorage
3. click preview to generate a html render of the resume
4. click download to download the pdf version of the resume

### Project Log

4/18/2025
The design is from https://www.hyrd.dev/resume

struggling with state, and components. I have lots of nested components..

4/19/2025
state and props finally clicked for me. I am passing lots of states
to other components tho. Don't know if it's a good practice

Components are so convenient! I reused the same component for work experience,
projects, and certification

Implemented ordering cards and bullet points

4/20/2025
Trying different ways to display the resume.

I created a div that wraps all the resume elements in it. It's not terrible.
How do I print it out or download it as pdf?

html2pdf (nope, can't install it correctly)
jspdf (doesn't support tailwind if I want to convert html to pdf directly)
jspdf + html2canvas (html2canvas doesn't support tailwind. I'm dead)
lmao there is a html2canvas-pro
jspdf + html2canvas (it works, but it's basically a screenshot so the final result
is really blurry. And cannot select the texts. Not ATS friendly)

react-pdf works perfectly. I decided to ask chatGPT to convert my original Resume
component to react-pdf format. Below is the code I wrote (don't want to delete it
because I am sentimental)

```
original Resume component:

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
