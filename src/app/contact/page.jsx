"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Gitlab, Mail, MapPin, Send, Slack } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { X } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Facebook } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import BackButton from "@/components/ui/back-button";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-full px-20">
      <BackButton />
      <div className=" mx-auto">
        <Card className="">
          <CardHeader>
            <CardTitle>Get in touch</CardTitle>
            <CardDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore ea quaerat iste. Ab officiis voluptas dolor praesentium!
              Exercitationem ullam incidunt asperiores?
            </CardDescription>
          </CardHeader>
          {/* Contact Form */}
          <CardContent className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      className="resize-none"
                      rows={2}
                      required
                    />
                  </div>

                  <Button
                    onClick={handleSubmit}
                    className="w-full"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      "Sending..."
                    ) : status === "success" ? (
                      "Sent!"
                    ) : (
                      <p>Send Message</p>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Contact Information
                  </CardTitle>
                  <CardDescription>
                    You can also reach me through these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 mt-1 opacity-70" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:your.email@example.com"
                        className="opacity-80 hover:opacity-100 transition-opacity"
                      >
                        pratik04jha@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 mt-1 opacity-70" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="opacity-80">New Delhi, Delhi, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex justify-between">
                  {[
                    {
                      icon: <Instagram size={30} />,
                      toopTipText: "Instagram",
                      href: "https://instagram.com/pratikthejha",
                    },
                    {
                      icon: <Facebook size={30} />,
                      toopTipText: "Facebook",
                      href: "https://facebook.com/pratikthejha",
                    },
                    {
                      icon: <Linkedin size={30} />,
                      toopTipText: "Linkedin",
                      href: "https://linkedin.com/in/pratikthejha",
                    },
                    {
                      icon: <Twitter size={30} />,
                      toopTipText: "Twitter",
                      href: "https://x.com/gravitonion",
                    },
                    {
                      icon: <Github size={30} />,
                      toopTipText: "GitHub",
                      href: "https://github.com/pratik04jha",
                    },{
                      icon: <Gitlab size={30} />,
                      toopTipText: "Gitlab",
                      href: "https://github.com/pratik04jha",
                    },
                  ].map((items, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger>
                        <Link target="_blank" href={items.href}>
                          <Card className="p-5">{items.icon}</Card>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{items.toopTipText}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
