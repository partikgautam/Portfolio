import { type ChangeEvent, type FormEvent, useCallback, useState } from "react";
import type { ContactFormValues } from "../types";
import { createMailtoLead } from "../services/contactService";

const serviceOptions = [
  "Business promotion video",
  "Social media marketing",
  "Paid ads campaign",
  "Branding and design",
  "Website or landing page",
  "Complete marketing campaign",
] as const;

const initialForm: ContactFormValues = {
  name: "",
  phone: "",
  businessName: "",
  service: serviceOptions[0],
  message: "",
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormValues>(initialForm);

  const updateField = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setFormData((current) => ({
        ...current,
        [name as keyof ContactFormValues]: value,
      }));
    },
    [],
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      window.location.href = createMailtoLead(formData);
    },
    [formData],
  );

  return {
    formData,
    handleSubmit,
    serviceOptions,
    updateField,
  };
}
