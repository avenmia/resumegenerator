import React from "react";
import { ResumeData, Skill } from "../../types/ResumeData";
import { View, Text, StyleSheet } from '@react-pdf/renderer'
import resumeData from "../../assets/resumeData.json"
const resume = resumeData as ResumeData 

const styles = StyleSheet.create({
  section: {
    display: 'flex',
    flexDirection: 'row'
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
    marginLeft: "30%"
  }
})

export const SkillSection = (category: "Skills", subcategory: Skill) => {
  return(
    <View style={styles.section}>
      <Text style={styles.subCategory}>{subcategory}: </Text> 
      <Text style={styles.content}> {resume.Content[category][subcategory].join(", ")} </Text>
    </View>
)}