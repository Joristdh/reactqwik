import { component$, useSignal, useStyles$ } from "@builder.io/qwik";

export default component$(() => {
    useStyles$(/* css */`
        main {
            height: 100vh;
            overflow: hidden;
        }

        h1 {
            display: none;
            user-select: none;

            &.display {
                display: block;§
            }
        }

        span {
            display: none;
            font-size: 25em;
            height: 100vh;
            line-height: 75vh;

            &.display {
                display: inline-block;
            }
        }
    `);

    const vis = useSignal(0);

    return <>
        <main class="cursor-pointer" onClick$={() => {
            vis.value = 4;
            setTimeout(() => {
                vis.value = Math.floor(Math.random() * 2) + 1
            }, (Math.floor(Math.random() * 3) + 3) * 1000)
        }}>
            <div class="flex justify-center items-center h-screen">
                <h1 class={{ "display": vis.value === 0 }}>Press anywhere to start</h1>
                <span class={{ "display": vis.value === 1 }}>&#8680;</span>
                <span class={{ "display": vis.value === 2 }}>&#8678;</span>
            </div>
        </main>
    </>
});
