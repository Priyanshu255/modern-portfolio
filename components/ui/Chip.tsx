const Chip = ({ text }: { text: string }) => {
  return (
    <div className="px-5 py-1 text-xs flex items-center justify-center rounded-2xl duration-200 shadow-md border border-white/[0.4] md:hover:-translate-y-1 overflow-hidden bg-[#06255a5c]">
      {text}
    </div>
  );
};

export default Chip;
