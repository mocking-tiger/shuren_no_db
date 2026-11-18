import { runTTS } from "@/utils/run-tts";

const Speaker = ({ text }: { text: string }) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        runTTS(text);
    };

    return (
        <div onClick={handleClick} className="w-8 h-8 md:w-10 md:h-10 absolute top-6 right-6 cursor-pointer hover:scale-120 transition-all duration-300">
            <img
                src="/images/icon/speaker.svg"
                alt="speaker"
                className="w-10 h-10"
            />
        </div>
    );
};

export default Speaker;