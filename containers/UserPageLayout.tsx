import NavLink from "components/UserPage/NavLink";
import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { BiDevices } from "react-icons/bi";
import { HiDocumentReport } from "react-icons/hi";
import { FcAssistant } from "react-icons/fc";
import { useRouter } from "next/router";

export const UserPageLayout: React.FC = ({ children }) => {
    const router = useRouter();

    return (
        <div className="user-layout flex h-screen">
            <aside className="sidebar flex flex-col items-center">
                <div className="flex justify-center items-center w-full h-24 border-b border-gray-200">
                    <div
                        className="relative w-20 h-9 cursor-pointer"
                        onClick={() => router.push("/")}
                    >
                        <Image src="/aus_blue.svg" layout="fill" />
                    </div>
                </div>
                <nav className="flex flex-col w-full text-black">
                    <NavLink Icon={FcAssistant} label="SUSana" to="/user" />
                    <NavLink
                        Icon={MdDashboard}
                        label="Painel"
                        to="/user/dashboard"
                    />
                    <NavLink
                        Icon={RiMentalHealthFill}
                        label="Saúde Mental"
                        to="/user/mhealth"
                    />
                    <NavLink
                        Icon={GiHealthNormal}
                        label="Saúde Interativa"
                        to="/user/ihealth"
                    />
                    <NavLink
                        Icon={HiDocumentReport}
                        label="Histórico Clínico"
                        to="/user/records"
                    />
                    <NavLink
                        Icon={BiDevices}
                        label="Dispositivos"
                        to="/user/devices"
                    />
                </nav>
            </aside>
            <div className="user-main-layout flex-grow bg-gray-50">
                {children}
            </div>
        </div>
    );
};
