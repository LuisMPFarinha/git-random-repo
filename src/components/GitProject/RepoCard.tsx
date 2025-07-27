import { useRepoContext } from '@/hooks/useRepoContext'
import { BadgeAlert, GitFork, Globe, Star } from 'lucide-react'

const RepoCard = () => {
  const repo = useRepoContext()
  return (
    <div className="relative flex flex-col w-full h-full bg-white border-2 rounded-2xl py-2 px-3 gap-1 min-h-30">
      <label className="font-semibold">{repo.data?.name}</label>
      <label className="text-gray-500 text-sm mb-7">
        {repo.data?.description}
      </label>
      <div className="absolute flex bottom-2 w-full justify-around -ml-3 text-xs">
        <div className="flex gap-1">
          <Globe size={16} />
          <label>{repo.data?.language}</label>
        </div>
        <div className="flex gap-1">
          <Star size={16} />
          <label>{repo.data?.stargazers_count}</label>
        </div>
        <div className="flex gap-1">
          <GitFork size={16} />
          <label>{repo.data?.forks_count}</label>
        </div>
        <div className="flex gap-1">
          <BadgeAlert size={16} />
          <label>{repo.data?.open_issues_count}</label>
        </div>
      </div>
    </div>
  )
}

export default RepoCard
