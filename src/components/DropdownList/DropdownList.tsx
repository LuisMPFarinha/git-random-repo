import { useState, type Dispatch, type SetStateAction } from 'react'
import DropInput from './DropInput'
import DropItem from './DropItem'
import type { Item } from '@/entities/Item'

const DropdownList = ({
  list,
  setList,
  selectedItem,
  setSelectedItem
}: {
  list: Item[]
  setList: Dispatch<SetStateAction<Item[]>>
  selectedItem: Item | undefined
  setSelectedItem: Dispatch<SetStateAction<Item | undefined>>
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const select = (id: number) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === id || item.selected
          ? { ...item, selected: !item.selected }
          : item,
      ),
    )
    console.log(list.find((item) => item.id === id))
    setSelectedItem(list.find((item) => item.id === id))
    setIsOpen(false)
  }

  let content = list.map((item, i) => (
    <DropItem
      key={item.id}
      item={item}
      select={() => select(item.id)}
      first={i === 0}
      last={i === list.length - 1}
    />
  ))

  return (
    <div className="relative flex flex-col items-center pt-5 w-full z-1">
      <DropInput
        selectedItem={selectedItem}
        toggleIsOpen={toggleIsOpen}
        isOpen={isOpen}
      />

      <div
        className={`absolute top-15 w-full transition duration-100 origin-top scale-y-0 ${isOpen && 'scale-y-100'} border-2 rounded-2xl mt-2 w-50`}
      >
        {content}
      </div>
    </div>
  )
}

export default DropdownList
