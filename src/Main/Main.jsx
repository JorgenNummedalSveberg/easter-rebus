import styles from '../App.module.scss';
import Theft from "./Theft";
import Murder from "./Murder";
import {createSignal, For, Show} from "solid-js";
import Mystery from "./Mystery";

function Main() {
    const [mysteries, setMysteries] = createSignal(["Theft", "Murder"]);

    return <div class={styles.Main}>
        <For each={mysteries()} fallback={<div class={styles.Mystery}>Loading..</div>}>
            {(item, index) =>
                <div class={styles.Row}>
                    <Show when={index()%2!==0}>
                        <svg style="background-color:green; height: 500px; width: 200px"  viewBox="0 0 200 200" preserveAspectRatio="none">
                            <g fill="none" stroke="black" stroke-width="4">
                                <path stroke-dasharray="40,5" d="M 200 100 c -50 0, -100 50, -100 100" />
                            </g>
                            Sorry, your browser does not support inline SVG.
                        </svg>
                    </Show>
                    <Mystery mystery={item}/>
                    <Show when={index()%2===0}>
                        <svg style="background-color:green; height: 500px; width: 200px"  viewBox="0 0 200 200" preserveAspectRatio="none">
                            <g fill="none" stroke="black" stroke-width="4">
                                <path stroke-dasharray="40,5" d="M 0 100 c 50 0, 100 50, 100 100" />
                            </g>
                            Sorry, your browser does not support inline SVG.
                        </svg>
                    </Show>
                </div>
            }
        </For>
    </div>
}

export default Main;
