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
                        <div></div>
                    </Show>
                    <Mystery mystery={item}/>
                    <Show when={index()%2===0}>
                        <div></div>
                    </Show>
                </div>
            }
        </For>
    </div>
}

export default Main;
