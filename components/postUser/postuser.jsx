import styles from "./postUser.module.css"
import Image from "next/image"

const getData = async ({userId}) => {
    const res = await fetch
}

const Postuser = ({userId}) => {
    return (
        <div className={styles.container}>   
            <Image
                src={"/"}
                alt=""
                width={50}
                height={50}
                className={styles.avatar}
            />    
            <span className={styles.title}>Author</span>
            <span className={styles.username}>Terry Jefferson</span>
            
        </div>
    )
}

export default Postuser