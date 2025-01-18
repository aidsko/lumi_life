import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, Heart, Users } from "lucide-react";

export default function Cancer() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <main className="flex-1">
        <section className="w-full bg-muted relative h-[615px]">
          <Navbar />
          <video
            autoPlay
            className="object-cover absolute inset-0 w-full h-full"
            muted
            loop
            playsInline
            src="/hero-background.mp4"
          />

          <div className="inset-0 h-[550px]">
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              aria-hidden="true"
            />
            <div className="relative flex flex-col z-10 text-left px-4 sm:px-6 lg:px-8 container mx-auto max-w-screen-lg h-full justify-center">
              <h1 className="text-6xl text-center text-white animate-fadeIn">
                Life is different now.
              </h1>
              <h1 className="text-4xl text-center text-white animate-fadeIn pt-5">
                We meet you at any point in your cancer journey.
              </h1>
            </div>
          </div>
        </section>

        <section className="w-full py-16 container mx-auto">
          <h2 className="text-3xl mb-8 text-center">
            Understanding Your Cancer Journey
          </h2>
          <div className="px-4 md:px-6 max-w-screen-lg mx-auto">
            <div className="space-y-8">
              <p className="text-xl leading-relaxed">
                A cancer diagnosis can turn your world upside down. Whether you
                are dealing with a cancer diagnosis for yourself or supporting a
                family member or a friend, cancer can bring along many feelings
                of uncertainty.
              </p>
              <blockquote className="text-2xl font-semibold italic border-l-4 border-gray-900 pl-4 py-2">
                People don&apos;t plan to get sick.
              </blockquote>
              <p className="text-lg leading-relaxed">
                Initially, you are focused on getting through treatment - the
                countless appointments, scans, and labs. Survival is your main
                goal. When treatment is over, you&apos;re starting to process
                what your body has been through, what you&apos;ve overcome.
                You&apos;re trying to resume the life you had before cancer and
                regain a sense of normalcy.
              </p>
              <p className="text-lg leading-relaxed">
                Or, that you&apos;ve witnessed a loved one through cancer and
                have put your needs aside to focus on their care. You have
                always put them first during their treatment. But, now,
                you&apos;re processing what this all meant for you. You may be
                feeling all kinds of emotions, such as anger, guilt, and
                sadness, and it can feel overwhelming.
              </p>
              <p className="text-lg leading-relaxed">
                We are here to walk in this journey with you and provide tools
                to help you cope. We have experience dealing with those touched
                by cancer and the journey that accompanies this disease.
              </p>
              <p className="text-xl font-semibold">
                We can provide support no matter where you are in this journey.
              </p>
              <p className="text-2xl  text-center py-4">
                You don&apos;t have to do this alone.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-lg">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl text-gray-900 sm:text-4xl mb-4">
                How We Can Help
              </h2>
              <p className="text-xl text-gray-600">
                Compassionate support for every step of your cancer journey
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <SupportCard
                icon={<Heart className="h-8 w-8 text-primary" />}
                title="Emotional Support"
                description="We provide compassionate support to help you navigate feelings of fear, anxiety, and uncertainty."
              />
              <SupportCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Family & Friends Support"
                description="We also provide guidance and support for family members and friends caring for loved ones with cancer."
              />
              <SupportCard
                icon={<Compass className="h-8 w-8 text-primary" />}
                title="Personalized Counseling"
                description="Our experienced team is here to provide personalized counseling sessions to address your specific concerns and challenges."
              />
            </div>
            <Card className="mt-12 bg-primary/5 border-none rounded-none">
              <CardContent className="pt-6">
                <p className="text-center text-lg text-gray-800 leading-relaxed">
                  No matter where you are in your cancer journey, we&apos;re
                  here to provide the support and resources you need. Take the
                  first step towards a more empowered and supported experience.
                </p>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-12">
              <Button
                className="bg-black text-white rounded-none p-6 text-xl hover:bg-gray-800 hover:text-white"
                variant="outline"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function SupportCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg rounded-none">
      <CardHeader className="flex flex-col items-center">
        <div className="rounded-full bg-primary/10 p-3 mb-4">{icon}</div>
        <CardTitle className="text-xl font-normal text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-center">{description}</p>
      </CardContent>
    </Card>
  );
}
