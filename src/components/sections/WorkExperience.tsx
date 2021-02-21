import { View, Text } from "@react-pdf/renderer";
import React from "react";
import { WorkExperience } from "../../types/ResumeData";
import { styles, workExperienceStyles } from "../styles/styles"

export const WorkExperienceSection = (workExperience: WorkExperience) => 
{
  return (
    <View style={workExperienceStyles.section} >
      <View style={styles.dateSection}>
        <Text style={styles.h2}>{workExperience["Title"]}</Text>
        <Text style={styles.date}>{workExperience["Start Date"]} to {workExperience["End Date"]}</Text>
      </View>
      <Text style={styles.h3}>{workExperience["Employer"]}</Text>
      {workExperience["Description"].map(w => <Text style={styles.dashedListContent}>- {w}</Text>)}
    </View>
  )
}