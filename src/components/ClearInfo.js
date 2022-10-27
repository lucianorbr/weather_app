import React from "react";
import { showWarning } from "./showWarning";

export function clearInfo() {
  showWarning('')
  document.querySelector('.resultado').style.display = 'none'
}