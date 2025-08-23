import React, { useEffect } from "react";
import { ScrollProgress } from "@/components/scroll-progress";

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <ScrollProgress />
      <section className="max-w-5xl mx-auto px-6 py-12 text-neutral-200 leading-relaxed">
        <div className="border-b border-neutral-700 pb-8 mb-10">
          <h1 className="max-sm:text-3xl text-5xl font-bold text-white mb-6 text-center">
            Terms and Conditions
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
              <strong className="text-white">Service Provider:</strong> Mozammil
              Tarique
            </p>
          </div>
        </div>

        <div className="mb-10">
          <p className="text-lg mb-4 text-neutral-100">
            These Terms and Conditions ("Terms") govern your use of the website
            located at https://mozammiltariq.dev ("Website" or "Service")
            operated by Mozammil Tarique ("I," "me," "my," or "Service
            Provider").
          </p>
          <p className="mb-4">
            By accessing or using this Website, you acknowledge that you have
            read, understood, and agree to be bound by these Terms and all
            applicable laws and regulations. If you do not agree with any part
            of these Terms, you must not use this Website.
          </p>
          <div className="text-neutral-300 text-sm bg-neutral-800/30 p-4 rounded border-l-4 border-sand">
            <p className="mb-2">
              <strong className="text-sand">Important Notice:</strong> These
              Terms constitute a legally binding agreement between you and the
              Service Provider. Please read them carefully before using the
              Website.
            </p>
            <p>
              <strong>Acceptance:</strong> Your continued use of the Website
              signifies your acceptance of these Terms and any future
              modifications.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            1. Definitions and Interpretation
          </h2>
          <p className="mb-4">
            For the purposes of these Terms, the following definitions shall
            apply:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">Website Terms</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>
                  <strong>"Service":</strong> The website and all its content
                </li>
                <li>
                  <strong>"User/You":</strong> Any person accessing the Website
                </li>
                <li>
                  <strong>"Content":</strong> All materials on the Website
                </li>
              </ul>
            </div>
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">Legal Terms</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>
                  <strong>"Agreement":</strong> These Terms and Conditions
                </li>
                <li>
                  <strong>"Applicable Law":</strong> Indian law and regulations
                </li>
                <li>
                  <strong>"Force Majeure":</strong> Unforeseeable circumstances
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            2. Acceptable Use Policy
          </h2>
          <p className="mb-4">
            By using this Website, you agree to use it only for lawful purposes
            and in accordance with these Terms. You are prohibited from:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-900/20 border border-red-700/50 p-4 rounded">
              <h4 className="font-semibold text-red-300 mb-2">
                Prohibited Activities
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Violating any applicable laws or regulations</li>
                <li>Infringing on intellectual property rights</li>
                <li>Transmitting harmful or malicious code</li>
                <li>Attempting unauthorized access to systems</li>
                <li>Collecting user information without consent</li>
                <li>Impersonating others or providing false information</li>
              </ul>
            </div>
            <div className="bg-green-900/20 border border-green-700/50 p-4 rounded">
              <h4 className="font-semibold text-green-300 mb-2">
                Permitted Uses
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Personal and educational reference</li>
                <li>Professional networking and collaboration</li>
                <li>Legitimate business inquiries</li>
                <li>Sharing content with proper attribution</li>
                <li>Academic research and study</li>
                <li>Portfolio review and assessment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            3. Intellectual Property Rights
          </h2>
          <p className="mb-4">
            All content on this Website, including but not limited to text,
            graphics, logos, images, code, designs, and other materials, is the
            intellectual property of Mozammil Tarique unless otherwise
            specified.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              3.1 Protected Content
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
                <h4 className="font-semibold text-white mb-2">
                  Creative Works
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Original designs and layouts</li>
                  <li>Custom graphics and illustrations</li>
                  <li>Photography and visual content</li>
                  <li>Brand elements and logos</li>
                </ul>
              </div>
              <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
                <h4 className="font-semibold text-white mb-2">
                  Technical Content
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Source code and algorithms</li>
                  <li>Technical documentation</li>
                  <li>Project architectures</li>
                  <li>Implementation methodologies</li>
                </ul>
              </div>
              <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
                <h4 className="font-semibold text-white mb-2">
                  Written Content
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Articles and blog posts</li>
                  <li>Project descriptions</li>
                  <li>Professional summaries</li>
                  <li>Case studies and analyses</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              3.2 Usage Rights and Restrictions
            </h3>
            <div className="bg-neutral-800/50 p-4 rounded border border-neutral-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-300 mb-2">
                    Permitted Uses
                  </h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Personal reference and learning</li>
                    <li>Educational purposes with attribution</li>
                    <li>Professional evaluation and review</li>
                    <li>Sharing links to original content</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-300 mb-2">
                    Prohibited Uses
                  </h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Commercial use without permission</li>
                    <li>Reproduction or redistribution</li>
                    <li>Modification or derivative works</li>
                    <li>Claiming ownership or authorship</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border border-amber-700/50 p-4 rounded">
            <p className="text-sm text-amber-200">
              <strong>Copyright Notice:</strong> Unauthorized reproduction,
              modification, distribution, or republication of any material from
              this Website without prior written consent is strictly prohibited
              and may result in legal action.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            4. User Responsibilities and Conduct
          </h2>
          <p className="mb-4">
            As a user of this Website, you are responsible for your conduct and
            any content you may submit or transmit through the Service.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">
                User Obligations
              </h4>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the confidentiality of any access credentials</li>
                <li>Respect intellectual property rights</li>
                <li>Report any security vulnerabilities or issues</li>
                <li>Use the Website in accordance with applicable laws</li>
              </ul>
            </div>
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">
                Content Standards
              </h4>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>Content must be relevant and appropriate</li>
                <li>No spam, harassment, or abusive language</li>
                <li>Respect privacy of individuals and organizations</li>
                <li>No false or misleading information</li>
                <li>Comply with professional communication standards</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            5. Service Availability and Accuracy
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              5.1 Service Availability
            </h3>
            <p className="mb-4">
              While I strive to maintain continuous availability of this
              Website, I cannot guarantee uninterrupted access or operation. The
              Service may be temporarily unavailable due to:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-neutral-800/30 p-3 rounded border border-neutral-700 text-sm">
                <strong>Technical Issues:</strong> Server maintenance, updates,
                or technical difficulties
              </div>
              <div className="bg-neutral-800/30 p-3 rounded border border-neutral-700 text-sm">
                <strong>External Factors:</strong> Internet service disruptions
                or hosting provider issues
              </div>
              <div className="bg-neutral-800/30 p-3 rounded border border-neutral-700 text-sm">
                <strong>Force Majeure:</strong> Natural disasters, pandemics, or
                other unforeseeable events
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              5.2 Content Accuracy
            </h3>
            <div className="bg-neutral-800/50 p-4 rounded border border-neutral-700">
              <p className="mb-3">
                This Website is intended to showcase professional skills,
                projects, and experience. While I strive to maintain accurate
                and updated information:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>
                  Information may become outdated as projects and skills evolve
                </li>
                <li>Technical specifications may change over time</li>
                <li>Project details are accurate as of the time of creation</li>
                <li>External links and references may become unavailable</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            6. Third-Party Services and Links
          </h2>
          <p className="mb-4">
            This Website may contain links to third-party websites, services, or
            resources that are not owned or controlled by me. These include but
            are not limited to:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">
                Professional Platforms
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>GitHub repositories and projects</li>
                <li>LinkedIn professional profile</li>
                <li>Portfolio project demonstrations</li>
                <li>Online development platforms</li>
              </ul>
            </div>
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">
                External Resources
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Documentation and technical references</li>
                <li>Open-source libraries and frameworks</li>
                <li>Educational content and tutorials</li>
                <li>Industry news and publications</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-900/20 border border-amber-700/50 p-4 rounded">
            <p className="text-sm text-amber-200">
              <strong>Third-Party Disclaimer:</strong> I am not responsible for
              the content, privacy policies, security practices, or availability
              of third-party websites or services. Access and use of such
              resources are at your own risk and subject to their respective
              terms and conditions.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            7. Disclaimers and Limitation of Liability
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              7.1 Disclaimer of Warranties
            </h3>
            <div className="bg-neutral-800/50 p-4 rounded border border-neutral-700 mb-4">
              <p className="mb-3 text-sm">
                This Website and all content are provided{" "}
                <strong>"AS IS"</strong> and
                <strong>"AS AVAILABLE"</strong> without warranties of any kind,
                either express or implied, including but not limited to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Merchantability and fitness for purpose</li>
                  <li>Non-infringement of third-party rights</li>
                  <li>Accuracy, completeness, or reliability</li>
                  <li>Continuous or error-free operation</li>
                </ul>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Security or freedom from harmful components</li>
                  <li>Compatibility with your systems</li>
                  <li>Meeting your specific requirements</li>
                  <li>Availability at all times</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              7.2 Limitation of Liability
            </h3>
            <div className="bg-red-900/20 border border-red-700/50 p-4 rounded">
              <p className="mb-3 text-sm">
                To the fullest extent permitted by applicable law,{" "}
                <strong>Mozammil Tarique</strong>
                shall not be liable for any damages arising from your use of
                this Website, including:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-red-300 mb-1">
                    Direct Damages
                  </h5>
                  <ul className="list-disc list-inside text-xs space-y-1">
                    <li>Financial losses</li>
                    <li>Business interruption</li>
                    <li>Data loss or corruption</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-red-300 mb-1">
                    Indirect Damages
                  </h5>
                  <ul className="list-disc list-inside text-xs space-y-1">
                    <li>Consequential damages</li>
                    <li>Lost profits or opportunities</li>
                    <li>Reputational harm</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-neutral-800/50 rounded">
                <p className="text-xs">
                  <strong>Maximum Liability:</strong> In any event, total
                  liability shall not exceed the amount paid by you for using
                  this Website. Since this Website is provided free of charge,
                  this amount is deemed to be <strong>$0 USD</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            8. Indemnification
          </h2>
          <div className="bg-neutral-800/50 p-4 rounded border border-neutral-700">
            <p className="mb-4">
              You agree to defend, indemnify, and hold harmless Mozammil Tarique
              from and against any claims, damages, obligations, losses,
              liabilities, costs, or debt, and expenses (including reasonable
              attorney's fees) arising from:
            </p>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>Your use or misuse of the Website</li>
              <li>Your violation of these Terms or applicable laws</li>
              <li>
                Your infringement of any intellectual property or other rights
              </li>
              <li>Any content you submit or transmit through the Website</li>
              <li>
                Any claims made by third parties in connection with your use of
                the Website
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            9. Dispute Resolution and Governing Law
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              9.1 Governing Law
            </h3>
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <p className="text-sm mb-2">
                These Terms shall be governed by and construed in accordance
                with the laws of
                <strong> India</strong>, without regard to its conflict of law
                provisions.
              </p>
              <p className="text-sm">
                Any disputes not subject to arbitration shall fall under the
                exclusive jurisdiction of the courts located in{" "}
                <strong>Maharashtra, India</strong>.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              9.2 Dispute Resolution Process
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded text-center">
                <div className="text-2xl font-bold text-blue-300 mb-2">1</div>
                <h4 className="font-semibold text-blue-300 mb-2">
                  Informal Resolution
                </h4>
                <p className="text-sm">
                  Initial attempt through direct communication and good faith
                  negotiations
                </p>
              </div>
              <div className="bg-amber-900/20 border border-amber-700/50 p-4 rounded text-center">
                <div className="text-2xl font-bold text-amber-300 mb-2">2</div>
                <h4 className="font-semibold text-amber-300 mb-2">Mediation</h4>
                <p className="text-sm">
                  Structured mediation process with neutral third-party
                  assistance
                </p>
              </div>
              <div className="bg-red-900/20 border border-red-700/50 p-4 rounded text-center">
                <div className="text-2xl font-bold text-red-300 mb-2">3</div>
                <h4 className="font-semibold text-red-300 mb-2">Arbitration</h4>
                <p className="text-sm">
                  Binding arbitration under Indian Arbitration and Conciliation
                  Act
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-300 mt-4">
              Any claims must be brought within <strong>six (6) months</strong>{" "}
              from the date of the alleged cause of action, or such claims shall
              be deemed waived.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            10. Termination and Suspension
          </h2>
          <p className="mb-4">
            I reserve the right to terminate or suspend your access to the
            Website immediately, without prior notice or liability, for any
            reason, including but not limited to:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">
                Grounds for Termination
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Breach of these Terms and Conditions</li>
                <li>Violation of applicable laws or regulations</li>
                <li>Misuse of intellectual property</li>
                <li>Harmful or abusive behavior</li>
                <li>Technical security concerns</li>
              </ul>
            </div>
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">
                Effect of Termination
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Immediate cessation of access rights</li>
                <li>Survival of relevant Terms provisions</li>
                <li>No refund of any payments (if applicable)</li>
                <li>Retention of liability for prior breaches</li>
                <li>Continued application of disclaimers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            11. Modifications and Updates
          </h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              11.1 Changes to Terms
            </h3>
            <div className="bg-neutral-800/50 p-4 rounded border border-neutral-700">
              <p className="mb-4">
                I reserve the right to update, modify, or replace these Terms at
                any time at my sole discretion. Changes may be made to reflect:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Legal or regulatory requirements</li>
                  <li>Changes in business practices</li>
                  <li>Website functionality updates</li>
                  <li>Security enhancements</li>
                </ul>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>User feedback and requirements</li>
                  <li>Industry best practices</li>
                  <li>Technological developments</li>
                  <li>Policy clarifications</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              11.2 Notification Process
            </h3>
            <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-blue-300 mb-2">
                    Material Changes
                  </h5>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>30-day advance notice when possible</li>
                    <li>Prominent posting on the Website</li>
                    <li>Email notification (if available)</li>
                    <li>Clear explanation of changes</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-300 mb-2">
                    Minor Changes
                  </h5>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Updated "Last Reviewed" date</li>
                    <li>Notification through Website banner</li>
                    <li>Immediate effectiveness</li>
                    <li>Continued use implies acceptance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            12. Miscellaneous Provisions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">Severability</h4>
              <p className="text-sm mb-2">
                If any provision of these Terms is held to be unenforceable or
                invalid, such provision will be changed and interpreted to
                accomplish the objectives to the greatest extent possible under
                applicable law.
              </p>
              <p className="text-sm">
                The remaining provisions will continue in full force and effect.
              </p>
            </div>
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">
                Entire Agreement
              </h4>
              <p className="text-sm mb-2">
                These Terms, together with the Privacy Policy, constitute the
                entire agreement between you and the Service Provider regarding
                the use of the Website.
              </p>
              <p className="text-sm">
                They supersede all prior or contemporaneous communications and
                proposals.
              </p>
            </div>
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">Waiver</h4>
              <p className="text-sm mb-2">
                No waiver of any provision of these Terms shall be deemed a
                further or continuing waiver of such provision or any other
                provision.
              </p>
              <p className="text-sm">
                Failure to enforce any right does not constitute a waiver of
                that right.
              </p>
            </div>
            <div className="bg-neutral-800/30 p-4 rounded border border-neutral-700">
              <h4 className="font-semibold text-white mb-2">Assignment</h4>
              <p className="text-sm mb-2">
                You may not assign or transfer these Terms or your rights
                hereunder without prior written consent from the Service
                Provider.
              </p>
              <p className="text-sm">
                The Service Provider may assign these Terms at any time without
                restriction.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-700 pb-2">
            13. Contact Information and Support
          </h2>
          <p className="mb-4">
            For any questions, concerns, or requests regarding these Terms and
            Conditions, or if you need assistance with the Website, please
            contact me using the following information:
          </p>

          <div className="bg-sand/10 border border-sand/30 p-6 rounded-lg">
            <h4 className="font-semibold text-white mb-4">
              Service Provider Contact Details:
            </h4>
            <div className="space-y-2 mb-4">
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
              <p>
                <strong className="text-sand">Business Location:</strong> West
                Bengal, India
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-neutral-800/50 p-3 rounded text-sm">
                <h5 className="font-semibold text-white mb-2">
                  Response Times
                </h5>
                <ul className="space-y-1">
                  <li>
                    <strong>General Inquiries:</strong> Within 48 hours
                  </li>
                  <li>
                    <strong>Technical Issues:</strong> Within 24 hours
                  </li>
                  <li>
                    <strong>Legal Matters:</strong> Within 5 business days
                  </li>
                  <li>
                    <strong>Urgent Matters:</strong> Within 12 hours
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 p-3 rounded text-sm">
                <h5 className="font-semibold text-white mb-2">Support Hours</h5>
                <ul className="space-y-1">
                  <li>
                    <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM IST
                  </li>
                  <li>
                    <strong>Saturday:</strong> 10:00 AM - 4:00 PM IST
                  </li>
                  <li>
                    <strong>Sunday:</strong> Limited availability
                  </li>
                  <li>
                    <strong>Holidays:</strong> Response may be delayed
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-3 bg-neutral-800/50 rounded text-sm">
              <p className="text-neutral-300">
                <strong>Communication Guidelines:</strong> When contacting me,
                please provide clear details about your inquiry, including
                relevant URLs or screenshots if applicable. For legal or
                contractual matters, please clearly indicate the nature of your
                request in the subject line.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 pt-8 mt-12">
          <div className="bg-neutral-800/30 p-6 rounded border border-neutral-700">
            <div className="text-center mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">
                Acknowledgment and Acceptance
              </h4>
              <p className="text-sm text-neutral-300 mb-4">
                By using this Website, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and Conditions.
                You also acknowledge that these Terms may be updated from time
                to time, and your continued use of the Website signifies your
                acceptance of any modifications.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
              <div className="bg-neutral-800/50 p-3 rounded">
                <div className="text-sand font-semibold mb-1">
                  Professional Portfolio
                </div>
                <div className="text-neutral-300">
                  Showcasing technical expertise and projects
                </div>
              </div>
              <div className="bg-neutral-800/50 p-3 rounded">
                <div className="text-sand font-semibold mb-1">
                  Legal Compliance
                </div>
                <div className="text-neutral-300">
                  Adhering to applicable laws and regulations
                </div>
              </div>
              <div className="bg-neutral-800/50 p-3 rounded">
                <div className="text-sand font-semibold mb-1">
                  User Protection
                </div>
                <div className="text-neutral-300">
                  Ensuring fair and transparent practices
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-neutral-400">
              <p>
                © {new Date().getFullYear()} Mozammil Tarique. All rights
                reserved. | Last Updated: August 22, 2025 | Version 1.0
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
