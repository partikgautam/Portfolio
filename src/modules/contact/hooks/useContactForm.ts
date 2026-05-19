import { type ChangeEvent, type FormEvent, useCallback, useState } from "react";
import type { ContactFormValues } from "../types";
import { createMailtoLead } from "../services/contactService";

const serviceOptions = [
  "Leadership enquiry",
  "Public service discussion",
  "Business meeting",
  "Future planning",
  "General contact",
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
