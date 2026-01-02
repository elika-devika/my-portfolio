 import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;

  const h11 = useRef(null);
  const h12 = useRef(null);
  const h13 = useRef(null);
  const myimageref = useRef(null);

  useEffect(() => {
    if (!h11.current || !h12.current || !h13.current || !myimageref.current) return;

    // ✅ Set initial positions before animation to avoid blinking
    gsap.set([h11.current, h12.current, h13.current], { x: "-100%" });
    gsap.set(myimageref.current, { x: "200%", scaleX: 1 }); // scaleX:1 ensures image is not inverted

    // ✅ Smooth GSAP animation
    const tl = gsap.timeline();
    tl.to(h11.current, { x: 0, duration: 2, ease: "power3.out" })
      .to(h12.current, { x: 0, duration: 2, ease: "power3.out" }, "<")
      .to(h13.current, { x: 0, duration: 2, ease: "power3.out" }, "<")
      .to(myimageref.current, { x: 0, duration: 2, ease: "power3.out" }, "<");
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi, 👋 <br />
          My Name is <br />
        </h1>

        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>

        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>

      <div className="mt-5 md:mt-0">
        {/* ✅ Only render image if it exists */}
        {img && (
          <img
            ref={myimageref}
            className="w-1/2 md:ml-auto scale-x-100"
            src={img}
            alt="Profile"
          />
        )}
      </div>
    </main>
  );
}

export default Home;