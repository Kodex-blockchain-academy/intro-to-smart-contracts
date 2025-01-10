
import Link from "next/link"
import Button from "./Button"
export function Navbar(){


    return(
        <>
        <nav className="flex justify-between px-20 py-6 border-b border-b-gray-600">
        <h1>Go Fund Me</h1>
        <Link href="withdraw"> Withdraw</Link>
        <Button/>
        </nav>
        </>
    )
}