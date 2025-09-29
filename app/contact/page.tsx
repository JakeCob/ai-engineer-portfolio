import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/config';

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">Get In Touch</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Have a project in mind? Let&apos;s discuss how I can help you build agent-first solutions.
      </p>

      <div className="mt-12 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
          <ContactForm />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">Other Ways to Connect</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Email</h3>
              <a
                className="text-blue-600 hover:underline dark:text-blue-400"
                href={`mailto:${siteConfig.links.email}`}
              >
                {siteConfig.links.email}
              </a>
            </div>

            <div>
              <h3 className="font-medium mb-2">Schedule a Call</h3>
              <a
                className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 hover:opacity-90 transition-opacity"
                href={siteConfig.links.calendly}
                target="_blank"
                rel="noreferrer"
              >
                Book 30-min consultation
              </a>
            </div>

            <div>
              <h3 className="font-medium mb-2">Connect on Social</h3>
              <div className="flex gap-4">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                {siteConfig.links.twitter && (
                  <a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Response time is typically within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
