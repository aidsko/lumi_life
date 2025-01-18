import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Anxiety() {
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
              <h1 className="text-6xl text-center  text-white animate-fadeIn">
                You can stop worrying.
              </h1>
              <h1 className="text-6xl text-center  text-white animate-fadeIn pt-5">
                You can start living your life fully.
              </h1>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-16 container mx-auto">
          <div className="px-4 md:px-6 max-w-screen-lg mx-auto">
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p>
                    On the outside, it may seem like you have it all together -
                    someone that has navigated through life without any big
                    issues.
                  </p>
                  <p>
                    But on the inside, you are constantly anxious and worried.
                    You&apos;re worried about the relationships in your life,
                    particularly the ones that are important to you.
                    Friendships, co-workers, family, romantic partners - if
                    there is a rupture, it causes you great stress and anxiety.
                  </p>
                  <p>
                    An Empath. Hyper-sensitive. A Feeler. You may have been
                    called these things or even identified yourself this way.
                  </p>
                </div>
                <div className="relative h-64 md:h-full">
                  <Image
                    src="/image1.png"
                    alt="Person experiencing anxiety"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 md:h-full order-last md:order-first">
                  <Image
                    src="/image3.png"
                    alt="Healing from anxiety"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <p>
                    You have a hard time saying no because you are afraid that
                    people will judge you or be upset with you.
                  </p>
                  <p>
                    You&apos;ve felt like you were too much for key people in
                    your life - too needy, too much, too emotional.
                  </p>
                  <p>
                    You may be easily triggered and become upset when you feel
                    abandoned or disconnected from your loved ones, when all you
                    desire is to connect with them. In the midst of all this,
                    you&apos;ve felt very alone, guilty and ashamed.
                  </p>
                  <p>
                    Many of our clients have felt these ways for way too long,
                    and you&apos;re not alone.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-center">
                <h2 className=" text-3xl">We can help.</h2>
                <p>
                  If you would like to start healing, schedule an appointment.
                </p>
              </div>

              <div className="flex flex-col space-y-2 pt-10">
                <h4 className=" text-2xl">Our Approach</h4>
                <p>
                  We will utilize an evidence-based modality called acceptance
                  and commitment therapy (ACT) to deal with anxiety more
                  effectively. What does evidence-based mean? It means
                  there&apos;s been a lot of research done on this therapy model
                  that has been proven to improve symptoms for people suffering
                  with anxiety.
                </p>
                <p>
                  However, it&apos;s important to note that there are no
                  guarantees as we are all individuals with different
                  experiences. What we can guarantee is our dedication to
                  meeting you where you are and support you in your journey the
                  best we can. Because we&apos;ve been there before.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-6 md:py-12 bg-muted">
          <div className="max-w-screen-lg mx-auto container">
            <div className="flex flex-col space-y-4 items-center">
              <div className="space-y-2">
                <h2 className=" text-5xl mb-4">Get started today.</h2>
              </div>
              <Button
                className="bg-black text-white rounded-none p-6 text-xl hover:bg-gray-800 hover:text-white"
                variant="outline"
              >
                Make an Appointment
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
