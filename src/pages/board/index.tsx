import { Button } from "antd"
import { useRouter } from "next/router"

// interface DataProps{

// }

const Board = () => {
    const router = useRouter();
    return (
        <div style={{marginTop: 50}}>
            <div>게시판</div>
            <Button onClick={() => {
                router.push(router.asPath + '/write')
            }}>글쓰기</Button>
        </div>
    )
}
export default Board;