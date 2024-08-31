import Socials from "./Socials";

export const Footer = () => {
  return (
    <footer className='bg-secondary dark:bg-slate-800/30 py-12 xl:px-[100px]'>
      <div className='container mx-auto'>
        <div className="flex flex-col items-center justify-between">
          <Socials containerStyles='flex gap-x-4 mx-auto xl:mx-0 mb-4'
          iconsStyles='text-primary dark:text-white/60 text-[20px] hover:text-white dark:hover:text-primary trasition-all' />
          <div className="text-muted-foreground">
            Copyright &copy; Ilham Syabani. All right reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer