import React from "react";
import { View, Text, Link } from "@react-pdf/renderer";
import resumeData from "../../assets/resumeData.json"
import { ResumeData } from "../../types/ResumeData";
import { headerStyles } from "../styles/styles"

const resume = resumeData as ResumeData 

export const Header = () => (
  <View style={headerStyles.headerView}>
    <Text style={headerStyles.pageHeader} >
      {resume.Header.Name}
    </Text>
    <Text style={headerStyles.jobTitle} >
      {resume.Header["Job Title"]}
    </Text>
    <View style={headerStyles.contactSection} >
      {resume.Header.Contact.map(c => {return (<Link src={c.src} style={headerStyles.contact}>{c.name}</Link>)})} 
    </View>
  </View>
)