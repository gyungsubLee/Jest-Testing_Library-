import {render, screen } from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mocks/server";


// 1. mock sever data  Reset
test('handles error for scoops and toppings routes',async ()=>{
    server.resetHandlers(
        rest.get("http://localhost3030/scoops", (req, res, ctx)=>{
            return res(ctx.status(500));
        }),
        rest.get("http://localhost3030/toppings", (req, res, ctx)=>{
            return res(ctx.status(500));
        })
    )

    // 2. 테스트하려는 DOM renderimg
    render(<OrderEntry/>);

    //3.  해당 DOM 정상적으로 생성되는지 test
    const alerts = await screen.findAllByRole("alert", {
       name: "An unexpected error occurred. Please try again later." 
    });

    // 가져온 DOM 설계와 일치하는지 test
    expect(alerts).toHaveLength(2);
});
