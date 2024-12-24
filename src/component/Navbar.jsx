import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/member'>會員中心</Link>
                </li>
                <li>
                    <Link to='/qa'>常見問題</Link>
                </li>
                <li>
                    <Link to='/try'>嘗試</Link>
                </li>
            </ul>
        </div>
    )
}