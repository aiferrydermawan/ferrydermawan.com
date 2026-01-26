import Head from 'next/head';
import Layout from "@/components/layout";

export default function Privacy() {
    return (
        <Layout>
            <Head>
                <title>Privacy Policy | Ferry Dermawan</title>
                <meta name="description" content="Privacy Policy for Ferry Dermawan's personal website and blog." />
            </Head>
            <main>
                <section>
                    <h1 className="font-medium text-gray-900 dark:text-gray-100">Privacy Policy</h1>
                    <article className="prose dark:prose-invert max-w-screen-sm mx-auto mt-3">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        
                        <h2>Introduction</h2>
                        <p>
                            This Privacy Policy describes how ferrydermawan.com ("we", "our", or "us") collects, uses, and protects your personal information when you visit our website.
                        </p>

                        <h2>Information We Collect</h2>
                        <h3>Automatically Collected Information</h3>
                        <p>
                            When you visit our website, we may automatically collect certain information about your device, including:
                        </p>
                        <ul>
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Operating system</li>
                            <li>Pages visited and time spent on pages</li>
                            <li>Referring website addresses</li>
                        </ul>

                        <h3>Information You Provide</h3>
                        <p>
                            If you choose to interact with our website (e.g., leaving comments via Giscus), you may provide us with:
                        </p>
                        <ul>
                            <li>Name or username</li>
                            <li>Email address (if required by the commenting system)</li>
                            <li>Any other information you choose to share in comments</li>
                        </ul>

                        <h2>How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Provide and maintain our website</li>
                            <li>Analyze website usage and improve user experience</li>
                            <li>Respond to comments and inquiries</li>
                            <li>Ensure website security and prevent abuse</li>
                        </ul>

                        <h2>Third-Party Services</h2>
                        <h3>Analytics</h3>
                        <p>
                            We use Umami Analytics to understand how visitors interact with our website. Umami is privacy-focused and does not use cookies or collect personal data. For more information, please visit <a href="https://umami.is" target="_blank" rel="noopener noreferrer">umami.is</a>.
                        </p>

                        <h3>Comments</h3>
                        <p>
                            Comments on this website are handled by Giscus, which uses GitHub Discussions. When you comment, you are subject to GitHub's privacy policy. Please review <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub's Privacy Statement</a> for more information.
                        </p>

                        <h2>Cookies</h2>
                        <p>
                            Our website uses minimal cookies. We may use cookies to:
                        </p>
                        <ul>
                            <li>Remember your theme preference (dark/light mode)</li>
                            <li>Maintain session information</li>
                        </ul>
                        <p>
                            You can control cookies through your browser settings. However, disabling cookies may affect your experience on our website.
                        </p>

                        <h2>Data Security</h2>
                        <p>
                            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                        </p>

                        <h2>Your Rights</h2>
                        <p>Depending on your location, you may have the right to:</p>
                        <ul>
                            <li>Access your personal information</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your personal information</li>
                            <li>Object to processing of your personal information</li>
                            <li>Request data portability</li>
                        </ul>
                        <p>
                            To exercise these rights, please contact us through our <a href="/contact">contact page</a>.
                        </p>

                        <h2>Children's Privacy</h2>
                        <p>
                            Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                        </p>

                        <h2>Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>

                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us through our <a href="/contact">contact page</a>.
                        </p>
                    </article>
                </section>
            </main>
        </Layout>
    );
}
