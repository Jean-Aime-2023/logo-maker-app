import { Button } from "./ui/button"

const Header = () => {
  return (
    <div className="p-4 shadow-sm border flex justify-between w-screen items-center">
        <img src="/logo.svg" alt="" />
        <Button>Dowload</Button>
    </div>
  )
}

export default Header