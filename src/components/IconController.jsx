/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Smile } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { useContext, useEffect, useState } from "react"
import ColorPickerController from "./ColorPickerController"
import { UpdateStorageContext } from "@/context/UpdateStorageContext"
import IconList from "./IconList"

const IconController = () => {
  let storageValue;
  try {
    storageValue = JSON.parse(localStorage.getItem('value'));
  } catch (error) {
    console.error('Error parsing localStorage value:', error);
    storageValue = {};
  }

  const [size, setSize] = useState(storageValue ? storageValue.iconsSize : 280)
  const [rotate, setRotate] = useState(storageValue ? storageValue.iconRotate : 0)
  const [color, setColor] = useState(storageValue ? storageValue.iconColor : '#fff')
  const [icon, setIcon] = useState(storageValue ? storageValue.icon : 'Smile')
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext)

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconsSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: icon
    }
    setUpdateStorage(updatedValue)
    localStorage.setItem('value', JSON.stringify(updatedValue))
  }, [size, rotate, color, storageValue, icon])


  return (
    <div>
      <div>
        <IconList selectedIcon={(icon) => setIcon(icon)} />
        <div className="p-2">
          <label className="p-2 flex justify-between items-center">Size <span>{size} px</span> </label>
          <Slider defaultValue={[size]} max={512} step={1} onValueChange={(event) => setSize(event[0])} />
        </div>
        <div className="p-2">
          <label className="p-2 flex justify-between items-center">Rotate <span>{rotate} deg</span> </label>
          <Slider defaultValue={[rotate]} max={360} step={1} onValueChange={(event) => setRotate(event[0])} />
        </div>
        <div className="p-2">
          <label className="p-2 flex justify-between items-center">Color <span>{color}</span></label>
          <ColorPickerController color={color} setColor={setColor} />
        </div>
      </div>
    </div>
  )
}

export default IconController;
