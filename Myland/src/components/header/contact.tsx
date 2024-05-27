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
        <div className="flex items-center">
          <span className="text-center pt-4 ">
            {icon}
          </span>
          <div className="text-xs text-neutral-100">
            <p>{infos1}</p>
            <p>{infos2}</p>
          </div>
        </div>
      </div>
    </>
  );
}
