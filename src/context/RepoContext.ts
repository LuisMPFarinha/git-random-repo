import { createContext } from 'react'
import type { UseQueryResult } from '@tanstack/react-query'

export const RepoContext = createContext<UseQueryResult<any, Error> | undefined>(undefined)