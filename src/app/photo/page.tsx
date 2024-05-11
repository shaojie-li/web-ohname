/**
 * @description 请添加Page组件的描述和注释!!!
 * @date 创建时间 2024-05-11 12:00
 */

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { photos } from "./_photos";

const Page: React.FC = () => {
    return (
        <div className="">
            {photos.map(({ id, src }) => (
                <Link key={id} href={`/photo/${id}`}>
                    <Image width={100} height={100} src={src} alt="" />
                </Link>
            ))}
        </div>
    );
};

export default Page;
