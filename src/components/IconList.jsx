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
import { useState } from "react"
import {
    Smile,
    AlignHorizontalDistributeCenterIcon,
    AlignHorizontalDistributeEndIcon,
    AlignHorizontalDistributeStartIcon,
    AlignHorizontalJustifyEndIcon,
    AlignHorizontalJustifyStartIcon,
    AlignHorizontalSpaceAroundIcon,
    AlignHorizontalSpaceBetweenIcon,
    AlignVerticalDistributeCenterIcon,
    AlignVerticalDistributeEndIcon,
    AlignVerticalDistributeStartIcon,
    AlignVerticalJustifyCenterIcon,
    AlignVerticalJustifyStartIcon,
    AlignVerticalSpaceAroundIcon,
    AlignVerticalSpaceBetweenIcon,
    ArrowDownRightFromCircleIcon,
    ArrowDownRightFromSquareIcon,
    AxeIcon,
    BanIcon,
    BedIcon,
    BotIcon,
    BoxIcon,
    BugIcon,
    BusIcon,
    CogIcon,
    CpuIcon,
    DnaIcon,
    DogIcon,
    DotIcon,
    EarIcon,
    EggIcon,
    EyeIcon,
    FanIcon,
    GemIcon,
    GitPullRequestCreateArrowIcon,
    HamIcon,
    HopIcon,
    KeyIcon,
    LucideInspectionPanel,
    LucidePhoneIncoming,
    MapIcon,
    MehIcon,
    MicIcon,
    MousePointerSquareDashedIcon,
    NfcIcon,
    PiIcon,
    ScissorsSquareDashedBottomIcon,
    SquareBottomDashedScissorsIcon,
    SquareDashedMousePointerIcon,
    TvIcon,
} from "lucide-react";


const icons = {
    AlignHorizontalDistributeCenterIcon,
    AlignHorizontalDistributeEndIcon,
    AlignHorizontalDistributeStartIcon,
    AlignHorizontalJustifyEndIcon,
    AlignHorizontalJustifyStartIcon,
    AlignHorizontalSpaceAroundIcon,
    AlignHorizontalSpaceBetweenIcon,
    AlignVerticalDistributeCenterIcon,
    AlignVerticalDistributeEndIcon,
    AlignVerticalDistributeStartIcon,
    AlignVerticalJustifyCenterIcon,
    AlignVerticalJustifyStartIcon,
    AlignVerticalSpaceAroundIcon,
    AlignVerticalSpaceBetweenIcon,
    ArrowDownRightFromCircleIcon,
    ArrowDownRightFromSquareIcon,
    AxeIcon,
    BanIcon,
    BedIcon,
    BotIcon,
    BoxIcon,
    BugIcon,
    BusIcon,
    CogIcon,
    CpuIcon,
    DnaIcon,
    DogIcon,
    DotIcon,
    EarIcon,
    EggIcon,
    EyeIcon,
    FanIcon,
    GemIcon,
    GitPullRequestCreateArrowIcon,
    HamIcon,
    HopIcon,
    KeyIcon,
    LucideInspectionPanel,
    LucidePhoneIncoming,
    MapIcon,
    MehIcon,
    MicIcon,
    MousePointerSquareDashedIcon,
    NfcIcon,
    PiIcon,
    ScissorsSquareDashedBottomIcon,
    SquareBottomDashedScissorsIcon,
    SquareDashedMousePointerIcon,
    TvIcon,
};


const CustomIcon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
        return null;
    }
    return <LucidIcon color={color} size={size} />;
}

const IconList = ({ selectedIcon }) => {
    const iconList = [
        "AlignHorizontalDistributeCenterIcon",
        "AlignHorizontalDistributeStartIcon",
        "AlignHorizontalDistributeEndIcon",
        "AlignHorizontalJustifyEndIcon",
        "AlignHorizontalJustifyStartIcon",
        "AlignHorizontalSpaceAroundIcon",
        "AlignHorizontalSpaceBetweenIcon",
        "AlignVerticalDistributeCenterIcon",
        "AlignVerticalDistributeEndIcon",
        "AlignVerticalDistributeStartIcon",
        "AlignVerticalJustifyCenterIcon",
        "AlignVerticalJustifyStartIcon",
        "AlignVerticalSpaceAroundIcon",
        "AlignVerticalSpaceBetweenIcon",
        "ArrowDownRightFromCircleIcon",
        "ArrowDownRightFromSquareIcon",
        "AxeIcon",
        "BanIcon",
        "BedIcon",
        "BotIcon",
        "BoxIcon",
        "BugIcon",
        "BusIcon",
        "CogIcon",
        "CpuIcon",
        "DnaIcon",
        "DogIcon",
        "DotIcon",
        "EarIcon",
        "EggIcon",
        "EyeIcon",
        "FanIcon",
        "GemIcon",
        "GitPullRequestCreateArrowIcon",
        "HamIcon",
        "HopIcon",
        "KeyIcon",
        "LucideInspectionPanel",
        "LucidePhoneIncoming",
        "MapIcon",
        "MehIcon",
        "MicIcon",
        "MousePointerSquareDashedIcon",
        "NfcIcon",
        "PiIcon",
        "ScissorsSquareDashedBottomIcon",
        "SquareBottomDashedScissorsIcon",
        "SquareDashedMousePointerIcon",
        "TvIcon",
    ];

    const [openDialog, setOpenDialog] = useState(false);

    return (
        <div>
            <div>
                <label>Icon</label>
                <div onClick={() => setOpenDialog(true)} className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] flex items-center justify-center my-2"><Smile /></div>
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Pick Your Favorite Icon</DialogTitle>
                        <DialogDescription>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                                {iconList.map((icon, index) => (
                                    <div className="border p-3 flex rounded-sm items-center justify-center cursor-pointer" 
                                    onClick={() => { selectedIcon(icon); setOpenDialog(false) }} key={index}>
                                        <CustomIcon name={icon} color={'#000'} size={20} />
                                    </div>
                                ))}
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default IconList;
