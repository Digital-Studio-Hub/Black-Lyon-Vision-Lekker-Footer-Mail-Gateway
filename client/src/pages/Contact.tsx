import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      organisation: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/send-mail", data);
      return response.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Get in touch with Black Lyon Power Holdings. Contact us for partnership enquiries, project discussions, or general information about our renewable energy development services."
        keywords="contact Black Lyon Power Holdings, renewable energy enquiries, partnership contact, Cape Town energy company"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Contact Us
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Whether you represent a municipality, industrial enterprise, or investment group, we welcome the opportunity to discuss how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:info@blacklyonpower.co.za"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid="contact-email"
                      >
                        info@blacklyonpower.co.za
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                      <a
                        href="tel:+27663830269"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid="contact-phone"
                      >
                        +27 66 383 0269
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Cape Town, South Africa
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-12 p-6 bg-card rounded-md">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {[
                    "We aim to respond to all enquiries within 2 business days",
                    "Initial discussions are always confidential",
                    "We're happy to arrange calls at times convenient for you",
                    "No obligation—exploratory conversations are welcome",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Message Sent
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for your enquiry. We'll be in touch within 2 business days.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                      data-testid="button-send-another"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Send Us a Message
                    </h2>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your full name"
                                  {...field}
                                  data-testid="input-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="organisation"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Organisation</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your organisation (optional)"
                                  {...field}
                                  data-testid="input-organisation"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="your.email@example.com"
                                  {...field}
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Please describe how we can help you..."
                                  className="min-h-[150px] resize-none"
                                  {...field}
                                  data-testid="input-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className="w-full gap-2"
                          disabled={mutation.isPending}
                          data-testid="button-submit"
                        >
                          {mutation.isPending ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Message
                              <Send className="h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
