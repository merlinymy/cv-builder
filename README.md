# ATS-Friendly Resume Builder

### A React project from The Odin Project

Link to the lesson:  
https://www.theodinproject.com/lessons/node-path-react-new-cv-application#project-solution

---

### How to Use

1. Fill out your information.
2. Click **Save** to store your info in localStorage.
3. Click **Preview** to generate an HTML render of your resume.
4. Click **Download** to download a PDF version of your resume.

---

### Project Log

**4/18/2025**  
The design is inspired by https://www.hyrd.dev/resume.  
Struggled with state and components. I had lots of nested components...

---

**4/19/2025**  
State and props finally _clicked_ for me.  
I'm passing a lot of state to other components though—not sure if that’s good practice.

Components are so convenient! I reused the same one for work experience, projects, and certifications.  
Implemented ordering for cards and bullet points.

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

Discovered `react-pdf` — works perfectly ✅  
I asked ChatGPT to help convert my original `<Resume />` component into a `react-pdf` version.

---

Below is my original code (I didn’t want to delete it... I’m sentimental ❤️)
