"use client";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { FileUpload } from "./ui/file-upload";
 
 
import { Modal, ModalTrigger } from "./ui/animated-modal";

const FileUploadBox: React.FC = () => {
  const [file, setFiles] = useState<File | null>(null);

  // const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     if (event.target.files && event.target.files.length > 0) {
  //         setFile(event.target.files[0]);
  //         console.log(event.target.files[0]);
  //     }
  // };

  return (
    <div className="flex flex-col items-center justify-center h-full p-2 w-full ">
      {/* <button onClick={handleUpload}>Upload</button> */}

      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
        <div className="gap-2 text-wrap">
      <div className="p-4">
        <Textarea className=" w-40 h-30 overflow-auto resize-none " placeholder="Type your message here."/>
      </div>
          
        </div>
        <FileUpload />
        <Modal>
          <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn cursor-pointer">
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
              Check
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              ✅
            </div>
          </ModalTrigger>
        </Modal>
      </div>

      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
};
export default FileUploadBox;
