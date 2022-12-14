/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";
const NavBarCSSSelected = css`
  padding: 32px 64px;
  background-color: #031421;
  color: #ffffff;
  font-size: 21px;

  display: flex;
  flex-direction: column;

  justify-content: center;

  h1 {
    margin-bottom: 32px;
  }
`;

const box = css`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 12px;
    color: #90868f;
    margin-top: 12px;
  }
`;

const boxDesc = css`
  display: flex;
  padding-left: 32px;

  #button {
    width: 160px;
    height: 39px;
    display: flex;
    align-items: center;
    font-size: 14px;
    justify-content: center;

    background: #2841ff;
    border: 0.5px solid grey;
    border-radius: 10px;
    cursor: pointer;
    margin-right: 12px;
  }

  #button2 {
    width: 60px;
    height: 39px;
    display: flex;
    align-items: center;
    font-size: 14px;
    justify-content: center;

    background: pink;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    margin-right: 40px;
  }

  #value-box {
    margin-left: 20px;
    font-size: 14px;
    display: flex;
    align-items: center;
    #value {
      padding: 4px 8px;
      border-radius: 4px;
      margin-left: 8px;
      color: #000;
    }
  }
`;

export function NavBar() {
  const [color, setColor] = useState("blue");
  return (
    <header>
      <div css={[NavBarCSSSelected]}>
        <div css={box}>
          <div
            css={css`
              margin-bottom: 40px;
            `}
          >
            <h1
              css={css`
                font-weight: 800;
                letter-spacing: 1px;
                margin-bottom: 0px !important;
              `}
            >
              {" "}
              🗺️ Get familiar with recorder
            </h1>
            <span
              css={css`
                margin-top: -12px;
                margin-left: 32px;
              `}
            >
              complete steps to get familiar
            </span>
          </div>

          <span>skip</span>
        </div>

        <div css={boxDesc}>
          <div id="button" onClick={setColor.bind(this, "red")}>
            <span
              css={css`
                margin-right: 4px;
              `}
            >
              {" "}
              click to change color
            </span>
          </div>

          <div id="button2" onClick={setColor.bind(this, "blue")}>
            reset
          </div>
          <div id="value-box">
            color is set to ={" "}
            <div
              id="value"
              css={css`
                color: #fff !important;
                background: ${color};
              `}
            >
              {color}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
