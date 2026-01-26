import Head from 'next/head';
import Layout from "@/components/layout";
import Link from "next/link";

export default function Terms() {
    return (
        <Layout>
            <Head>
                <title>Terms of Service | Ferry Dermawan</title>
                <meta name="description" content="Terms of Service for Ferry Dermawan's personal website and blog." />
            </Head>
            <main>
                <section>
                    <h1 className="font-medium text-gray-900 dark:text-gray-100">Terms of Service</h1>
                    <article className="prose dark:prose-invert max-w-screen-sm mx-auto mt-3">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        
                        <h2>Agreement to Terms</h2>
                        <p>
                            By accessing and using ferrydermawan.com (&quot;the Website&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use the Website.
                        </p>

                        <h2>Use License</h2>
                        <p>
                            Permission is granted to temporarily access the materials on the Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul>
                            <li>Modify or copy the materials</li>
                            <li>Use the materials for any commercial purpose or for any public display</li>
                            <li>Attempt to reverse engineer any software contained on the Website</li>
                            <li>Remove any copyright or other proprietary notations from the materials</li>
                            <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
                        </ul>

                        <h2>Content</h2>
                        <h3>Ownership</h3>
                        <p>
                            All content on this Website, including but not limited to text, graphics, logos, images, and software, is the property of Ferry Dermawan or its content suppliers and is protected by copyright and other intellectual property laws.
                        </p>

                        <h3>User-Generated Content</h3>
                        <p>
                            By posting comments or other content on the Website, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and display such content. You represent and warrant that you own or have the right to grant such license.
                        </p>

                        <h3>Prohibited Content</h3>
                        <p>You agree not to post content that:</p>
                        <ul>
                            <li>Is illegal, harmful, threatening, abusive, or discriminatory</li>
                            <li>Infringes on any intellectual property rights</li>
                            <li>Contains spam, malware, or viruses</li>
                            <li>Is defamatory, libelous, or invasive of privacy</li>
                            <li>Violates any applicable laws or regulations</li>
                        </ul>

                        <h2>Disclaimer</h2>
                        <p>
                            The materials on the Website are provided on an &quot;as is&quot; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                        <p>
                            Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on the Website or otherwise relating to such materials or on any sites linked to this Website.
                        </p>

                        <h2>Limitations</h2>
                        <p>
                            In no event shall Ferry Dermawan or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
                        </p>

                        <h2>Accuracy of Materials</h2>
                        <p>
                            The materials appearing on the Website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on the Website are accurate, complete, or current. We may make changes to the materials contained on the Website at any time without notice.
                        </p>

                        <h2>Links</h2>
                        <p>
                            We have not reviewed all of the sites linked to our Website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us. Use of any such linked website is at the user&apos;s own risk.
                        </p>

                        <h2>Modifications</h2>
                        <p>
                            We may revise these Terms of Service at any time without notice. By using this Website, you are agreeing to be bound by the then current version of these Terms of Service.
                        </p>

                        <h2>Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with applicable laws. Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts in Indonesia.
                        </p>

                        <h2>Contact Information</h2>
                        <p>
                            If you have any questions about these Terms of Service, please contact us through our <Link href="/contact">contact page</Link>.
                        </p>
                    </article>
                </section>
            </main>
        </Layout>
    );
}
