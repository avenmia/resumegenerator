import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: 'Roboto',
  fonts: [
      { src: '/fonts/Roboto-Regular.ttf' },
      { src: '/fonts/Roboto-Bold.ttf', fontWeight: 'bold' }
    ]
  });


export const styles = StyleSheet.create({

})

export const workExperienceStyles = StyleSheet.create({
  section: {
    display: 'flex',
  },
  jobTitle: {
    fontSize: 13,
    color: '#2F5496',
    marginLeft: "12pt",
    marginTop: "3pt",
    paddingTop: "2pt"
  },
  employer: {
    fontFamily: "Roboto",
    color: "#000000",
    marginLeft: "12pt",
    fontSize: "11pt",
    fontWeight: "extrabold"
  },
  date: {
    fontSize: "11pt",
    color: '#2F5496',
    justifyContent: "flex-end",
    marginRight: "12pt"
  },
  dateSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  description: {
    fontSize: "11pt",
    marginLeft: "15pt",
    marginRight: "12pt",
    paddingTop: "3pt",
    paddingBottom: "3pt",
    paddingLeft: "3pt",
  }
})

export const educationStyles = StyleSheet.create({
  school: {
    fontSize: 13,
    color: '#2F5496',
    marginLeft: "12pt",
    marginTop: "3pt",
    paddingTop: "2pt"
  },
  degree: {
    marginLeft: "12pt",
    fontSize: "11"
  },
  major: {

  },
  section: {
    justifyContent: "space-between",
    fontSize: "11pt",
    marginLeft: "12pt"
  },
  dateSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  date: {
    fontSize: "11pt",
    color: '#2F5496',
    justifyContent: "flex-end",
    marginRight: "12pt"
  },
  subCategory: {
    fontSize: "11pt",
    paddingBottom: "3pt",
    marginLeft: "12pt"
  },
  content: {
    fontSize: "11pt",
    position: "absolute",
    width: "500px",
    marginLeft: "20%"
  }
})

export const headerStyles = StyleSheet.create({
  pageHeader:{
    marginTop: "24pt",
    textAlign: 'center',
    fontSize: 28
  },
  jobTitle: {
    fontSize: 12,
    textAlign: 'center',
    color: '#787878',
    fontWeight: "bold",
    marginBottom: "0pt"
  },
  contact:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 11,
    color: '#0000EE',
    textDecoration: 'underline'    
  }
})

export const resumeStyles = StyleSheet.create({
  pageHeader:{
    padding: 10,
    textAlign: 'center'
  },
  jobTitle: {
    fontSize: 12,
    textAlign: 'center'
  },
  contact:{
    flexDirection: 'row',
    fontSize: 11,
  },
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
})

export const headerSectionStyles = StyleSheet.create({
  header: {
    fontSize: 16,
    marginTop: "5pt",
    marginLeft: "12pt",
    color: "#2F5496"
  }
})

export const skillsStyles = StyleSheet.create({
  section: {
    display: 'flex',
    flexDirection: 'row'
  },
  subCategory: {
    fontSize: "11pt",
    paddingBottom: "3pt",
    marginLeft: "12pt"
  },
  content: {
    fontSize: "11pt",
    position: "absolute",
    width: "500px",
    marginLeft: "20%"
  }
})

export const associationStyles = StyleSheet.create({
  content:{
    fontSize: "11pt",
    marginLeft: "15pt",
    marginRight: "12pt",
    paddingTop: "3pt",
    paddingBottom: "3pt",
    paddingLeft: "3pt",
  }
})