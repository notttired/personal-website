export default function LocationNotifierPrivacy() {
  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-semibold text-warm-ink font-serif leading-tight">
          Location Notifier Privacy Policy
        </h1>
        <p className="mt-2 text-warm-muted">Last updated: May 5, 2026</p>
      </section>

      {/* Introduction */}
      <section className="flex flex-col gap-4 text-warm-muted leading-relaxed">
        <p>
          This Privacy Policy explains how Location Notifier (&quot;the App&quot;) collects, uses, and
          protects your information. We are committed to ensuring your privacy and the security of your
          location data.
        </p>
      </section>

      {/* Information We Collect */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-warm-ink font-serif">Information We Collect</h2>
        <div className="flex flex-col gap-3 text-warm-muted leading-relaxed">
          <div>
            <h3 className="font-medium text-warm-ink mb-1">Location Data</h3>
            <p>
              Location Notifier collects your precise location data (latitude and longitude) only when
              you explicitly grant permission and enable location tracking. This data is used solely to
              provide geofencing notifications and location-based features you have configured.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-warm-ink mb-1">Device Information</h3>
            <p>
              We may collect information about your device, including device model, operating system
              version, and unique identifiers for the purpose of troubleshooting and improving app
              functionality.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-warm-ink mb-1">Usage Data</h3>
            <p>
              We collect anonymized data about how you use the App, such as features accessed and
              notification interactions, to help us improve the service and user experience.
            </p>
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-warm-ink font-serif">How We Use Your Information</h2>
        <div className="flex flex-col gap-2 text-warm-muted leading-relaxed">
          <p>We use the collected information to:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Provide location-based notifications and geofencing features</li>
            <li>Improve and optimize the App&apos;s performance and functionality</li>
            <li>Debug and troubleshoot technical issues</li>
            <li>Comply with legal obligations and enforce our terms of service</li>
          </ul>
        </div>
      </section>

      {/* Data Storage & Security */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-warm-ink font-serif">Data Storage & Security</h2>
        <div className="flex flex-col gap-3 text-warm-muted leading-relaxed">
          <div>
            <h3 className="font-medium text-warm-ink mb-1">Local Storage</h3>
            <p>
              Location data and notification preferences are primarily stored locally on your device.
              This data is not transmitted to external servers unless you explicitly opt in to cloud
              synchronization features.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-warm-ink mb-1">Encryption</h3>
            <p>
              Any location data transmitted to our servers is encrypted in transit using industry-standard
              protocols (HTTPS/TLS). We implement reasonable security measures to protect against
              unauthorized access, alteration, and disclosure.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-warm-ink mb-1">Security Limitations</h3>
            <p>
              While we strive to protect your information, no security system is completely impenetrable.
              We cannot guarantee absolute security and you assume any risk associated with using the App.
            </p>
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-warm-ink font-serif">Data Sharing</h2>
        <div className="flex flex-col gap-3 text-warm-muted leading-relaxed">
          <p>
            We do <span className="font-medium text-warm-ink">not sell, trade, or rent</span> your
            location data to third parties. Your location information is used exclusively to provide
            the services you have requested.
          </p>
          <p>
            We may share aggregated, anonymized data with third parties for analytics, marketing, and
            research purposes. This data cannot be used to personally identify you.
          </p>
          <p>
            We may disclose your information if required by law, regulation, or valid legal process, or
            to protect our rights and the safety of our users.
          </p>
        </div>
      </section>

      {/* Permissions */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-warm-ink font-serif">Required Permissions</h2>
        <div className="flex flex-col gap-3 text-warm-muted leading-relaxed">
          <p>Location Notifier requests the following permissions:</p>
          <div className="border border-warm-border rounded-xl overflow-hidden">
            <div className="bg-warm-surface p-4 flex flex-col gap-3">
              <div>
                <p className="text-xs text-warm-faint uppercase tracking-widest mb-1">Location</p>
                <p className="text-warm-ink text-sm">
                  Required for geofencing and location-based notifications
                </p>
              </div>
              <div className="border-t border-warm-border pt-3">
                <p className="text-xs text-warm-faint uppercase tracking-widest mb-1">Notifications</p>
                <p className="text-warm-ink text-sm">
                  Required to deliver location-triggered notifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-warm-ink font-serif">Your Rights</h2>
        <div className="flex flex-col gap-3 text-warm-muted leading-relaxed">
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              <span className="font-medium text-warm-ink">Access</span> your location data by reviewing
              it in the App
            </li>
            <li>
              <span className="font-medium text-warm-ink">Revoke permissions</span> at any time through
              your device settings
            </li>
            <li>
              <span className="font-medium text-warm-ink">Delete</span> your data by uninstalling the App
              or clearing app data
            </li>
            <li>
              <span className="font-medium text-warm-ink">Opt-out</span> of optional data collection and
              analytics
            </li>
          </ul>
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-warm-ink font-serif">Third-Party Services</h2>
        <div className="flex flex-col gap-3 text-warm-muted leading-relaxed">
          <p>
            Location Notifier may use third-party services for analytics and crash reporting. These
            services are governed by their own privacy policies. We recommend reviewing their policies
            to understand how they handle your data.
          </p>
          <p>
            Third-party services do not have access to your precise location data, only anonymized
            usage statistics.
          </p>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-warm-ink font-serif">Children&apos;s Privacy</h2>
        <div className="text-warm-muted leading-relaxed">
          <p>
            Location Notifier is not intended for use by children under 13. We do not knowingly collect
            data from children under 13. If we become aware of such collection, we will take steps to
            delete the information and terminate the child&apos;s use of the App.
          </p>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-warm-ink font-serif">Changes to This Policy</h2>
        <div className="text-warm-muted leading-relaxed">
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices or legal
            requirements. We will notify you of significant changes by posting the updated policy and
            updating the &quot;Last updated&quot; date above. Your continued use of the App after changes
            constitutes your acceptance of the updated policy.
          </p>
        </div>
      </section>

      {/* Contact Us */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-warm-ink font-serif">Contact Us</h2>
        <div className="border border-warm-border rounded-xl overflow-hidden shadow-sm">
          <div className="bg-warm-surface p-6 flex flex-col gap-3">
            <div>
              <span className="text-xs text-warm-faint uppercase tracking-widest">Questions or Concerns</span>
              <p className="mt-2 text-warm-ink">
                If you have any questions about this Privacy Policy or our privacy practices, please
                contact us:
              </p>
            </div>
            <div className="border-t border-warm-border pt-3">
              <span className="text-xs text-warm-faint uppercase tracking-widest">Email</span>
              <a
                href="mailto:mmaxyhl@gmail.com"
                className="text-warm-ink font-medium hover:text-warm-accent transition-colors duration-150 block mt-1"
              >
                mmaxyhl@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
