import React from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    padding: "12pt",
    color: "#2F5496"
  }
})

export const HeaderSection = (header: string) => (
  <Text style={styles.header}>{header}</Text>
)