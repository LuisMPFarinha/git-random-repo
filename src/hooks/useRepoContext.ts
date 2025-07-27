import { RepoContext } from '@/context/RepoContext'
import { useContext } from 'react'

export const useRepoContext = () => {
  const context = useContext(RepoContext)
  if (!context)
    throw new Error('useRepoContext must be used within a RepoContext.Provider')
  return context
}
