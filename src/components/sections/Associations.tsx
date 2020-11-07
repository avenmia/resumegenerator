import React from 'react';
import { StyleSheet, View, Text } from '@react-pdf/renderer'
import resumeData from "../../assets/resumeData.json"
import { ResumeData} from "../../types/ResumeData";
import { HeaderSection } from "../styledcontent/Header";

const resume = resumeData as ResumeData 

const styles = StyleSheet.create({
  content:{
    fontSize: "11pt",
    marginLeft: "15pt",
    marginRight: "12pt",
    paddingTop: "3pt",
    paddingBottom: "3pt",
    paddingLeft: "3pt",
  }
})

export const Associations = () => (
  <View>
    {HeaderSection("Professional Associations, Activities, Achievements")}
    {resume.Content["Professional Associations, Activities, Achievements"].map(p => {return (<Text style={styles.content}>- {p}</Text>)})}
  </View>
  )