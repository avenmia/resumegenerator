import React from "react";
import { Text } from "@react-pdf/renderer";
import { styles } from "../styles/styles"

export const HeaderSection = (header: string) => (
  <Text style={styles.h2}>{header}</Text>
)