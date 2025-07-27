import DropdownList from '@/components/DropdownList/DropdownList'
import GitProject from '@/components/GitProject/GitProject'
import type { Item } from '@/entities/Item'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { getRandRepoByLanguage } from '@/requests/git'
import { RepoContext } from '@/context/RepoContext'
import { useQuery } from '@tanstack/react-query'

const App = () => {

  const [list, setList] = useState<Array<Item>>([
    { id: 1, name: 'JavaScript', selected: false },
    { id: 2, name: 'Java', selected: false },
    { id: 3, name: 'Python', selected: false },
    { id: 4, name: 'C', selected: false },
    { id: 5, name: 'Ruby', selected: false },
    { id: 6, name: 'Html', selected: false },
    { id: 7, name: 'Assembly', selected: false },
    { id: 8, name: 'Cobol', selected: false },
    { id: 9, name: 'Dart', selected: false },
    { id: 10, name: 'Kotlin', selected: false },
  ])
  const [selectedItem, setSelectedItem] = useState<Item>()

  const repo = useQuery({
    queryKey: ['repo', { selectedItem: selectedItem }],
    queryFn: () => selectedItem && getRandRepoByLanguage(selectedItem?.name),
    enabled: !!selectedItem,
  })

  return (
    <RepoContext.Provider value={repo}>
      <div className="flex flex-col mt-10 w-70 m-auto">
        <div className="flex gap-2">
          <div className="rounded-lg bg-black w-7 h-7"></div>
          <label>GitHub Repository Finder</label>
        </div>
        <DropdownList
          list={list}
          setList={setList}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <GitProject />
        <button
          className={`p-2.5 mt-5 rounded-xl text-white hover:cursor-pointer ${repo.isError ? 'bg-red-500 hover:bg-red-400' : 'bg-black hover:bg-black/90'}`}
          onClick={() => repo.refetch()}
        >
          {repo.isError ? 'Click to retry' : 'Refresh'}
        </button>
      </div>
    </RepoContext.Provider>
  )
}

export const Route = createFileRoute('/')({
  component: App,
})
