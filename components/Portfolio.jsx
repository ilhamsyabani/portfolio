import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/Badge";


const Portfolio = ({ project }) => {
    return (
        <Card className='group overflow-hidden relative'>
            <CardHeader className='p-0'>
                <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 
            xl:bg-work_project_light xl:dark:bg-work_project_dark xl:bg-[110%] rounded-t-sm">
                    <Image className="absolute bottom-0" src={project.image} width={247} height={250} alt="" priority />
                    <div>
                        <Link href={project.link} className='bg-secondary  text-primary w-[52px] h-[52px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out'><Link2Icon /></Link>
                    </div>
                </div>
            </CardHeader>
            <div className="h-full px-8 py-6 max-h-[400px]">
                <Badge className={'uppercase text-sm font-light mb-2 absolute top-4  left-4'}>
                    {project.role}
                </Badge>
                <h4 className="h4 text-left mb-4">{project.name}</h4>
                <p className="text-muted-foreground text-medium  text-left">{project.description}</p>
            </div>
        </Card>
    )
}

export default Portfolio