import FormGroup from "./FormGroup"
import useInput from "../hooks/useInput"

export default function ArticleForm({categories,states}:{categories:{id:number,category_name:string}[] | null,states:{id:number,state:string|null}[] | null}){
    const [title,onTitleChange] = useInput("")
    const [slug,onSlugChange] = useInput(title)
    
    const onSubmit = (data:any) =>{

    }

    return(
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <FormGroup input={{value:title,onChange:onTitleChange,placeholder:"El mejor titulo! ",type:"text"}} label="Titulo: "/>
            <FormGroup input={{value:slug,onChange:onSlugChange,placeholder:"el-mejor-articulo ",type:"text"}} label="Slug: "/>
        </form>
    )
}