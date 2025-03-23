import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import CSSIcon from '@/assets/icons/css3.svg'
import { TechIcon } from "@/components/TechIcon";
import mapImage from '@/assets/images/map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItem } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CSSIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },

]

const hobbies = [
  {
    title: 'Dancing',
    emojie: '💃'
  },
  {
    title: 'Gaming',
    emojie: '🎮'
  },
  {
    title: 'Painting',
    emojie: '🎨'
  },
  {
    title: 'Hiking',
    emojie: '🚞'
  },
  {
    title: 'Fitness',
    emojie: '🏋️‍♂️'
  },
  {
    title: 'Reading',
    emojie: '📖'
  },

]

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do ,and what inspires me." />

        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader title="My Reads" description="Explore the books shaping my perspective."/>
            <div className="w-40 mx-auto mt-8">
            <Image src={bookImage} alt="Book cover" className=""/>
            </div>
          </Card>

          <Card className="h-[320px] p-0">
            <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences."
            className="px-6 pt-6"/>
            <ToolboxItem toolboxItems={toolboxItems} className="mt-6" itemsWrapperClassName=" -translate-x-1/2"/>
            <ToolboxItem toolboxItems={toolboxItems} className="mt-6"/>
            
          </Card>

          <Card>
            <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm."/>
            <div>
              {hobbies.map(hobby => (
                <div key={hobby.title} className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5">
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emojie}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="simling memoji" />
          </Card>


        </div>
      </div>
    </div>
  )
};
