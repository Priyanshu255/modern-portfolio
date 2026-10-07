import InkCursor from "@/components/InkCursor";
import FooterBar from "@/components/ui/FooterBar";
import Link from "next/link";

const Resume = () => {
  return (
    <div
      className="w-full h-[100vh] px-10 pt-10 md:px-20 flex flex-col items-center justify-start"
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <InkCursor />
      <div className="flex items-center justify-between w-full my-5">
        <Link href="/" className="underline cursor-pointer text-neutral-50">
          Back to Home
        </Link>
      </div>

      <div className="w-full h-full mt-12">
        <div className="h-full w-full rounded-xl overflow-hidden border border-neutral-700">
          <iframe
            src="https://drive.google.com/file/d/1d7T8e-ZOThClo1iKajQ-aDt8VXqqwObM/preview"
            className="w-full h-full"
            title="Resume Preview"
          />
        </div>
      </div>
      <FooterBar />
    </div>
  );
};

export default Resume;
