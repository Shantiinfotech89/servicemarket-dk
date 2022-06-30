import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";


const override = css`
      display: block;
      margin: 0 auto;
      border-color: black;
  `;


const Loaders = () => {
    return (
        <div className={"sweet-loading"}>
            <BounceLoader
                css={override}
                size={80}
                color={"#4A0FA3"}
                loading={true}
                speedMultiplier={1.5}
            />
        </div>
    );
}

export default Loaders;