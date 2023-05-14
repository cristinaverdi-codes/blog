import Image from 'next/image'

export default function Page() {
  return (
    <div  >
      <nav role={'header-navbar'} className={'flex justify-around place-items-center p-2 bg-blue-600 min-h-fit'}>
        <div role={'logo'} className={'flex justify-around place-items-center m-2 p-4 border border-solid bg-blue-400'}>CRISTINA VERDI</div>
        <div role={'navbar-menu'} className={''}>
          <ul className={'flex justify-around place-items-center border border-solid bg-blue-400'}>
            <li className={'m-2 p-3 border border-solid bg-blue-300'}>
              POSTS
            </li>
            <li className={'m-2 p-3 border border-solid bg-blue-300'}>
              LATEST
            </li>
            <li className={'m-2 p-3  border border-solid bg-blue-300'}>
              ABOUT
            </li>
          </ul>
        </div>
        <div role={'navbar-actions'} className={'flex justify-around place-items-center bg-blue-400'}>
          <ul className={'flex justify-around place-items-center bg-blue-400'}>
            <li className={'m-2 border border-solid p-3 bg-blue-300'}>Twitter</li>
            <li className={'m-2 border border-solid p-3 bg-blue-300'}>Linkedin</li>
          </ul>
        </div>
      </nav>
      <main className="">
      </main>
    </div>
  )
}
