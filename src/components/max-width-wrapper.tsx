import { cn } from '@/utils'
import { FC, ReactNode } from 'react'

interface MaxWidthWrapperProps {
  className? : string
  children : ReactNode
}

const MaxWidthWrapper: FC<MaxWidthWrapperProps> = ({className, children}) => {
  return <div className={cn("h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
    {children}
  </div>
}

export default MaxWidthWrapper