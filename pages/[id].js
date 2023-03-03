import { useRouter } from "next/router";

function elma (){
    const router = useRouter()
    const id = router.query.id
    return <h1>elma sayisi {id}</h1>
}

export default elma