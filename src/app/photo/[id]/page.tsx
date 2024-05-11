/**
 * @description 请添加Page组件的描述和注释!!!
 * @date 创建时间 2024-05-11 10:24
 */

import React from "react";
import Image from "next/image";
import { photos } from "../_photos";

interface Props {
    params: { id: string };
}

const Page: React.FC<Props> = props => {
    const {
        params: { id },
    } = props;

    const currentImage = photos.find(item => item.id === id)!;

    return (
        <div className="flex flex-col">
            <Image width={300} height={300} src={currentImage.src} alt="" />
        </div>
    );
};

export default Page;
