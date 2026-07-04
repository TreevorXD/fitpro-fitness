"use client";

import * as motion from "motion/react-client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Plus, Trash2 } from "lucide-react";

interface Athlete {
  fullName: string;
  dob: string;
}

const MAX_ATHLETES = 5;

export default function RegisterForm() {
  const [registeringFor, setRegisteringFor] = useState<"self" | "child">("self");

  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [athletes, setAthletes] = useState<Athlete[]>([{ fullName: "", dob: "" }]);

  const [emergencyContact, setEmergencyContact] = useState({
    name: "",
    phone: "",
    relationship: "",
  });

  const [medical, setMedical] = useState({
    hasChronicIllness: "" as "" | "yes" | "no",
    hasEmergencyMedication: "" as "" | "yes" | "no",
    details: "",
  });

  const [waiverAccepted, setWaiverAccepted] = useState(false);
  const [signature, setSignature] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleAthleteChange = (index: number, field: keyof Athlete, value: string) => {
    setAthletes((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const addAthlete = () => {
    if (athletes.length < MAX_ATHLETES) {
      setAthletes((prev) => [...prev, { fullName: "", dob: "" }]);
    }
  };

  const removeAthlete = (index: number) => {
    setAthletes((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!waiverAccepted) {
      setErrorMsg("You must acknowledge the waiver to continue.");
      return;
    }

    if (!signature.trim()) {
      setErrorMsg("Please type your name as your electronic signature.");
      return;
    }

    if (!medical.hasChronicIllness || !medical.hasEmergencyMedication) {
      setErrorMsg("Please answer both medical questions.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          registeringFor,
          contact,
          athletes,
          emergencyContact,
          medical,
          signature,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-md border border-input bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary";
  const labelClass = "block text-sm font-semibold mb-2";

  if (status === "success") {
    return (
      <section className="py-24 px-4 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black font-heading mb-4">
            Registration <span className="text-primary">Received</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Thanks! We've received your registration and will be in touch shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black font-heading mb-4">
            Player <span className="text-primary">Registration</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Please complete the form below to register. If you're registering
            on behalf of your child, select that option and fill in their
            details as the athlete.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="space-y-10"
        >
          {/* Who is registering */}
          <div>
            <label className={labelClass}>Who are you registering? *</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="registeringFor"
                  checked={registeringFor === "self"}
                  onChange={() => setRegisteringFor("self")}
                  className="accent-primary w-4 h-4"
                />
                Myself
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="registeringFor"
                  checked={registeringFor === "child"}
                  onChange={() => setRegisteringFor("child")}
                  className="accent-primary w-4 h-4"
                />
                My child
              </label>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-heading">
              {registeringFor === "self" ? "Your Information" : "Parent / Guardian Information"}
            </h2>

            <div>
              <label className={labelClass}>Full Name *</label>
              <input
                required
                type="text"
                value={contact.fullName}
                onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
                className={inputClass}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Email *</label>
                <input
                  required
                  type="email"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Phone *</label>
                <input
                  required
                  type="tel"
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Athletes */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold font-heading">
                {registeringFor === "self" ? "Athlete Information" : "Child's Information"}
              </h2>
              {registeringFor === "self" && (
                <span className="text-sm text-muted-foreground">
                  Registering more than one family member? Add athletes below.
                </span>
              )}
            </div>

            {athletes.map((athlete, index) => (
              <div
                key={index}
                className="p-5 border border-input rounded-md space-y-4 relative"
              >
                {athletes.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeAthlete(index)}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-destructive transition-colors"
                    aria-label="Remove athlete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <p className="font-semibold">Athlete {index + 1}</p>

                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input
                    required
                    type="text"
                    value={athlete.fullName}
                    onChange={(e) => handleAthleteChange(index, "fullName", e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Date of Birth *</label>
                  <input
                    required
                    type="date"
                    value={athlete.dob}
                    onChange={(e) => handleAthleteChange(index, "dob", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            ))}

            {athletes.length < MAX_ATHLETES && (
              <button
                type="button"
                onClick={addAthlete}
                className="flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <Plus className="w-4 h-4" />
                Add another athlete
              </button>
            )}
          </div>

          {/* Emergency contact */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-heading">Emergency Contact</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Name *</label>
                <input
                  required
                  type="text"
                  value={emergencyContact.name}
                  onChange={(e) =>
                    setEmergencyContact({ ...emergencyContact, name: e.target.value })
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Phone *</label>
                <input
                  required
                  type="tel"
                  value={emergencyContact.phone}
                  onChange={(e) =>
                    setEmergencyContact({ ...emergencyContact, phone: e.target.value })
                  }
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Relationship to Athlete(s) *</label>
              <input
                required
                type="text"
                placeholder="e.g. Spouse, Parent, Sibling"
                value={emergencyContact.relationship}
                onChange={(e) =>
                  setEmergencyContact({ ...emergencyContact, relationship: e.target.value })
                }
                className={inputClass}
              />
            </div>
          </div>

          {/* Medical questions */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-heading">Medical Information</h2>

            <div>
              <label className={labelClass}>
                Do any of the athletes listed have any history of chronic illness or
                other conditions coaches should know about, that may impact their
                performance or safety during strenuous exercise in a group setting? *
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="chronicIllness"
                    checked={medical.hasChronicIllness === "yes"}
                    onChange={() => setMedical({ ...medical, hasChronicIllness: "yes" })}
                    className="accent-primary w-4 h-4"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="chronicIllness"
                    checked={medical.hasChronicIllness === "no"}
                    onChange={() => setMedical({ ...medical, hasChronicIllness: "no" })}
                    className="accent-primary w-4 h-4"
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <label className={labelClass}>
                Do any of the athletes listed carry emergency medication for severe
                allergies, diabetes, or any other condition? *
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="emergencyMedication"
                    checked={medical.hasEmergencyMedication === "yes"}
                    onChange={() =>
                      setMedical({ ...medical, hasEmergencyMedication: "yes" })
                    }
                    className="accent-primary w-4 h-4"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="emergencyMedication"
                    checked={medical.hasEmergencyMedication === "no"}
                    onChange={() =>
                      setMedical({ ...medical, hasEmergencyMedication: "no" })
                    }
                    className="accent-primary w-4 h-4"
                  />
                  No
                </label>
              </div>
            </div>

            {(medical.hasChronicIllness === "yes" ||
              medical.hasEmergencyMedication === "yes") && (
              <div>
                <label className={labelClass}>
                  If you selected yes to either of the above, please describe / provide
                  details: *
                </label>
                <textarea
                  required
                  rows={4}
                  value={medical.details}
                  onChange={(e) => setMedical({ ...medical, details: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>
            )}
          </div>

          {/* Waiver */}
          <div className="space-y-4 p-5 border border-input rounded-md bg-muted/30">
            <h2 className="text-xl font-bold font-heading">Waiver</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I acknowledge and fully understand and agree to assume all risks and
              hazards involved in and arising out of my (or my child's) activities
              with Victoria Water Polo Club. I hereby waive, release, forego and
              relinquish any and all claims, demands, suits, actions or causes of
              action which I may have against the directors, employees, and
              organization's activities. In the event that a family doctor cannot be
              contacted or is unable to attend in an emergency, I hereby authorize and
              direct Victoria Water Polo Club to choose a doctor to attend to the
              athlete(s) listed above. I further acknowledge and agree that typing my
              name on the signature line constitutes an electronic signature, and that
              my electronic signature is the legal equivalent of my manual signature.
            </p>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={waiverAccepted}
                onChange={(e) => setWaiverAccepted(e.target.checked)}
                className="accent-primary w-4 h-4 mt-1"
              />
              <span className="font-medium">
                I have read and agree to the waiver above. *
              </span>
            </label>

            <div>
              <label className={labelClass}>Type your full name as your signature *</label>
              <input
                required
                type="text"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          {errorMsg && (
            <p className="text-center text-red-600 font-medium">{errorMsg}</p>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={status === "loading"}
            className="w-full bg-primary hover:bg-primary/90 text-lg font-semibold transition-transform duration-300 hover:scale-105"
          >
            {status === "loading" ? "Submitting..." : "Submit Registration"}
          </Button>

          {status === "error" && (
            <p className="text-center text-red-600 font-medium">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}