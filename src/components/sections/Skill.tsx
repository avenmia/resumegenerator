import React from "react";
import { ResumeData, Skill } from "../../types/ResumeData";
import { ContentSection } from "../styledcontent/Content";
import { View } from '@react-pdf/renderer'
import resumeData from "../../assets/resumeData.json"
const resume = resumeData as ResumeData 

export const SkillSection = (category: "Skills", subcategory: Skill) => {
  return(
    <View>
      {resume.Content[category][subcategory].map(x => ContentSection(x))}
    </View>
)}