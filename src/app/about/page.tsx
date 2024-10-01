"use client";

import Nav from "../components/Navbar";
import { useRouter } from "next/navigation";
import Image from "next/image";

const About = () => {
  const router = useRouter();

  return (
    <div>
      <Nav />
      <section className="section">
        <section id="home">
          <div id="profile">
            <Image
              src="/profile.jpg"
              alt="profile"
              width={150}
              height={150}
              priority
            />
          </div>
          <div id="heading">
            <h1>
              WEB DEVELOPER <span>NIRMA QURESHI</span>
            </h1>
            <p>
              &quot; Nirma Qureshi, a Web Development graduate from Tech Force
              Pakistan and currently advancing AI studies at GIAIC. With the
              successful completion of the TypeScript course and Quarter 1 exam,
              now focused on mastering Next.js. Bringing a unique pre-medical
              background, poised to apply expertise in web development and AI to
              innovative and impactful projects. This keeps it professional and
              concise!&quot;
            </p>
            <button id="btn" onClick={() => router.push("/contact")}>
              Contact me
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
