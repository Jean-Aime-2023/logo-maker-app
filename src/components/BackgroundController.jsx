/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import { Slider } from "./ui/slider"
import ColorPickerController from "./ColorPickerController"
import { UpdateStorageContext } from "@/context/UpdateStorageContext"

const BackgroundController = () => {
  let storageValue;
  try {
    storageValue = JSON.parse(localStorage.getItem('value'));
  } catch (error) {
    console.error('Error parsing localStorage value:', error);
    storageValue = {};
  }

  const [rounded,setRounded] = useState(storageValue?storageValue?.bgRounded:0)
  const [padding,setPadding] = useState(storageValue?storageValue?.bgPadding:0)
  // eslint-disable-next-line no-unused-vars
  const [color,setColor] = useState(storageValue?storageValue?.bgColor:'#e84747')
  
  const {updateStorage,setUpdateStorage} = useContext(UpdateStorageContext)
  useEffect(()=>{
    const updatedValue={
      ...storageValue,
      bgRounded: rounded,
      bgPadding:padding,
      bgColor: color,
    }
    setUpdateStorage(updatedValue) 
    localStorage.setItem('value', JSON.stringify(updatedValue))
  },[color,padding,rounded]) 

  return (
    <div>
      <div className="p-2">
          <label className="p-2 flex justify-between items-center">Rounded <span>{rounded} px</span> </label>
          <Slider defaultValue={[0]} max={512} step={1} onValueChange={(event) => setRounded(event[0])} />
        </div>
      <div className="p-2">
          <label className="p-2 flex justify-between items-center">Padding <span>{padding} px</span> </label>
          <Slider defaultValue={[40]} max={100} step={1} onValueChange={(event) => setPadding(event[0])} />
        </div>
        <div className="p-2">
          <label className="p-2 flex justify-between items-center">Icon color</label>
          <ColorPickerController hideController={false} selectedColor={(color) => setColor(color)} />
        </div>
    </div>
  )
}

export default BackgroundController