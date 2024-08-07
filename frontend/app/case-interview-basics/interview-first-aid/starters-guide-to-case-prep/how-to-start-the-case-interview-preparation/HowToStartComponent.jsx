import React from "react";
import Image from "next/image";
import Link from "next/link";

const HowToStartComponent = () => {
  return (
    <article className="">
      <h2 className="text-3xl font-semibold py-4">
        <strong>
          Prepare for Your Consulting Case Interview by Learning the Basics and
          Mentally Preparing for the Intense Practice
        </strong>
      </h2>
      <h3 className="text-2xl font-semibold py-4">
        <strong>How do I prepare for this daunting task?</strong>
      </h3>
      <p>
        In tackling case interviews, it’s quite possible for bright candidates,
        who know exactly what to expect, to lose their composure. In order to
        repeatedly demonstrate prerequisite skills under the pressure of a
        real&nbsp;
        <a href="https://www.preplounge.com/en/articles/case-interview">
          case interview
        </a>
        , those skills almost have to become “second nature”. This can only be
        achieved with sufficient preparation.
      </p>
      <p>
        Here are three approaches as a timeline that the most successful
        candidates use at top consultancies like McKinsey, BCG or Bain:
      </p>
      <p>&nbsp;</p>
      <figure class="image">
        <Image
          src="/assets/case-interview/how-to-start.webp"
          alt="how-to-start.webp"
          width={800}
          height={600}
        />
      </figure>
      <p>&nbsp;</p>
      <ol>
        <li>
          <strong>Self-study</strong>:{" "}
          <strong>
            Familiarize yourself with the basic concepts and frameworks.
          </strong>{" "}
          Don&apos;t spend too much time memorizing things. Rather, try to go
          through cases yourself and think about how you can build on the
          frameworks to develop your own customized structure.
        </li>
        <li>
          <strong>Interviews with peers:</strong> Put theory into practice by{" "}
          <strong>solving cases together with like-minded case partners</strong>
          . On our{" "}
          <a href="https://www.preplounge.com/en/meeting-board">
            meeting board
          </a>{" "}
          you will find numerous case partners with whom you can practice. After
          your first case interview simulation, you will know where you stand in
          your preparation. From this point on, you can improve continuously
          until you succeed in solving the cases almost effortlessly.
        </li>
        <li>
          <strong>Interviews with coaches: </strong>Especially if you have
          limited time and want to get the most out of your case interview
          preparation, we recommend that you{" "}
          <strong>prepare with an experienced</strong>{" "}
          <a href="https://www.preplounge.com/en/case-coach">case coach</a>. On
          PrepLounge{" "}
          <strong>
            you will find more than 650 (former) management consultants from top
            consultancies
          </strong>{" "}
          such as McKinsey, BCG or Bain, who will help you to be perfectly
          prepared for your interview. You can either book individual sessions
          or benefit from the price advantage of the{" "}
          <a href="https://www.preplounge.com/en/shop/coaching-packages-5/coachingplus-3-18">
            coaching packages
          </a>
          .
        </li>
      </ol>
      <p>
        In short, you need to learn the fundamentals and then PRACTICE PRACTICE
        PRACTICE! The latter naturally being the most important driver. You can
        think of case interviews as analogous to sports: Athletes spend some
        time learning the rules and best practices / important plays, but at the
        end of the day, they need to practice intensely during training to be
        ready for the big game.&nbsp;
      </p>
    </article>
  );
};

export default HowToStartComponent;
