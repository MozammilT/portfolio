import React, { useEffect } from "react";
import { ScrollProgress } from "@/components/scroll-progress";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <ScrollProgress />
      <section className="max-w-5xl mx-auto px-6 py-12 text-neutral-200 leading-relaxed">
        <div className="border-b border-neutral-700 pb-8 mb-10">
          <h1 className="max-sm:text-3xl text-5xl font-bold text-white mb-6 text-center">
            Privacy Policy
          </h1>
          <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700">
            <p className="text-base text-neutral-300 mb-2">
              <strong className="text-white">Effective Date:</strong> August 22,
              2025
            </p>
            <p className="text-base text-neutral-300 mb-2">
              <strong className="text-white">Last Reviewed:</strong> August 22,
              2025
            </p>
            <p className="text-base text-neutral-300 mb-2">
              <strong className="text-white">Website:</strong>{" "}
              <a
                href="https://mozammiltariq.dev"
                className="text-sand hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://mozammiltariq.dev
              </a>
            </p>
            <p className="text-base text-neutral-300">
              <strong className="text-white">Data Controller:</strong> Mozammil
              Tarique
            </p>
          </div>
        </div>

        <div className="mb-10">
          <p className="text-lg mb-4 text-neutral-100">
            This Privacy Policy describes how Mozammil Tarique ("I," "me," "my,"
            or "the Website Owner") collects, uses, maintains, and discloses
            information collected from users ("you," "your," or "User") of the
            website located at https://mozammiltariq.dev ("Website" or
            "Service").
          </p>
          <p className="mb-4">
            Your privacy is of utmost importance to me. This Privacy Policy
            outlines my commitment to protecting your personal information and
            explains your rights regarding the data I may collect. By accessing
            or using this Website, you acknowledge that you have read,
            understood, and agree to be bound by this Privacy Policy.
          </p>
          <p className="text-neutral-300 text-sm bg-neutral-800/30 p-4 rounded border-l-4 border-sand">
            <strong className="text-sand">Important:</strong> Please read this
            Privacy Policy carefully. If you do not agree with the terms of this
            Privacy Policy, please do not access or use the Website.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            1. Information We Collect
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              1.1 Personal Information
            </h3>
            <p className="mb-4">
              Personal Information refers to any information that can be used to
              identify you as an individual. I collect Personal Information only
              when you voluntarily provide it through:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 pl-4">
              <li>Contact forms or inquiry submissions</li>
              <li>Direct email communications</li>
              <li>Professional networking interactions</li>
              <li>Subscription to newsletters or updates (if applicable)</li>
            </ul>
            <p className="text-sm text-neutral-300 bg-neutral-800/30 p-3 rounded">
              <strong>
                Types of Personal Information collected may include:
              </strong>{" "}
              Name, email address, phone number, company name, job title,
              message content, and any other information you choose to provide.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              1.2 Non-Personal Information
            </h3>
            <p className="mb-4">
              Non-Personal Information is data that cannot be used to identify
              you personally. This information is collected automatically when
              you visit the Website and includes:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 pl-4">
              <li>Browser type, version, and language settings</li>
              <li>Operating system and device information</li>
              <li>IP address and approximate geographic location</li>
              <li>
                Pages visited, time spent on pages, and navigation patterns
              </li>
              <li>
                Referring websites and search terms used to find the Website
              </li>
              <li>Date and time of visits and interactions</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              1.3 Cookies and Tracking Technologies
            </h3>
            <p className="mb-4">
              The Website uses cookies, web beacons, and similar tracking
              technologies to enhance user experience and gather usage
              analytics. These technologies help me understand how visitors
              interact with the Website.
            </p>
            <div className="bg-neutral-800/50 p-4 rounded border border-neutral-700 mb-4">
              <h4 className="font-semibold text-white mb-2">
                Types of Cookies Used:
              </h4>
              <ul className="list-disc list-inside space-y-2 pl-4 text-sm">
                <li>
                  <strong>Essential Cookies:</strong> Necessary for basic
                  Website functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Used to understand Website
                  usage and performance
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Enable enhanced features
                  and personalization
                </li>
                <li>
                  <strong>Third-Party Cookies:</strong> From integrated services
                  like Google Analytics
                </li>
              </ul>
            </div>
            <p className="text-sm text-neutral-300">
              You can control cookie settings through your browser preferences.
              However, disabling certain cookies may limit Website
              functionality.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            Information collected is used exclusively for legitimate business
            purposes and to improve your experience with the Website. Specific
            uses include:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">
                Communication & Response
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Responding to inquiries and messages</li>
                <li>Providing requested information or services</li>
                <li>Following up on professional opportunities</li>
              </ul>
            </div>
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">
                Website Improvement
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Analyzing usage patterns and performance</li>
                <li>Optimizing user experience and functionality</li>
                <li>Troubleshooting technical issues</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-red-900/20 border border-red-700/50 rounded">
            <p className="text-sm">
              <strong className="text-red-500">
                Data Protection Commitment:
              </strong>{" "}
              Your personal information will never be sold, rented, leased, or
              shared with third parties for marketing purposes without your
              explicit consent, except as required by law or as outlined in this
              Privacy Policy.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            3. Data Security and Protection
          </h2>
          <p className="mb-4">
            I am committed to protecting your personal information and have
            implemented appropriate technical, administrative, and physical
            security measures to safeguard your data.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">
                Technical Measures
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>SSL/TLS encryption</li>
                <li>Secure hosting infrastructure</li>
                <li>Regular security updates</li>
              </ul>
            </div>
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">
                Administrative Measures
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Limited access controls</li>
                <li>Data minimization practices</li>
                <li>Regular privacy assessments</li>
              </ul>
            </div>
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">
                Physical Measures
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Secure data storage</li>
                <li>Restricted physical access</li>
                <li>Environmental protections</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-900/20 border border-amber-700/50 p-4 rounded">
            <p className="text-sm text-amber-200">
              <strong>Security Disclaimer:</strong> While I employ
              industry-standard security measures, no method of transmission
              over the Internet or electronic storage is 100% secure. I cannot
              guarantee absolute security of your information.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            4. Data Retention
          </h2>
          <p className="mb-4">
            Personal information is retained only for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required by law.
          </p>
          <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
            <h4 className="font-semibold text-white mb-2">
              Retention Periods:
            </h4>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>
                <strong>Contact Form Data:</strong> Retained for up to 2 years
                or until the inquiry is resolved
              </li>
              <li>
                <strong>Email Communications:</strong> Retained as long as
                necessary for ongoing communication
              </li>
              <li>
                <strong>Analytics Data:</strong> Aggregated and anonymized data
                may be retained indefinitely
              </li>
              <li>
                <strong>Cookie Data:</strong> Automatically expires based on
                cookie type and browser settings
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            5. Third-Party Services and Links
          </h2>
          <p className="mb-4">
            The Website may contain links to external platforms and integrate
            with third-party services. This Privacy Policy does not cover the
            practices of these external entities.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-white mb-2">
                Integrated Services May Include:
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                <li>Google Analytics for website analytics</li>
                <li>GitHub for project repositories</li>
                <li>LinkedIn for professional networking</li>
                <li>Email service providers for communications</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">
                External Links May Lead To:
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                <li>Project demonstrations and live sites</li>
                <li>Professional social media profiles</li>
                <li>Open-source repositories and documentation</li>
                <li>Referenced articles and resources</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-neutral-300 bg-neutral-800/30 p-3 rounded">
            <strong>Important:</strong> I am not responsible for the privacy
            practices, content, or security of external websites. Please review
            their respective privacy policies before providing any personal
            information.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            6. Your Privacy Rights
          </h2>
          <p className="mb-4">
            You have certain rights regarding your personal information. These
            rights may vary depending on your location and applicable privacy
            laws.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">
                Access & Control Rights
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </div>
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">
                Communication Rights
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Opt-out of promotional communications</li>
                <li>Request portability of your data</li>
                <li>Object to certain data processing</li>
                <li>File complaints with supervisory authorities</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-neutral-300 mt-4">
            To exercise any of these rights, please contact me using the
            information provided in the "Contact Information" section below. I
            will respond to your request within a reasonable timeframe and in
            accordance with applicable laws.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            7. Children's Privacy
          </h2>
          <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded">
            <p className="mb-4">
              This Website is not directed to children under the age of 13, and
              I do not knowingly collect personal information from children
              under 13. If I become aware that a child under 13 has provided me
              with personal information, I will take steps to delete such
              information from my files.
            </p>
            <p className="text-sm">
              If you are a parent or guardian and you believe that your child
              has provided me with personal information, please contact me
              immediately so that I can take appropriate action.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            8. International Data Transfers
          </h2>
          <p className="mb-4">
            This Website is operated from <strong>India</strong>. If you are
            accessing the Website from outside India, please be aware that your
            information may be transferred to, stored, and processed in India
            where privacy laws may differ from those in your jurisdiction.
          </p>
          <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
            <p className="text-sm">
              By using the Website, you consent to the transfer of your
              information to India and the processing of such information in
              accordance with this Privacy Policy and applicable Indian privacy
              laws.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            9. Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            I reserve the right to update or modify this Privacy Policy at any
            time to reflect changes in my practices, services, or applicable
            laws. When changes are made, I will update the "Last Reviewed" date
            at the top of this policy.
          </p>
          <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700 mb-4">
            <h4 className="font-semibold text-white mb-2">
              Notification of Changes:
            </h4>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>
                Material changes will be prominently posted on the Website
              </li>
              <li>
                Users may be notified via email if contact information is
                available
              </li>
              <li>
                Continued use of the Website constitutes acceptance of updated
                terms
              </li>
            </ul>
          </div>
          <p className="text-sm text-neutral-300">
            I encourage you to review this Privacy Policy periodically to stay
            informed about how I am protecting your information.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            10. Contact Information
          </h2>
          <p className="mb-4">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the handling of your personal information, please
            contact me using the following information:
          </p>

          <div className="bg-sand/10 border border-sand/30 p-6 rounded-lg">
            <h4 className="font-semibold text-white mb-4">
              Data Controller Contact Details:
            </h4>
            <div className="space-y-2">
              <p>
                <strong className="text-sand">Name:</strong> Mozammil Tarique
              </p>
              <p>
                <strong className="text-sand">Email:</strong>{" "}
                <a
                  href="mailto:mozammiltarique007@gmail.com"
                  className="text-sand hover:underline"
                >
                  mozammiltarique007@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-sand">Website:</strong>{" "}
                <a
                  href="https://mozammiltariq.dev"
                  className="text-sand hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://mozammiltariq.dev
                </a>
              </p>
            </div>
            <div className="mt-4 p-3 bg-neutral-800/50 rounded text-sm">
              <p className="text-neutral-300">
                <strong>Response Time:</strong> I will respond to
                privacy-related inquiries within 30 days of receipt. For urgent
                matters, please indicate the urgency in your subject line.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 pt-8 mt-12">
          <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700 text-center">
            <p className="text-sm text-neutral-300">
              <strong className="text-white">Acknowledgment:</strong> By using
              this Website, you acknowledge that you have read and understood
              this Privacy Policy and agree to its terms and conditions. This
              policy is an integral part of the Website's Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
