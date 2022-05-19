import React from "react";
import Link from "next/link";
import {
  LandingButton,
  LandingImage,
  LandingImageContainer,
  LandingMain,
  LandingText,
  LandingTextContainer,
  LandingTitle,
  MainWrapper,
} from "./Landing.elements";

const Landing = ({
  titleText,
  descriptionText,
  hasButton,
  btnText,
  btnLink,
  imageLink,
  imageWidth,
  imageHeight,
  bgColor,
  orderInLine,
  hasShadow,
}) => {
  return (
    <MainWrapper bgColor={bgColor} hasShadow={hasShadow}>
      <LandingMain>
        <LandingTextContainer orderInLine={orderInLine}>
          <LandingTitle>{titleText}</LandingTitle>
          <LandingText>{descriptionText}</LandingText>
          {hasButton && (
            <Link href={btnLink}>
              <LandingButton>{btnText}</LandingButton>
            </Link>
          )}
        </LandingTextContainer>
        <LandingImageContainer>
          <LandingImage
            src={imageLink}
            width={imageWidth}
            height={imageHeight}
          ></LandingImage>
        </LandingImageContainer>
      </LandingMain>
    </MainWrapper>
  );
};

export default Landing;
