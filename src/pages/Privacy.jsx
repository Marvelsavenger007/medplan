import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const PrivacyPolicy = () => {
  const containerStyle = {
    maxWidth: "800px",
    margin: "80px auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: "#212529",
  };

  const heading1Style = {
    color: "#2a2a2a",
    fontSize: "28px",
    marginBottom: "10px",
  };

  const heading2Style = {
    color: "#444",
    fontSize: "20px",
    marginTop: "30px",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "1.7",
    marginBottom: "15px",
  };

  const ulStyle = {
    paddingLeft: "20px",
    fontSize: "16px",
    lineHeight: "1.7",
    marginBottom: "15px",
  };

  const footerStyle = {
    marginTop: "40px",
    fontSize: "14px",
    color: "#6c757d",
  };

  return (
    <div className="medplan-main">
      <Navbar />

      <div style={containerStyle}>
        <h1 style={heading1Style}>Privacy Policy</h1>
        <p style={paragraphStyle}>
          <strong>Effective Date:</strong> April 30th, 2025
        </p>
        <p style={paragraphStyle}>
          At <strong>MedPlan</strong>, your privacy is important to us. We are
          committed to protecting the personal information you share with us.
          This Privacy Policy explains how we collect, use, and safeguard your
          information when you use our app.
        </p>

        <h2 style={heading2Style}>1. Information We Collect</h2>
        <ul style={ulStyle}>
          <li>
            <strong>Personal Information:</strong> such as your name, email
            address, phone number, and information about your dependents if you
            manage medications on their behalf.
          </li>
          <li>
            <strong>Health Information:</strong> including your medication
            schedules, reminders, health vitals (e.g., blood pressure, blood
            sugar levels), and health history.
          </li>
          <li>
            <strong>Communication Data:</strong> conversations you have with
            pharmacists via our free chat feature.
          </li>
          <li>
            <strong>Usage Data:</strong> including information about how you use
            articles, video blogs, and other educational content on the app.
          </li>
        </ul>

        <h2 style={heading2Style}>2. How We Use Your Information</h2>
        <ul style={ulStyle}>
          <li>Help you manage your medications and health vitals.</li>
          <li>
            Enable you to care for dependents and receive medication reminders
            through your companion feature.
          </li>
          <li>
            Provide access to trusted pharmacists for free health consultations.
          </li>
          <li>Send you reminders, educational content, and health tips.</li>
          <li>Improve our services and user experience.</li>
        </ul>

        <h2 style={heading2Style}>3. How We Protect Your Information</h2>
        <p style={paragraphStyle}>
          We implement a variety of security measures to maintain the safety of
          your personal and health information, including encryption, secure
          servers, and access controls. Only authorized personnel and healthcare
          professionals have access to sensitive data.
        </p>

        <h2 style={heading2Style}>4. Sharing of Information</h2>
        <p style={paragraphStyle}>
          We do not sell, rent, or share your personal information with third
          parties except:
        </p>
        <ul style={ulStyle}>
          <li>With your explicit consent.</li>
          <li>
            With licensed healthcare professionals who are bound by
            confidentiality agreements.
          </li>
          <li>
            If required by law (e.g., legal requests, regulatory compliance).
          </li>
        </ul>

        <h2 style={heading2Style}>5. Your Rights and Choices</h2>
        <ul style={ulStyle}>
          <li>Access and update your personal information.</li>
          <li>Manage or delete your dependent’s information.</li>
          <li>
            Delete your account and request that your information be permanently
            erased.
          </li>
          <li>Opt-out of non-essential notifications at any time.</li>
        </ul>

        <h2 style={heading2Style}>6. Children's Privacy</h2>
        <p style={paragraphStyle}>
          MedPlan is not intended for children under the age of 13 without
          parental consent. If you manage medications for minors, we assume you
          are their parent or legal guardian.
        </p>

        <h2 style={heading2Style}>7. Changes to this Privacy Policy</h2>
        <p style={paragraphStyle}>
          We may update this Privacy Policy from time to time. We will notify
          you of any significant changes by posting a notice in the app or
          sending an email.
        </p>

        <h2 style={heading2Style}>8. Contact Us</h2>
        <p style={paragraphStyle}>
          If you have any questions about this Privacy Policy or your
          information, please contact us at:
          <br />
          📧 <a href="mailto:medplan.help@gmail.com">medplan.help@gmail.com</a>
        </p>

        <p style={footerStyle}>© 2025 MedPlan. All rights reserved.</p>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
