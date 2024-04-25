import styles from "./postCard.module.css"
import Image from "next/image"
import Link from "next/link"

const PostCard = ({post}) => {


    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/18959278/pexels-photo-18959278/free-photo-of-m-c-lau-dai-c-c-da-l-ch-s.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img } />
                </div>
                <span className={styles.date}>03.04.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link href={`/blog/${post.id}`} className={styles.link}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard