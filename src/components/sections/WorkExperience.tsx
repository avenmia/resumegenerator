import { View, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import { WorkExperience } from "../../types/ResumeData";

const styles = StyleSheet.create({
  section: {
    display: 'flex',
  },
  jobTitle: {
    fontSize: 13,
    color: '#2F5496',
    marginLeft: "12pt",
    marginTop: "3pt",
    paddingTop: "2pt"
  },
  employer: {
    fontWeight: "bold",
    color: "#000000",
    marginLeft: "12pt",
    fontSize: "11pt"
  },
  date: {
    fontSize: "11pt",
    color: '#2F5496',
    justifyContent: "flex-end",
    marginRight: "12pt"
  },
  dateSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  description: {
    fontSize: "11pt",
    marginLeft: "15pt",
    marginRight: "12pt"
  }
})

export const WorkExperienceSection = (workExperience: WorkExperience) => 
{
  return (
    <View style={styles.section}>
      <View style={styles.dateSection}>
        <Text style={styles.jobTitle}>{workExperience["Title"]}</Text>
        <Text style={styles.date}>{workExperience["Start Date"]} - {workExperience["End Date"]}</Text>
      </View>
      <Text style={styles.employer}>{workExperience["Employer"]}</Text>
      {workExperience["Description"].map(w => <Text style={styles.description}>- {w}</Text>)}
    </View>
  )
}