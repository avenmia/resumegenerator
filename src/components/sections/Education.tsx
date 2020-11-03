import React from "react";
import { EducationExperience } from "../../types/ResumeData";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  school: {
    fontSize: 13,
    color: '#2F5496',
    marginLeft: "12pt",
    marginTop: "3pt",
    paddingTop: "2pt"
  },
  degree: {
    marginLeft: "12pt",
    fontSize: "11"
  },
  major: {

  },
  section: {
    justifyContent: "space-between",
    fontSize: "11pt",
    marginLeft: "12pt"
  },
  dateSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  date: {
    fontSize: "11pt",
    color: '#2F5496',
    justifyContent: "flex-end",
    marginRight: "12pt"
  },
  subCategory: {
    fontSize: "11pt",
    paddingBottom: "3pt",
    marginLeft: "12pt"
  },
  content: {
    fontSize: "11pt",
    position: "absolute",
    width: "500px",
    marginLeft: "20%"
  }
})

export const EducationSection = (educationExperience: EducationExperience) =>
{
  return (
    <View>
      <View style={styles.dateSection}>
        <Text style={styles.school}>{educationExperience["School"]}</Text>
        <Text style={styles.date}>{educationExperience["Start Date"]} - {educationExperience["End Date"]}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subCategory}>Degree:</Text>
        <Text style={styles.content}>{educationExperience["Degree"]}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subCategory}>Major:</Text>
        <Text style={styles.content}>{educationExperience["Major"]}</Text>
      </View>
    </View>
  )
}