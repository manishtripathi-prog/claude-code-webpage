"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/data";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!EMAIL_REGEX.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setSubmitted(true);
  }

  return (
    <section id="contact" className="px-6 py-24 md:px-20">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build something
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell me about your project and I&apos;ll get back to you within
            two business days. Or email me directly at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-blue-400 underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>

        {submitted ? (
          <p className="mt-10 text-center text-sm text-blue-400">
            Thanks &mdash; your message has been sent. I&apos;ll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <Input name="name" placeholder="Your name" required className="h-11" />
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={!!emailError}
                className="h-11"
              />
              {emailError && (
                <p className="mt-1 text-xs text-destructive">{emailError}</p>
              )}
            </div>
            <Textarea name="message" placeholder="Tell me about your project" required rows={5} />
            <Button type="submit" size="lg" className="h-12 w-full text-base">
              Send Message
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
