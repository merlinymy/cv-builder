// ResumePDF.jsx
import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Link,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Built‑in Times font ships with react‑pdf – no file to register.
// If you use a custom font, register it here with Font.register.

function formatDateRange(start, end, isCurrent) {
  const fmt = (str) => {
    if (!str) return "";
    const [year, month] = str.split("-");
    const date = new Date(year, month - 1);
    return date.toLocaleString("en-US", { month: "short", year: "numeric" });
  };
  return `${fmt(start)} – ${isCurrent ? "Present" : fmt(end)}`;
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 32,
    backgroundColor: "#FFFFFF",
    color: "#000000",
    fontFamily: "Times-Roman",
    fontSize: 10.5, // ≈ Tailwind `text-sm`
  },

  /* --- common building blocks --- */
  section: { marginBottom: 12 },
  sectionTitle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 2,
  },
  listItem: { marginTop: 2, paddingLeft: 8 },
  listBulletText: { marginRight: 4 },

  /* --- header --- */
  header: { textAlign: "center", marginBottom: 12 },
  name: { fontSize: 24, fontWeight: "bold" },
  contactLine: { marginTop: 4 },

  /* --- two‑column row --- */
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  boldText: { fontWeight: "semibold" },
});

/* ---------------------------------- */
/*            MAIN COMPONENT          */
/* ---------------------------------- */
export const Resume = ({
  general,
  work,
  projects,
  education,
  certification,
  skills,
}) => (
  <Document>
    {/* If you prefer A4, swap `size="A4"` and drop the custom width/height. */}
    <Page size="A4" style={styles.page} wrap>
      {/* ---------- NAME + CONTACT ---------- */}
      <View style={styles.header}>
        <Text style={styles.name}>{general.name}</Text>
        <Text>{general.location}</Text>
        <Text style={styles.contactLine}>
          {general.email} | {general.phone} |{" "}
          <Link src={general.github}>{general.github}</Link> |{" "}
          <Link src={general.linkedIn}>{general.linkedIn}</Link>
        </Text>
      </View>

      {/* ---------- SUMMARY ---------- */}
      {general.summary && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text>{general.summary}</Text>
        </View>
      )}

      {/* ---------- SKILLS ---------- */}
      {!!skills?.length && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <Text>{skills.join(", ")}</Text>
        </View>
      )}

      {/* ---------- WORK EXPERIENCE ---------- */}
      {!!work?.length && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {work.map((job) => (
            <View key={job.id} style={{ marginTop: 8 }}>
              <View style={styles.row}>
                <Text style={styles.boldText}>{job.companyName}</Text>
                <Text>
                  {formatDateRange(job.startDate, job.endDate, job.isCurrent)}
                </Text>
              </View>
              <View style={styles.row}>
                <Text>{job.roleTitle}</Text>
                <Text>{job.location}</Text>
              </View>

              {/* Bullet list (react‑pdf has no <ul>, so prepend “•”) :contentReference[oaicite:0]{index=0} */}
              {job.bulletPoints?.map((pt, i) => (
                <View key={i} style={styles.listItem} wrap={false}>
                  <Text>
                    {"\u2022"} {pt.content}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      )}

      {/* ---------- PROJECTS ---------- */}
      {!!projects?.length && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {projects.map((proj) => (
            <View key={proj.id} style={{ marginTop: 8 }}>
              <View style={styles.row}>
                <Text style={styles.boldText}>{proj.projectName}</Text>
                <Text>
                  {formatDateRange(
                    proj.startDate,
                    proj.endDate,
                    proj.isCurrent,
                  )}
                </Text>
              </View>
              <View style={styles.row}>
                <Text>{proj.roleTitle}</Text>
                <Text>{proj.location}</Text>
              </View>
              {proj.bulletPoints?.map((pt, i) => (
                <View key={i} style={styles.listItem} wrap={false}>
                  <Text>
                    {"\u2022"} {pt.content}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      )}

      {/* ---------- EDUCATION ---------- */}
      {!!education?.length && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu) => (
            <View key={edu.id} style={{ marginTop: 8 }}>
              <View style={styles.row}>
                <Text style={styles.boldText}>{edu.institutionName}</Text>
                <Text>
                  {formatDateRange(edu.startDate, edu.endDate, edu.isCurrent)}
                </Text>
              </View>
              <View style={styles.row}>
                <Text>{edu.certification}</Text>
                {edu.gpa && <Text>GPA: {edu.gpa}</Text>}
              </View>
            </View>
          ))}
        </View>
      )}

      {/* ---------- CERTIFICATIONS ---------- */}
      {!!certification?.length && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          {certification.map((cert) => (
            <View key={cert.id} style={{ marginTop: 8 }}>
              <Text style={styles.boldText}>{cert.certificationName}</Text>
              <Text>{cert.description}</Text>
            </View>
          ))}
        </View>
      )}
    </Page>
  </Document>
);
