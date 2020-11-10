import React from "react";
import { EducationExperience } from "../../types/ResumeData";
import { View, Text } from "@react-pdf/renderer";
import { styles, educationStyles } from "../styles/styles"

export const EducationSection = (educationExperience: EducationExperience) =>
{
  return (
    <View>
      <View style={styles.dateSection}>
        <Text style={styles.h3}>{educationExperience["School"]}</Text>
        <Text style={styles.date}>{educationExperience["Start Date"]} to {educationExperience["End Date"]}</Text>
      </View>
      <View style={educationStyles.section}>
        <Text style={educationStyles.subCategory}>Degree</Text>
        <Text style={styles.middleContent}>{educationExperience["Degree"]}</Text>
      </View>
      <View style={educationStyles.section}>
        <Text style={educationStyles.subCategory}>Major</Text>
        <Text style={styles.middleContent}>{educationExperience["Major"]}</Text>
      </View>
    </View>
  )
}