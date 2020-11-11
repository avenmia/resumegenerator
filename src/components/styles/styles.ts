import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: 'Roboto',
  fonts: [
      { src: '/fonts/Roboto-Regular.ttf' },
      { src: '/fonts/Roboto-Bold.ttf', fontWeight: 'bold' }
    ]
  });


export const styles = StyleSheet.create({
  date: {
    fontFamily: "Roboto",
    fontSize: "13pt",
    color: '#2F5496',
    paddingTop: "2pt",
    marginTop : "1pt",
    marginRight: "20px",
    position: "absolute",
    marginLeft: "484px"
  },
  dateSection: {
    flexDirection: "row",
  },
  h1: {

  },
  h2: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "16pt",
    marginTop: "5pt",
    paddingHorizontal: 20,
    color: "#2F5496"
  },
  h3: {
    fontFamily: "Roboto",
    fontSize: "13pt",
    color: '#2F5496',
    paddingHorizontal: 20,
    marginTop: "1pt",
    marginBottom: "1pt",
    paddingTop: "2pt"
  },
  dashedListContent: {
    fontFamily: "Roboto",
    fontSize: "11pt",
    paddingHorizontal: 25,
    paddingTop: "3pt",
    paddingBottom: "3pt",
  },
  middleContent: {
    fontFamily: "Roboto",
    fontSize: "11pt",
    position: "absolute",
    width: "500px",
    marginLeft: "20%"
  }
})

export const workExperienceStyles = StyleSheet.create({
  section: {
    display: 'flex',
  },
  employer: {
    fontFamily: "Roboto",
    color: "#000000",
    paddingHorizontal: 20,
    fontSize: "11pt",
    fontWeight: "extrabold"
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
  degree: {
    paddingHorizontal: 20,
    fontSize: "11"
  },
  major: {

  },
  section: {
    justifyContent: "space-between",
    fontSize: "11pt",
    paddingHorizontal: 20
  },
  subCategory: {
    fontSize: "11pt",
    paddingBottom: "3pt",
  }
})

export const headerStyles = StyleSheet.create({
  headerView: {
    width: "100%"
  },
  pageHeader:{
    marginTop: "24pt",
    width: "100%",
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
  contactSection:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%"
  },
  contact: {
    padding: 5,
    fontSize: 11,
    color: '#2F5496',
    textDecoration: 'underline',
    paddingHorizontal: 20,
  }
})

export const resumeStyles = StyleSheet.create({
  mainView: {
    width: "100%",
  },
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

export const skillsStyles = StyleSheet.create({
  section: {
    display: 'flex',
    flexDirection: 'row'
  },
  subCategory: {
    fontSize: "11pt",
    paddingBottom: "3pt",
    marginTop: "1pt",
    paddingHorizontal: 20
  },
  content: {
    fontSize: "11pt",
    position: "absolute",
    width: "500px",
    marginLeft: "20%"
  }
})
