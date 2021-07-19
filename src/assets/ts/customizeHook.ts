// import { useCallback, useEffect, useRef } from 'react'

// const useFirstMountState = () => {
//   const isFirst = useRef<boolean>(true)
//   return useCallback(() => {
//     if (isFirst.current) {
//       isFirst.current = false
//       return true
//     }
//     return isFirst.current
//   }, [])
// }

// export const useUpdateFirstEffect = (effect: Function, deps: any) => {
//   const isFirstMount = useFirstMountState()
//   useEffect(() => {
//     if (!isFirstMount) {
//       return effect()
//     }
//   }, deps)
// }

export {}