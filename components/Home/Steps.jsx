/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const NavBarCSSSelected = css`
  padding: 44px 64px;
  display: flex;
  color: #8e8e8e;
  font-size: 14px;
  justify-content: space-between;
`;

const boxDesc = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const selectedStep = css`
  #count {
    color: #87ff4f;
  }
  font-size: 18px;
  color: #fff;
`;

const Step = ({ step, selected, index, strikeOff }) => {
  return (
    <div css={[step, selected && selectedStep]}>
      <span id="count">Step {index + 1}:</span>
      <span
        css={css`
          margin-left: 12px;
          ${strikeOff ? `text-decoration: line-through; color: grey;` : ``}
        `}
      >
        {step.stepHeading}
      </span>
    </div>
  );
};

export function Steps() {
  const { query } = useRouter();
  const [stepIndex, setStepIndex] = useState(query.step || 0);

  useEffect(() => {
    setStepIndex(Number(query.step));
  }, [query]);

  return (
    <header>
      <div css={[NavBarCSSSelected]}>
        <div css={boxDesc}>
          {stepList.map((step, index) => {
            return (
              <Step
                strikeOff={index < stepIndex}
                selected={stepIndex === index}
                index={index}
                step={step}
              />
            );
          })}
        </div>

        <div>
          <iframe
            width="240"
            src="https://www.loom.com/embed/25d9980b37b9464590f645cba3b68083"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </header>
  );
}

const stepList = [
  {
    stepHeading: "Click on blue button and we will record it"
  },
  {
    stepHeading: "Check value of box is updated to blue."
  },
  {
    stepHeading: "Add small code for edge case"
  },
  {
    stepHeading: "Recorder a test"
  }
];

export default Steps;
