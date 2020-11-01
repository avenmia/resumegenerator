import React from "react";
import { EducationExperience } from "../../types/ResumeData";
import { View, Text } from "@react-pdf/renderer";


export const EducationSection = (educationExperience: EducationExperience) =>
{
  return (
    <View>
      <Text>School: {educationExperience["School"]}</Text>
      <Text>Degree: {educationExperience["Degree"]}</Text>
      <Text>Major: {educationExperience["Major"]}</Text>
      <Text>Start Date: {educationExperience["Start Date"]}</Text>
      <Text>End Date: {educationExperience["End Date"]}</Text>
    </View>
  )
}