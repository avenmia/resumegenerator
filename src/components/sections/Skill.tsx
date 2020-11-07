import React from "react";
import { ResumeData, Skill } from "../../types/ResumeData";
import { View, Text } from '@react-pdf/renderer'
import resumeData from "../../assets/resumeData.json"
import { skillsStyles } from "../styles/styles"
const resume = resumeData as ResumeData 

export const SkillSection = (category: "Skills", subcategory: Skill) => {
  return(
    <View style={skillsStyles.section}>
      <Text style={skillsStyles.subCategory}>{subcategory}: </Text> 
      <Text style={skillsStyles.content}> {resume.Content[category][subcategory].join(", ")} </Text>
    </View>
)}