import * as React from "react";

interface Athlete {
  fullName: string;
  dob: string;
}

interface RegistrationEmailProps {
  registeringFor: "self" | "child";
  contact: { fullName: string; email: string; phone: string };
  athletes: Athlete[];
  emergencyContact: { name: string; phone: string; relationship: string };
  medical: { hasChronicIllness: string; hasEmergencyMedication: string; details: string };
  signature: string;
}

export function RegistrationEmailTemplate({
  registeringFor,
  contact,
  athletes,
  emergencyContact,
  medical,
  signature,
}: RegistrationEmailProps) {
  return (
    <div>
      <h1>New Player Registration</h1>

      <p><strong>Registering for:</strong> {registeringFor === "self" ? "Self" : "Child"}</p>

      <h2>Contact Information</h2>
      <p><strong>Name:</strong> {contact.fullName}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>

      <h2>Athlete(s)</h2>
      {athletes.map((athlete, i) => (
        <p key={i}>
          <strong>Athlete {i + 1}:</strong> {athlete.fullName} — DOB: {athlete.dob}
        </p>
      ))}

      <h2>Emergency Contact</h2>
      <p><strong>Name:</strong> {emergencyContact.name}</p>
      <p><strong>Phone:</strong> {emergencyContact.phone}</p>
      <p><strong>Relationship:</strong> {emergencyContact.relationship}</p>

      <h2>Medical Information</h2>
      <p><strong>Chronic illness/condition:</strong> {medical.hasChronicIllness}</p>
      <p><strong>Carries emergency medication:</strong> {medical.hasEmergencyMedication}</p>
      {medical.details && (
        <p><strong>Details:</strong> {medical.details}</p>
      )}

      <h2>Waiver</h2>
      <p>Electronically signed by: <strong>{signature}</strong></p>
    </div>
  );
}