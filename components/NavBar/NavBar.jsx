import Link from "next/link";

export const NavBar = () => {
    return (
        <>
            <nav>
                <h1>NavBar-Page-Esclusive</h1>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/About">About</Link>
                    </li>
                    <li>
                        <Link href="/Login">Login</Link>
                    </li>
                    <li>
                        <a href="/admin">Admin</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}