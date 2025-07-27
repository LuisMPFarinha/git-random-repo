import type { Item } from '@/entities/Item'
import { ChevronUp } from 'lucide-react'

const DropInput = ({
  selectedItem,
  toggleIsOpen,
  isOpen
}: {
  selectedItem: Item | undefined
  toggleIsOpen: () => void
  isOpen: boolean
}) => {


  return (
    <div
      className="flex border-2 rounded-xl w-full px-3 py-1.5 hover:cursor-pointer hover:bg-gray-50"
      onClick={toggleIsOpen}
    >
      <label className='font-semibold'>{selectedItem ? selectedItem.name : "Select a Language"}</label>
      <ChevronUp className={`flex ml-auto ${!isOpen && "rotate-180" } transition duration-300`} />
    </div>
  )
}

export default DropInput
