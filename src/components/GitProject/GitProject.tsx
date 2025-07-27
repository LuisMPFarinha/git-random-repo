import RepoCard from "./RepoCard"
import { useRepoContext } from "@/hooks/useRepoContext";

const GitProject = () => {
  const repo = useRepoContext();
  let content = <label className='m-auto'>Please select a language</label>

  if(repo.isError) content = <label className='m-auto'>Error fetching repositories</label>
  else if(repo.isLoading) content = <label className='m-auto'>Loading, please wait..</label>
  else if(repo.data) content = <RepoCard/>
  else content = <label className='m-auto'>Please select a Language</label>

  return (
    <div className={`flex flex-col mt-5 bg-gray-300 rounded-2xl w-full min-h-30 ${repo.isError && "bg-red-200"}`}>
      {content}
    </div>
  )
}

export default GitProject