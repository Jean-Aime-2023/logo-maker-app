/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { iconList } from "@/constants/icons"
import { AlignHorizontalDistributeCenterIcon, Smile, icons } from "lucide-react"
import { useState } from "react"



const IconList = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const Icon = ({ name, color, size }) => {
        const LucidIcon = icons[name]
        if (!LucidIcon) {
            return;
        }
        return <LucidIcon color={color} size={size} />
    }
    return (
        <div>
            <div>
                <label>Icon</label>
                <div onClick={() => setOpenDialog(true)} className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] flex items-center justify-center my-2"><Smile /></div>
            </div>
            <Dialog open={openDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Pick Your Favorite Icon</DialogTitle>
                        <DialogDescription>
                            <div>
                                {iconList.map((icon, index) => (
                                    <div key={index}>
                                       <Icon name={icon} color={'#000'} size={20} />
                                    </div>
                                ))}
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default IconList