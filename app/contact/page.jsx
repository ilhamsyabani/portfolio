import Form from "@/components/Form"
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react"

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto mt-12 mb-12 xl:mb-48 px-[10%]">
        {/* text dan Illustrator */}
        <div>
          {/* text */}
          <div className="xl:flex justify-between">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-x-4 text-primary text-base mb-4">
                <span className="w-[30px] h-[2px] bg-primary"></span>
                Hello Guys
              </div>
              <h1 className="text-[60px] font-bold leading-[72px] max-w-md mb-8">Let&apos;s Work <span className="text-primary">Together.</span></h1>
              <p className="subtitle max-w-[400px]">Have a project in mind or just want to say hello? Let&apos;s start a conversation. Whether you&apos;re ready to build something great or just need some advice, I&apos;m here to help. Fill out the form below, and let&apos;s make your ideas come to life.</p>
            </div>
            <div className="xl:w-[40%] items-center gap-x-4 gap-y-8">
              <h2 className="h2 my-8">Cantact Me</h2>
              <Form />
            </div>
          </div>
          <div></div>
        </div>
        {/* <div>info and text form</div> */}
      </div>
    </section>
  )
}

export default Contact