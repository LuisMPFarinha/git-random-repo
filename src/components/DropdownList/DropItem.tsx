import type { Item } from '@/entities/Item'
import { Check } from 'lucide-react'

const DropItem = ({
  item,
  select,
  first,
  last,
}: {
  item: Item
  select: () => void
  first: boolean
  last: boolean
}) => {
  return (
    <div
      className={`bg-white flex p-2 hover:cursor-pointer w-full hover:bg-gray-50 ${(last && 'rounded-b-2xl') || (first && 'rounded-t-2xl')} ${!last && 'border-b-2'}`}
      id={'' + item.id}
      onClick={select}
    >
      <label>{item.name}</label>
      {item.selected && <Check className="flex ml-auto" />}
    </div>
  )
}

export default DropItem
