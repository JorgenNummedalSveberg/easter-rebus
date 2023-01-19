import styles from '../App.module.scss';

function Mystery(props) {

    return <div class={styles.Mystery}>
        {props.mystery}
    </div>
}

export default Mystery;
