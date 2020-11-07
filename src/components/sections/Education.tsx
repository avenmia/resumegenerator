import React from "react";
import { EducationExperience } from "../../types/ResumeData";
import { View, Text } from "@react-pdf/renderer";
import { educationStyles } from "../styles/styles"

export const EducationSection = (educationExperience: EducationExperience) =>
{
  return (
    <View>
      <View style={educationStyles.dateSection}>
        <Text style={educationStyles.school}>{educationExperience["School"]}</Text>
        <Text style={educationStyles.date}>{educationExperience["Start Date"]} - {educationExperience["End Date"]}</Text>
      </View>
      <View style={educationStyles.section}>
        <Text style={educationStyles.subCategory}>Degree:</Text>
        <Text style={educationStyles.content}>{educationExperience["Degree"]}</Text>
      </View>
      <View style={educationStyles.section}>
        <Text style={educationStyles.subCategory}>Major:</Text>
        <Text style={educationStyles.content}>{educationExperience["Major"]}</Text>
      </View>
    </View>
  )
}