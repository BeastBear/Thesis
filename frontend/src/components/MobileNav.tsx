import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="bg-white px-6 py-8">
        <SheetTitle>
          Welcome to MernEats.com!
        </SheetTitle>
        <Separator/>
        <SheetDescription className="flex">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold flex-1">
          Log In
        </Button>
        </SheetDescription>
        
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
