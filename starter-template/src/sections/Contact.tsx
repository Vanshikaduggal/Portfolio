import ArreowRightIcon from '@/assets/icons/arrow-up-right.svg'

export const ContactSection = () => {
  return (
    <div className='py-16 pt-14'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center'>
        <h2 className='font-serif text-2xl'>Let's create something amazing together</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, assumenda.</p>
        <button className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8'>
          <span className='font-semibold'>Contact Me</span>
          <ArreowRightIcon className="size-4"/>
        </button>
        </div>
      </div>
    </div>)
};
