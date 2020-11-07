import React from 'react';
import { StyleSheet, View, Text } from '@react-pdf/renderer'
import resumeData from "../../assets/resumeData.json"
import { ResumeData} from "../../types/ResumeData";
import { HeaderSection } from "../styledcontent/Header";
import { associationStyles } from "../styles/styles";

const resume = resumeData as ResumeData 

export const Associations = () => (
  <View>
    {HeaderSection("Professional Associations, Activities, Achievements")}
    {resume.Content["Professional Associations, Activities, Achievements"].map(p => {return (<Text style={associationStyles.content}>- {p}</Text>)})}
  </View>
  )