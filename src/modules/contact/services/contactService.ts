import { siteConfig } from "../../../config/site";
import type { ContactFormValues } from "../types";

export function createMailtoLead(formData: ContactFormValues) {
  const subject = encodeURIComponent(`New message for Partik Gautam from ${formData.name}`);
  const body = encodeURIComponent(
    [
      "New website contact message for Partik Gautam",
      "",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Organization / Address: ${formData.businessName}`,
      `Purpose: ${formData.service}`,
      "",
      "Message:",
      formData.message,
    ].join("\n"),
  );

  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

/*
  FUTURE NESTJS BACKEND:
  Replace createMailtoLead usage with a POST request to your Nest API.
  Example endpoint: POST /leads
  Keep this file as the single place for contact form submission logic.
*/
