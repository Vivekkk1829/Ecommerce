import { Button } from "../ui/button"
import { LogOut, TextAlignJustify } from "lucide-react"

function AdminHeader({setOpen}) {
    return(
        <header className="flex items-center justify-between px-4 py-3 bg-background border-bottom ">
           <Button onClick={()=>setOpen(true)} className='lg:hidden sm:block'>
             <TextAlignJustify />
             <span className="sr-only">Toggle Menu</span>
           </Button>
           <div className="flex flex-1 justify-end">
            <Button className="inline-flex gap-2 ttems-centre  rounded-md px-4 py-2 text-sm font-medium shadow bg-black text-white">
                <LogOut /> Logout
            </Button>
           </div>
        </header>
    )
}

export default AdminHeader