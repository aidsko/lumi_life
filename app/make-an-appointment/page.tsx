"use client";
import { sendEmail } from "./actions";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function MakeAnAppointment() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const validateForm = (formData: FormData) => {
    const errors: { [key: string]: string } = {};
    const fields = ["first-name", "last-name", "email", "phone", "message"];

    fields.forEach((field) => {
      if (!formData.get(field)) {
        errors[field] = "This field is required";
      }
    });

    // Basic email validation
    const email = formData.get("email") as string;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors["email"] = "Please enter a valid email address";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <main className="flex-1">
        <section className="w-full bg-muted relative min-h-[615px]">
          <video
            autoPlay
            className="object-cover absolute inset-0 w-full h-full object-top"
            muted
            loop
            playsInline
            src="/hero-bg-1.mp4"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            aria-hidden="true"
          />
          <Navbar />

          <div className="relative min-h-[550px] md:h-[550px]">
            <div className="relative flex flex-col z-10 px-4 sm:px-6 lg:px-8 container mx-auto max-w-screen-lg py-12 md:py-0 md:h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:h-full">
                <div className="flex flex-col space-y-6">
                  <h1 className="text-4xl md:text-6xl text-white animate-fadeIn md:pt-16">
                    Make an Initial Appointment
                  </h1>
                  <div className="space-y-4">
                    <p className="text-lg text-white/90">
                      Please include 2-3 sentences on why you are reaching out.
                    </p>
                    <div className="text-lg text-white/90">
                      <p className="mb-2">
                        If using insurance, please also include:
                      </p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Your full name</li>
                        <li>Date of birth</li>
                        <li>Benefits number</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-center md:pt-16">
                  <form
                    action={async (formData) => {
                      if (!validateForm(formData)) {
                        return false;
                      }

                      const email = formData.get("email") as string;
                      const message = formData.get("message") as string;
                      const firstName = formData.get("first-name") as string;
                      const lastName = formData.get("last-name") as string;
                      const phone = formData.get("phone") as string;

                      try {
                        await sendEmail(
                          email,
                          message,
                          firstName,
                          lastName,
                          phone
                        );
                        setShowSuccess(true);
                        (
                          document.getElementById(
                            "appointment-form"
                          ) as HTMLFormElement
                        ).reset();
                        setFormErrors({});
                      } catch (error) {
                        alert("Failed to send email.");
                        return false;
                      }
                    }}
                    id="appointment-form"
                    className="text-white w-full max-w-md"
                  >
                    <div className="flex flex-col space-y-4">
                      <div className="flex flex-row gap-4 w-full">
                        <div className="w-1/2">
                          <Label>First Name</Label>
                          <Input
                            className={`rounded-none ${
                              formErrors["first-name"] ? "border-red-500" : ""
                            }`}
                            name="first-name"
                            type="text"
                          />
                          {formErrors["first-name"] && (
                            <p className="text-red-500 text-sm mt-1">
                              {formErrors["first-name"]}
                            </p>
                          )}
                        </div>
                        <div className="w-1/2">
                          <Label>Last Name</Label>
                          <Input
                            className={`rounded-none ${
                              formErrors["last-name"] ? "border-red-500" : ""
                            }`}
                            name="last-name"
                            type="text"
                          />
                          {formErrors["last-name"] && (
                            <p className="text-red-500 text-sm mt-1">
                              {formErrors["last-name"]}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <Label>Email</Label>
                        <Input
                          className={`rounded-none ${
                            formErrors["email"] ? "border-red-500" : ""
                          }`}
                          name="email"
                          type="email"
                        />
                        {formErrors["email"] && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors["email"]}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label>Phone Number</Label>
                        <Input
                          className={`rounded-none ${
                            formErrors["phone"] ? "border-red-500" : ""
                          }`}
                          name="phone"
                          type="tel"
                        />
                        {formErrors["phone"] && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors["phone"]}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label>Message</Label>
                        <Textarea
                          className={`rounded-none ${
                            formErrors["message"] ? "border-red-500" : ""
                          }`}
                          name="message"
                        />
                        {formErrors["message"] && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors["message"]}
                          </p>
                        )}
                      </div>
                      <Button className="bg-black text-white rounded-none p-6 text-xl hover:bg-gray-800 hover:text-white">
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              Message Sent!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <p>
              Thank you for reaching out. We will get back to you as soon as
              possible.
            </p>
            <Button
              onClick={() => setShowSuccess(false)}
              className="bg-black text-white rounded-none hover:bg-gray-800"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
