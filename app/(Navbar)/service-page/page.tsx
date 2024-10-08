import css from "./service.module.css"
import Link from "next/link"
export function Navigation() {
    return (
        <div>
            <div className={css.container}>
                <ul>
                    <li><Link href="/service-page/product">PAYMENTS</Link></li>
                </ul>
            </div>

            <br /><br />

        </div>
    )
}

