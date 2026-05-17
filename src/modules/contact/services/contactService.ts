import { siteConfig } from "../../../config/site";
import type { ContactFormValues } from "../types";

export function createMailtoLead(formData: ContactFormValues) {
  const subject = encodeURIComponent(`New marketing enquiry from ${formData.businessName || formData.name}`);
  const body = encodeURIComponent(
    [
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Business Name: ${formData.businessName}`,
      `Service Needed: ${formData.service}`,
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
