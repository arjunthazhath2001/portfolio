"use client";
import Image from 'next/image';
import react from '@/app/assets/icons/react.svg';
import html from '@/app/assets/icons/html5.svg';
import css from '@/app/assets/icons/css3.svg';
import tw from '@/app/assets/icons/tailwind.svg';
import js from '@/app/assets/icons/javascript.svg';
import ts from '@/app/assets/icons/typescript.svg';
import ex from '@/app/assets/icons/express.svg';
import nx from '@/app/assets/icons/nextjs.svg';
import py from '@/app/assets/icons/python.svg';
import rust from '@/app/assets/icons/rust.svg';
import sol from '@/app/assets/icons/solidity.svg';
import mongo from '@/app/assets/icons/mongo.svg';

import styled, { keyframes } from 'styled-components';

const scrollLeft = keyframes`
  to {
    left: -800px; 
  }
`;

const TechWrapper = styled.div`
  position: relative;
  height: 100px;
  margin-top: 40px;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
  );
`;

const TechItem = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  background-color: rgb(230, 229, 229);
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  position: absolute;
  left: 100%; /* Start at the right edge */
  animation-name: ${scrollLeft};
  animation-duration: 16s; /* Reduced duration to speed up */
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  &:nth-child(1) {
    animation-delay: calc(16s / 12 * (12 - 1) * -1);
  }

  &:nth-child(2) {
    animation-delay: calc(16s / 12 * (12 - 2) * -1);
  }

  &:nth-child(3) {
    animation-delay: calc(16s / 12 * (12 - 3) * -1);
  }

  &:nth-child(4) {
    animation-delay: calc(16s / 12 * (12 - 4) * -1);
  }

  &:nth-child(5) {
    animation-delay: calc(16s / 12 * (12 - 5) * -1);
  }

  &:nth-child(6) {
    animation-delay: calc(16s / 12 * (12 - 6) * -1);
  }

  &:nth-child(7) {
    animation-delay: calc(16s / 12 * (12 - 7) * -1);
  }

  &:nth-child(8) {
    animation-delay: calc(16s / 12 * (12 - 8) * -1);
  }

  &:nth-child(9) {
    animation-delay: calc(16s / 12 * (12 - 9) * -1);
  }

  &:nth-child(10) {
    animation-delay: calc(16s / 12 * (12 - 10) * -1);
  }

  &:nth-child(11) {
    animation-delay: calc(16s / 12 * (12 - 11) * -1);
  }

  &:nth-child(12) {
    animation-delay: calc(16s / 12 * (12 - 12) * -1);
  }
`;

export function TechIconsScroll() {
  return (
    <TechWrapper>
      <TechItem>
        <Image src={react} alt="reactjs" width={40} height={40} />
      </TechItem>

      <TechItem>
        <Image src={nx} alt="nextjs" width={40} height={40} />
      </TechItem>

      <TechItem>
        <Image src={html} alt="html" width={40} height={40} />
      </TechItem>

      <TechItem>
        <Image src={css} alt="css" width={40} height={40} />
      </TechItem>

      <TechItem>
        <Image src={tw} alt="tailwind" width={40} height={40} />
      </TechItem>

      <TechItem>
        <Image src={js} alt="javascript" width={40} height={40} />
      </TechItem>

      <TechItem>
        <Image src={ts} alt="typescript" width={40} height={40} />
      </TechItem>

      <TechItem>
        <Image src={ex} alt="express" width={40} height={40} />
      </TechItem>

      <TechItem>
        <Image src={py} alt="python" width={40} height={40} />
      </TechItem>

      <TechItem>
        <Image src={rust} alt="rust" width={40} height={40} />
      </TechItem>

      <TechItem>
        <Image src={sol} alt="sol" width={40} height={40} />
      </TechItem>

      <TechItem>
        <Image src={mongo} alt="mongo" width={40} height={40} />
      </TechItem>
    </TechWrapper>
  );
}

export default TechIconsScroll;
