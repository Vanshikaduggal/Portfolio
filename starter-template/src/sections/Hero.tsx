import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StartIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import CircleIcon from '@/assets/icons/check-circle.svg'
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
      <div className='absolute inset-0 -z-30 opacity-5'
        style={{
          backgroundImage: `url(${grainImage.src})`
        }}
      >
      </div>

      <div className='size-[620px] hero-ring'></div>
      <div className='size-[820px] hero-ring'></div>
      <div className='size-[1020px] hero-ring'></div>
      <div className='size-[1220px] hero-ring'></div>
      <HeroOrbit size={1000} rotation={-130}> {/* Top Center */}
        <StartIcon className="size-28 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit size={820} rotation={-40}> {/* Top Right */}
        <StartIcon className="size-12 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit size={600} rotation={70}> {/* Bottom Left */}
        <StartIcon className="size-8 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit size={550} rotation={-55}>
        <SparkleIcon className="size-8 text-emerald-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={570} rotation={30}>
        <SparkleIcon className="size-5 text-emerald-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={720} rotation={130}>
        <SparkleIcon className="size-10 text-emerald-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={970} rotation={90}>
        <SparkleIcon className="size-14 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={1000} rotation={40}>
        <div className="size-3 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={1020} rotation={-30}>
        <div className="size-3 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={1000} rotation={40}>
        <div className="size-3 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>
      
      <HeroOrbit size={780} rotation={-90}>
        <div className="size-3 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>
      </div>
      <div className="container">
        <div className='flex flex-col items-center'>
          <Image src={memojiImage} className='size-[100px]' alt="Person peeking from behind laptop" />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg  '>
            <div className='bg-green-500 size-2.5 rounded-full'></div>
            <div className='text-sm font-medium'>Available for new projects</div>
          </div>
          <div>
            <div className='max-w-lg mx-auto'>
              <h1 className='font-serif text-3xl md:text-5xl text-center font-bold mt-8 tracking-wide'>Building Exceptional User Experiences</h1>
              <p className='mt-4 text-center text-white/60 md:text-lg font-light'>
                I specialize in transforming designs into functional,high-performing web applicatiobs. Let's discuss your next project.
              </p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
              <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
                <span className='font-semibold'>Explore My Work</span>
                <ArrowDown className="size-4" />
              </button>
              <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
                <span>👋</span>
                <span className='font-semibold'>Let's Connect</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
