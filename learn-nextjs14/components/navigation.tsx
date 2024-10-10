import Link from "next/link";

export default function Navigation(){

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about-us">About-us</Link>
                </li>
            </ul>
        </nav>
    );

}