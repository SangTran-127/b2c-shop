"use client";

import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import styles from "./intro.module.css";
import keyboard from "/public/images/keyboard1.webp";
import keyboard2 from "/public/images/keyboard2.webp";
import deskmat from "/public/images/deskmat.webp";
import deskmat2 from "/public/images/deskmat2.webp";
import keycaps from "/public/images/keycaps.webp";
import keycaps2 from "/public/images/keycaps2.webp";
import switch2 from "/public/images/switch2.webp";
import switch1 from "/public/images/switch.webp";

const IntroSection = () => {
  const plane1 = useRef<HTMLDivElement>(null);
  const plane2 = useRef<HTMLDivElement>(null);
  const plane3 = useRef<HTMLDivElement>(null);

  let requestAnimationFrameId: null | number = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: number, target: number, amount: number) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId || 0);
      requestAnimationFrameId = null;
    }
  };

  return (
    <section className="bg-black">
      <main
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        className={styles.main}
        // className="w-full border relative"
      >
        <div ref={plane1} className={styles.plane}>
          <Image className="img" src={keyboard} alt="image" width={400} />
          <Image className="img" src={keyboard2} alt="image" width={400} />
          <Image className="img" src={switch1} alt="image" width={325} />
        </div>
        <div ref={plane2} className={styles.plane}>
          <Image className="img" src={switch2} alt="image" width={350} />
          <Image className="img" src={keycaps} alt="image" width={300} />
          <Image className="img" src={keycaps2} alt="image" width={325} />
        </div>
        <div ref={plane3} className={styles.plane}>
          <Image className="img" src={deskmat} alt="image" width={250} />
          <Image className="img" src={deskmat2} alt="image" width={300} />
        </div>
        <div className={styles.title}>
          <h1 className="text-6xl">{`My Shop`}</h1>
          <p className="text-2xl">Next.js and GSAP</p>
        </div>
      </main>
    </section>
  );
};

export default IntroSection;
