import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="Landing_conatiner">
        <div className="left">
          <h1>
            Creative <br />
            Thoughs <br />
            Agency.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            aliquid totam omnis. Doloribus illo corrupti magnam reprehenderit,
            nam facere dolor!
          </p>
          <div className="btns">
            <Link href="/about" className="about-btn">
              Learn More
            </Link>
            <Link href="/about" className="contact-btn">
              Contact
            </Link>
          </div>
        </div>
        <div className="right">
          <Image src="/LandingPg.jpg" alt="" fill className="hero-img" />
        </div>
      </section>
    </>
  );
}
