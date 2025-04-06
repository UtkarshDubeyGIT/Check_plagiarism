import FileUploadBox from "@/components/FileUpload";
import { cn } from "@/lib/utils";
import { Highlight } from "@/components/ui/hero-highlight";

export default function Home() {
  return (
    <>
      <div className="relative flex h-[50rem] w-full items-center justify-center bg-black dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black">

        </div>

        {/* <p className="relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-900 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          Backgrounds
        </p> */}

<div className="md:flex md:flex-row relative flex flex-col inset-0 z-100 items-center justify-center w-full h-full">
          <div className="flex flex-col sm:flex-col items-center justify-start text-left w-1/2 p-4">
          <h1 className="text-6xl font-extrabold text-white sm:text-8xl">
            Check for Plagiarism
          </h1>
          <Highlight className="text-black dark:text-white text-6xl font-extrabold sm:text-8xl">
          Instantly
        </Highlight>
          <p className="mt-4 text-lg text-gray-300 sm:text-xl">
            Upload your content and ensure originality with our advanced plagiarism detection tool.
          </p>
          </div>
          {/* below is form */}
          <div className="m-0 flex flex-col items-center justify-center w-1/2 h-full p-4">
              <FileUploadBox/>
          </div>
      </div>
        
      </div>
      
      

      
    </>
  );
}
