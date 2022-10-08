import React from "react";
import { css } from "@emotion/react"
export const UseCrusher = ({ children, color }) => (
    <div
        css={css`font-size: 120px;`}>
        use crusher in a project

        <div>
            npx crusher-cli test:create
        </div>

        <div>or download binary </div>
    </div>
);
