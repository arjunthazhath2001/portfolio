"use client";
import Image from 'next/image';
import star from '@/app/assets/star.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 100px;
  margin-top: 5px;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
  );
`;

const Item = styled.div`
  width: 140px; /* Reduced width */
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  position: absolute;
  left: max(calc(140px * 4), 100%); /* Adjusted width */
  animation-name: scrollLeft;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  margin-left: -10px; /* Added negative margin to reduce space */

  &:nth-child(1) {
    animation-delay: calc(20s / 4 * (4 - 1) * -1);
  }
  
  &:nth-child(2) {
    animation-delay: calc(20s / 4 * (4 - 2) * -1);
  }
  
  &:nth-child(3) {
    animation-delay: calc(20s / 4 * (4 - 3) * -1);
  }
  
  &:nth-child(4) {
    animation-delay: calc(20s / 4 * (4 - 4) * -1);
  }

  @keyframes scrollLeft {
    to {
      left: -150px;
    }
  }
`;

export function HorizontalScroll() {
  return (
    <Wrapper>
      <Item className="whitespace-nowrap mx-6">
        <Image src={star} alt="Star" className="w-4 h-4 mx-1" />
        <span className="mx-2 text-base font-normal">
           PERSONAL <span className="font-bold">PORTFOLIO &nbsp;&nbsp;</span>
        </span>
      </Item>
      <Item className="whitespace-nowrap mx-6">
        <Image src={star} alt="Star" className="w-4 h-4 mx-1" />
        <span className="mx-2 text-base font-normal">
           PERSONAL <span className="font-bold">PORTFOLIO &nbsp;&nbsp;</span>
        </span>
      </Item>
      <Item className="whitespace-nowrap mx-6">
        <Image src={star} alt="Star" className="w-4 h-4 mx-1" />
        <span className="mx-2 text-base font-normal">
           PERSONAL <span className="font-bold">PORTFOLIO &nbsp;&nbsp;</span>
        </span>
      </Item>
      <Item className="whitespace-nowrap mx-6">
        <Image src={star} alt="Star" className="w-4 h-4 mx-1" />
        <span className="mx-2 text-base font-normal">
           PERSONAL <span className="font-bold">PORTFOLIO &nbsp;&nbsp;</span>
        </span>
      </Item>
    </Wrapper>
  );
}

export default HorizontalScroll;
