import { Suspense } from 'react'
import ThankYou from './ThankYou'

const Page = () => {
  return (
    <Suspense>
      <ThankYou />
    </Suspense>
  )
}

export default Page
