
import { useState } from "react";
import "./MemberRegistration.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  plan: "",
  joiningDate: "",
};

function validateForm(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Please enter the member's name.";
  } else if (form.name.trim().length < 3) {
    errors.name = "Name must contain at least 3 characters.";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!/^\d{10}$/.test(form.phone)) {
    errors.phone = "Enter a valid 10-digit phone number.";
  }

  if (!form.plan) {
    errors.plan = "Please select a membership plan.";
  }

  if (!form.joiningDate) {
    errors.joiningDate = "Please select a joining date.";
  } else if (form.joiningDate > new Date().toLocaleDateString("en-CA")) {
    errors.joiningDate = "Joining date cannot be in the future.";
  }

  return errors;
}

export default function MemberRegistration() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submittedMember, setSubmittedMember] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmittedMember(null);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmittedMember(null);
      return;
    }

    // Frontend demonstration only; no backend or database yet.
    setSubmittedMember({ ...form });
    console.log("Registered member:", form);
    setForm(initialForm);
    setErrors({});
  }

  function handleReset() {
    setForm(initialForm);
    setErrors({});
    setSubmittedMember(null);
  }

  const today = new Date().toLocaleDateString("en-CA");

  return (
    <main className="member-page">
      <section className="member-form-card">
        <div className="member-heading">
          <span className="member-eyebrow">GYM MANAGEMENT SYSTEM</span>
          <h1>Register a Member</h1>
          <p>Add a new member to your fitness community.</p>
        </div>

        {submittedMember && (
          <div className="member-success" role="status">
            <strong>Member registered successfully!</strong>
            <p>
              {submittedMember.name} has been registered with the{" "}
              {submittedMember.plan} plan.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="member-field">
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter full name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <small id="name-error" className="member-error">
                {errors.name}
              </small>
            )}
          </div>

          <div className="member-field">
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <small id="email-error" className="member-error">
                {errors.email}
              </small>
            )}
          </div>

          <div className="member-field">
            <label htmlFor="phone">Phone Number *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              value={form.phone}
              onChange={handleChange}
              placeholder="10-digit phone number"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <small id="phone-error" className="member-error">
                {errors.phone}
              </small>
            )}
          </div>

          <div className="member-field">
            <label htmlFor="plan">Membership Plan *</label>
            <select
              id="plan"
              name="plan"
              value={form.plan}
              onChange={handleChange}
              aria-invalid={Boolean(errors.plan)}
              aria-describedby={errors.plan ? "plan-error" : undefined}
            >
              <option value="">Select a plan</option>
              <option value="Basic">Basic — 1 Month</option>
              <option value="Standard">Standard — 3 Months</option>
              <option value="Premium">Premium — 12 Months</option>
            </select>
            {errors.plan && (
              <small id="plan-error" className="member-error">
                {errors.plan}
              </small>
            )}
          </div>

          <div className="member-field">
            <label htmlFor="joiningDate">Joining Date *</label>
            <input
              id="joiningDate"
              name="joiningDate"
              type="date"
              max={today}
              value={form.joiningDate}
              onChange={handleChange}
              aria-invalid={Boolean(errors.joiningDate)}
              aria-describedby={
                errors.joiningDate ? "date-error" : undefined
              }
            />
            {errors.joiningDate && (
              <small id="date-error" className="member-error">
                {errors.joiningDate}
              </small>
            )}
          </div>

          <div className="member-actions">
            <button className="member-submit" type="submit">
              Register Member
            </button>
            <button
              className="member-reset"
              type="button"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>

          <p className="member-note">* All fields are required.</p>
        </form>
      </section>
    </main>
  );
}
