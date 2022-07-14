import React from "react"
import { create } from "react-test-renderer"
import ProfileStatus from "./ProfileStatus"

describe("profile status component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"it-kamasutra.com"} />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('it-kamasutra.com')
    })
    test("after creation <span> should be displayed with correct status", () => {
        const component = create(<ProfileStatus status={"it-kamasutra.com"} />)
        const instance = component.getInstance()
        let span = instance.findByType("span")
        expect(span.lenght).toBe(1)
    })
})