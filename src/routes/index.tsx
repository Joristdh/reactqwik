import { component$, useSignal, useStyles$ } from "@builder.io/qwik";

export default component$(() => {
    useStyles$(/* css */`
        span {
            font-size: 25em;
            height: 100vh;
            line-height: 75vh;
        }
    `);

    const vis = useSignal(1);

    return <>
        <main class={["cursor-pointer select-none overflow-hidden h-screen",
            { "pointer-events-none": vis.value === 0 }]} onClick$={() => {
                vis.value = 0;
                setTimeout(() => {
                    vis.value = Math.floor(Math.random() * 2) + 2
                }, (Math.floor(Math.random() + 3) * 1000)
            }}>
            <div class="flex justify-center items-center h-screen">
                {(() => {
                    switch (vis.value) {
                        case 1:
                            return <h1>Press anywhere to start</h1>
                        case 2:
                            return <span>&#8680;</span>
                        case 3:
                            return <span>&#8678;</span>
                    }
                })()}
            </div>
        </main>
    </>
});
