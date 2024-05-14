import { Image, PencilRuler, Shield } from "lucide-react"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
const SideNav = ({selectedIndex}) => {
    const menuList = [
        {
            id: 1,
            name: 'Icon',
            icon: PencilRuler
        },
        {
            id: 1,
            name: 'Background',
            icon: Image
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: Shield
        },
    ]

    const [activeIndex,setActiveIndex] = useState(0);
    return (
        <div className="border shadow-sm h-screen">
            <div>
                {menuList.map((menu, index) => (
                    <h2 onClick={()=>{setActiveIndex(index);
                        selectedIndex(index)}} key={index} className={`p-3 text-lg flex items-center gap-2 px-7 text-gray-500 my-2 cursor-pointer hover:bg-primary hover:text-white
                     ${activeIndex == index && 'bg-primary text-white'}
                    `}>
                        <menu.icon/>
                       {menu.name}
                    </h2>
                ))}
            </div>
        </div>
    )
}

export default SideNav