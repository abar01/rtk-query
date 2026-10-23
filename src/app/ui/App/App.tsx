import { Routing } from '@/common/routing'
import { Header } from '@/common/components/Header'
import s from './App.module.css'


export const App = () => {
  return (
    <>
      <Header />
      <div className={s.layout}>
        <Routing />
      </div>
    </>
  )
}
