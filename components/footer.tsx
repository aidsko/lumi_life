import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 md:px-6 border-t">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/Lumi-life-therapy-logo.svg"
            alt="Lumi Life Therapy"
            width={75}
            height={75}
          />
        </div>
        <p className="text-center md:text-right max-w-md">
          Should you feel like you are in crisis or having thoughts of suicide,
          please call 911, 988 or go to nearest Emergency Room.
        </p>
        <p className="text-xs text-muted-foreground text-center md:text-left mt-2">
          © {new Date().getFullYear()} Lumi Life Therapy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
