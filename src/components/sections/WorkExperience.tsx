import { View, Text } from "@react-pdf/renderer";
import React from "react";
import { WorkExperience } from "../../types/ResumeData";

export const WorkExperienceSection = (workExperience: WorkExperience) => 
{
  return (
    <View>
      <Text>Title: {workExperience["Title"]}</Text>
      <Text>Employer: {workExperience["Employer"]}</Text>
      <Text>Start Date: {workExperience["Start Date"]}</Text>
      <Text>End Date: {workExperience["End Date"]}</Text>
      <Text>Description: {workExperience["Description"]}</Text>
    </View>
  )
}