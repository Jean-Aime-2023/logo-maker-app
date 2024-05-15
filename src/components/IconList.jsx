/* eslint-disable no-unused-vars */
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Smile } from "lucide-react"
import { useState } from "react"


const IconList = () => {
    const [openDialog,setOpenDialog] = useState(false)
    return (
        <div>
            <div>
                <label>Icon</label>
                <div onClick={()=>setOpenDialog(true)} className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] flex items-center justify-center my-2"><Smile /></div>
            </div>
            <Dialog open={openDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Pick Your Favorite Icon</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default IconList