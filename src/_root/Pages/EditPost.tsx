import PostForm from "@/components/Forms/PostForm"
import Loader from "@/components/Shared/Loader";
import { useGetPostById } from "@/lib/react-query/queriesandmutations";
import { useParams } from "react-router-dom"


const EditPost = () => {

  const {id} = useParams();
  const {data: post, isPending} = useGetPostById(id || ''); 

  if(isPending) return <Loader />

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img 
            src="/assets/icons/add-post.svg" 
            alt="add"
            height={36}
            width={36}
          />

        <h2 className="h3-bold md:h2-bold text-left w-full">Edit Post</h2>

        </div>

        <PostForm action="Update" post={post} />

      </div>
    </div>
  )
}

export default EditPost