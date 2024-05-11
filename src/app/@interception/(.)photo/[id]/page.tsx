/**
 * @description 请添加Page组件的描述和注释!!!
 * @date 创建时间 2024-05-11 10:24
 */

import React from "react";
import Image from "next/image";
import { photos } from "@/app/photo/_photos";

interface Props {
    params: {
        id: string;
    };
}

const Page: React.FC<Props> = props => {
    const {
        params: { id },
    } = props;
    const photo = photos.find(p => p.id === id)!;

    return (
        <div
            className="border border-blue-400 border-solid p-4 min-h-[300px] min-w-[300px] flex flex-col justify-center items-center"
            style={{
                position: "fixed",
                left: "50%",
                top: "50%",
                transform: "translate3d(-50%, -50%, 0)",
            }}
        >
            <h2 className="mb-2 block">图片ID {id}</h2>
            <Image width={200} height={200} src={photo.src} alt="" />
        </div>
    );
};

export default Page;
