import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle bg-[url('https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1712242573/uganda-2111153_1280_jxgoql.jpg')] bg-cover bg-center bg-no-repeat mb-8 md:h-[350px]">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-black font-normal"
          >
            Uganda&apos;s Finest Honey
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Straight from the Source
          </Heading>
        </span>
        {/* <a
          href="https://www.instagram.com/humble_beeing_ug/"
          target="_blank"
        >
          <Button variant="secondary">
            See us on Instagram
          </Button>
        </a> */}
      </div>
    </div>
  )
}

export default Hero
