import { Download } from "lucide-react"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <div className="p-4 shadow-sm border flex justify-between w-screen items-center">
        <img src="/logo.svg" alt="" />
        <Button className="flex gap-2 items-center"> <Download className="h-4 w-4"/> Dowload</Button>
    </div>
  )
}

export default Header