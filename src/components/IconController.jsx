/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Smile } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { useContext, useEffect, useState } from "react"
import ColorPickerController from "./ColorPickerController"
import { UpdateStorageContext } from "@/context/UpdateStorageContext"

const IconController = () => {
  let storageValue;
  try {
    storageValue = JSON.parse(localStorage.getItem('value'));
  } catch (error) {
    console.error('Error parsing localStorage value:', error);
    storageValue = {};
  }

  // eslint-disable-next-line no-unused-vars
  const [size, setSize] = useState(storageValue?storageValue?.iconsSize:280)
  const [rotate, setRotate] = useState(storageValue?storageValue?.iconRotate:0)
  // eslint-disable-next-line no-unused-vars
  const [color, setColor] = useState(storageValue?storageValue?.iconColor:'#fff')
  
  const {updateStorage,setUpdateStorage} = useContext(UpdateStorageContext)

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconsSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: 'Smile'
    }
    setUpdateStorage(updatedValue)
    localStorage.setItem('value', JSON.stringify(updatedValue))
  }, [size, rotate, color, storageValue])

  return (
    <div>
      <div>
        <label>Icon</label>
        <div className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] flex items-center justify-center my-2"><Smile /></div>
        <div className="p-2">
          <label className="p-2 flex justify-between items-center">Size <span>{size} px</span> </label>
          <Slider defaultValue={[size]} max={512} step={1} onValueChange={(event) => setSize(event[0])} />
        </div>
        <div className="p-2">
          <label className="p-2 flex justify-between items-center">Rotate <span>{rotate} ° </span> </label>
          <Slider defaultValue={[rotate]} max={360} step={1} onValueChange={(event) => setRotate(event[0])} />
        </div>
        <div className="p-2">
          <label className="p-2 flex justify-between items-center">Icon color</label>
          <ColorPickerController hideController={true} selectedColor={(color) => setColor(color)} />
        </div>
      </div>
    </div>
  )
}

export default IconController