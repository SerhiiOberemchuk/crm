import Image from 'next/image';
import SideBarItem from './sidebar-item';

export interface SideBarProms {}

export default function SideBar({}: SideBarProms) {
  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Image
          className="py-8 mb-11 mx-auto"
          alt="logo"
          src="/icons/logo.svg"
          width={122}
          height={25}
        />
        <ul className="space-y-7">
          <SideBarItem
            pathname="/dashboard"
            src="/icons/squares.svg"
            alt="dashboard icon"
          >
            Dashboard
          </SideBarItem>
          <SideBarItem
            pathname="/companies"
            src="/icons/briefcase.svg"
            alt="companies icon"
          >
            Companies
          </SideBarItem>
          <button className="flex items-center gap-2 p-6 mt-auto mx-auto">
            <Image
              width={18}
              height={18}
              src="/public/icons/arrow-left-on-rectangle.svg"
              alt="exit icon"
            />
            <span className="font-medium text-white">Exit</span>
          </button>
        </ul>
      </div>
    </aside>
  );
}
