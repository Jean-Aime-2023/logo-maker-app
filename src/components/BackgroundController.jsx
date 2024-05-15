import { useEffect, useState } from "react"
import { Slider } from "./ui/slider"
import ColorPickerController from "./ColorPickerController"

const BackgroundController = () => {
  const [rounded,setRounded] = useState(0)
  const [padding,setPadding] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [color,setColor] = useState('#e84747')
  let storageValue;
  try {
    storageValue = JSON.parse(localStorage.getItem('value'));
  } catch (error) {
    console.error('Error parsing localStorage value:', error);
    storageValue = {};
  }
  useEffect(()=>{
    const updateValue={
      ...storageValue,
      bgRounded: rounded,
      bgPadding:padding,
      bgColor: color,
    }

    localStorage.setItem('value', JSON.stringify(updateValue))
  },[color,padding,rounded,storageValue]) 

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