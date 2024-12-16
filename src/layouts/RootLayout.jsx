import { Outlet } from "react-router-dom";


export const RootLayout = ({ children }) => {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}