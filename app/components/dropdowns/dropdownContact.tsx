import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IoMdContact } from "react-icons/io";

const DropdownContact = () => {
  return (
    <div className="text-gray-700">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none group">
          <div className="flex flex-col justify-center items-center font-semibold">
            <div className="text-lg bg-clip-text text-transparent bg-gradient-to-br hover:text-sky-900 from-emerald-400 to-sky-900 rounded-full p-1">
              Contact Us
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[300px]">
          <DropdownMenuLabel>Contact</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>WhatsApp: +58 4245042502</DropdownMenuItem>
          <DropdownMenuItem>IG: @Code2Steps</DropdownMenuItem>
          <DropdownMenuItem>Email: code2steps@gmail.com</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownContact;
