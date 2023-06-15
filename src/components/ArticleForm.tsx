import FormGroup from "./FormGroup";
import useInput from "../hooks/useInput";
import DropImage from "./DropImage";
import { FormEvent, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { htmlToMarkdown } from "../utils/htmlToMarkdown";
import type { CloudinaryResponse } from "../types/cloudinary";
import useUser from "../hooks/useUser";
import { supabase } from "../database";

export default function ArticleForm({
  categories,
  states,
}: {
  categories: { id: number; category_name: string }[] | null;
  states: { id: number; state: string | null }[] | null;
}) {
    const {user} = useUser()
  const [title, onTitleChange] = useInput("");
  const [slug, onSlugChange] = useInput("");
  const [category, onCategoryChange] = useInput(1);
  const [state, onStateChange] = useInput(1);
  const [image, setImage] = useState<File | undefined>();
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();
  const [content, setContent] = useState("");

  const handleFile = (image?: File) => {
    setImage(image);
    setPreviewUrl(image ? URL.createObjectURL(image) : undefined);
  };

  const uploadImage = async () =>{
    const formData = new FormData()
    formData.append("file",image as File)
    formData.append("upload_preset",'dwtr8kxv')
    const data : CloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/dzjidgpco/image/upload', {
    method: 'POST',
    body: formData
    }).then(r => r.json());
    return data.secure_url
  }

  const onSubmit = async (e:FormEvent) => {
    e.preventDefault()
    const url_image = await uploadImage()
    const {error} = await supabase.from("article").insert({article_image:url_image,article_slug:slug as string,article_title:title as string,category_id:category as number,markdown_text:content,article_state:state as number,user_id:user?.id})
    if(error) return alert('error')
    alert('upload')
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <FormGroup
        htmlFor="title"
        input={{
          value: title,
          onChange: onTitleChange,
          placeholder: "El mejor titulo! ",
          type: "text",
        }}
        label="Titulo: "
      />
      <FormGroup
        htmlFor="slug"
        input={{
          value: slug,
          onChange: onSlugChange,
          placeholder: "el-mejor-articulo ",
          type: "text",
        }}
        label="Slug: "
      />
      <div className="flex flex-col gap-1">
        <label htmlFor="categories">Categoria: </label>
        <select
          value={category}
          id="categories"
          name="categories"
          onChange={onCategoryChange}
        >
          {categories?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.category_name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="states">Estado de publciación: </label>
        <select
          value={state}
          id="states"
          name="states"
          onChange={onStateChange}
        >
          {states?.map((state) => (
            <option key={state.id} value={state.id}>
              {state.state}
            </option>
          ))}
        </select>
      </div>
      <DropImage onImage={handleFile} previewUrl={previewUrl} />
      <ReactQuill
        theme="snow"
        value={content}
        onChange={(val) => {
          setContent(htmlToMarkdown(val));
        }}
        className="h-72 [&>.ql-container]:overflow-y-auto mb-12"
      />
      <button className="px-4 py-2 rounded-md bg-blue-500 text-white">
        Guardar
      </button>
    </form>
  );
}
