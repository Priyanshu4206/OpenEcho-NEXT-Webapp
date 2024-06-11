import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="about_container">
        <div className="left">
          <h1>About Agency</h1>
          <p className="sub-head">
            We create digital ideas that are bigger, bolder, braver and better
          </p>
          <p>
            we create digital ideas that are biggerm bolder, braver and better.
            we belive in good ideas flexibility and precission. We're world's
            Our Special Team best consulting and Finance solution provider. Wide
            range of web and Software development services
          </p>
          <div className="details">
            <div className="boxes">
              <span className="val">10 K+</span>
              <span className="titles">Years of Experience</span>
            </div>
            <div className="boxes">
              <span className="val">234 K+</span>
              <span className="titles">People reached</span>
            </div>
            <div className="boxes">
              <span className="val">5 K+</span>
              <span className="titles">Services and plugins</span>
            </div>
          </div>
        </div>
        <div className="right">
          <Image src="/LandingPg.jpg" alt="" fill className="hero-img" />
        </div>
      </section>
    </>
  );
}
