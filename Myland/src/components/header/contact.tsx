import { PropsWithChildren,ReactNode } from "react";

type Infosprops = PropsWithChildren<{
  infos1: string;
  infos2: string;
  icon:ReactNode;
}>;

export default function Contact({ infos1, infos2,icon }: Infosprops) {
  return (
    <>
      <div className="flex mr-4">
        <div className="flex items-center justify-start">
          <span className="text-center mr-2">
            {icon}
          </span>
          <div className="text-xs">
            <p className="text-white text-sm">{infos1}</p>
            <p className="text-gray-200 text-[10px]">{infos2}</p>
          </div>
        </div>
      </div>
    </>
  );
}
