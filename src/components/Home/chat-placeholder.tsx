import { Lock } from "lucide-react";
import Image from "next/image";


const ChatPlaceHolder = () => {
    return (
        <div className='w-3/4 bg-gray-secondary flex flex-col items-center justify-center py-10'>
            <div className='flex flex-col items-center w-full justify-center py-10 gap-4'>
                <Image src={"/desktop-hero.png"} alt='Hero' width={320} height={188} />

                <p className='w-1/2 text-center text-gray-primary text-sm text-muted-foreground '>
                    <b> Start the conversation And Connect to Family, Friends And Closed Ones......</b>
                </p>


            </div>
            <p className='w-1/2 mt-auto text-center text-gray-primary text-xs text-muted-foreground flex items-center justify-center gap-1'>
                <Lock size={20} /> <b>End to End encryption</b>
            </p>
        </div>
    );
};
export default ChatPlaceHolder;