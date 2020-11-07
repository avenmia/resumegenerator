import { View, Text } from "@react-pdf/renderer";
import React from "react";
import { WorkExperience } from "../../types/ResumeData";
import { workExperienceStyles } from "../styles/styles"

export const WorkExperienceSection = (workExperience: WorkExperience) => 
{
  return (
    <View style={workExperienceStyles.section}>
      <View style={workExperienceStyles.dateSection}>
        <Text style={workExperienceStyles.jobTitle}>{workExperience["Title"]}</Text>
        <Text style={workExperienceStyles.date}>{workExperience["Start Date"]} - {workExperience["End Date"]}</Text>
      </View>
      <Text style={workExperienceStyles.employer}>{workExperience["Employer"]}</Text>
      {workExperience["Description"].map(w => <Text style={workExperienceStyles.description}>- {w}</Text>)}
    </View>
  )
}