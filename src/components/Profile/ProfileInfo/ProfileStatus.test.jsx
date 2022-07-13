import TestRenderer from 'react-test-renderer'

import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("profile status component", () => {
    test("status from props should be in the state", () => {
        const status = create(<ProfileStatus status={"it-kamasutra.com"} />);
        expect(instance.state.status).toBe('it-kamasutra.com');
    });
});