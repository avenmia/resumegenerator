import React from 'react';
import {  View, Text } from '@react-pdf/renderer'
import resumeData from "../../assets/resumeData.json"
import { ResumeData} from "../../types/ResumeData";
import { HeaderSection } from "../styledcontent/Header";
import { styles } from "../styles/styles";

const resume = resumeData as ResumeData 

export const Associations = () => (
  <View>
    {HeaderSection("Professional Associations, Activities, Achievements")}
    {resume.Content["Professional Associations, Activities, Achievements"].map(p => {return (<Text style={styles.dashedListContent}>- {p}</Text>)})}
  </View>
  )