import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatHeaderProps {
  onClose: () => void;
}

export const ChatHeader = ({ onClose }: ChatHeaderProps) => (
  <div className="flex justify-between items-center p-4">
    <button
      onClick={onClose}
      className="text-[#FF7F00] hover:text-[#FF9F40] transition-colors"
      aria-label="إغلاق المحادثة"
    >
      ✕
    </button>
    <div className="flex items-center gap-3">
      <h3 className="font-bold text-[18px] text-[#FF7F00]" style={{ fontFamily: 'Cairo, sans-serif' }}>المطور الذكي</h3>
      <Avatar className="h-10 w-10 border-2 border-[#FF7F00]">
        <AvatarImage src="/lovable-uploads/2928ea5d-0496-42fa-b4c6-b6440e96e0f4.png" alt="Bot Avatar" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
    </div>
  </div>
);