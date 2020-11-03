import React from "react";
import { Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  content: {
    marginLeft: "12pt",
    fontSize: "11pt"
  }
})

export const ContentSection = (section:string) => (
  <Text style={styles.content}>{section}</Text>
)