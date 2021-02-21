import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: 'Roboto',
  fonts: [
    { src: '/fonts/Roboto-Regular.ttf' },
    { src: '/fonts/Roboto-Bold.ttf', fontWeight: 'bold' },
    { src: '/fonts/Roboto-MediumItalic.ttf', fontWeight: 'normal', fontStyle: 'italic' }
  ]
});

export const skillsStyles = StyleSheet.create({
  section: {
    display: 'flex',
    flexDirection: 'row'
  },
  subCategory: {
    fontSize: "11pt",
    lineHeight: "1.3",
    paddingHorizontal: 20,
    marginTop: "1.4",
    marginBottom: "1"
  }
})

export const styles = StyleSheet.create({
  date: {
    fontFamily: "Roboto",
    fontSize: "12pt",
    lineHeight: "1.4",
    marginTop: "1",
    marginBottom: "1",
    color: '#2F5496',
    marginRight: "20px",
    position: "absolute",
    marginLeft: "475px"
  },
  dateSection: {
    flexDirection: "row",
  },
  h1: {
    fontFamily: "Roboto",
    fontSize: "14pt",
    fontWeight: "bold",
    lineHeight: "1",
    marginTop: ".7",
    marginBottom: ".7",
    paddingHorizontal: 20,
    color: "#2F5496"
  },
  h2: {
    fontFamily: "Roboto",
    fontSize: "13pt",
    lineHeight: "1.4",
    marginTop: "1",
    marginBottom: "1",
    paddingHorizontal: 20,
    color: "#2F5496"
  },
  h3: {
    fontFamily: "Roboto-MediumItalic",
    fontSize: "13pt",
    fontWeight: "normal",
    fontStyle: "italic",
    lineHeight: "1.2",
    color: '#000',
    paddingHorizontal: 20,
    marginTop: "1.4",
    marginBottom: "1.4",
  },
  dashedListContent: {
    fontFamily: "Roboto",
    fontSize: "11pt",
    lineHeight: "1.5",
    marginTop: "1.4",
    marginBottom: "1.4",
    paddingHorizontal: 25,
  },
  middleContent: {
    fontFamily: "Roboto",
    fontSize: "11pt",
    lineHeight: "1.5",
    position: "absolute",
    width: "500px",
    marginLeft: "20%",
    marginTop: "1.4",
    marginBottom: "1.4"
  }
})

export const workExperienceStyles = StyleSheet.create({
  section: {
    display: 'flex',
  }
})

export const educationStyles = StyleSheet.create({
  section: {
    justifyContent: "space-between",
    fontSize: "11pt",
    lineHeight: "1.5",
    marginTop: "1.4",
    marginBottom: "1.4",
    paddingHorizontal: 20
  },
  subCategory: {
    fontSize: "11pt",
    lineHeight: "1.5",
    marginTop: "1.4",
    marginBottom: "1.4"
  }
})

export const headerStyles = StyleSheet.create({
  headerView: {
    width: "100%"
  },
  pageHeader:{
    marginTop: "12pt",
    width: "100%",
    textAlign: 'center',
    fontSize: 20
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

