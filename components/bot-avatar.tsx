import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const BotAvatar = () => {
  return (
    <Avatar className="w-8 h-8">
      <AvatarImage src="/logo.png" />
      <AvatarFallback>BOT</AvatarFallback>
    </Avatar>
  );
};
