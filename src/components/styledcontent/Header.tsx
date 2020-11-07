import React from "react";
import { Text } from "@react-pdf/renderer";
import { headerSectionStyles } from "../styles/styles"

export const HeaderSection = (header: string) => (
  <Text style={headerSectionStyles.header}>{header}</Text>
)