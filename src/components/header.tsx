/**
 * @description 请添加Header组件的描述和注释!!!
 * @date 创建时间 2024-05-10 22:24
 */

import React from "react";

const getMockStaticData = () => {
    return new Promise<{ name: string }>(resolve => {
        setTimeout(() => {
            resolve({ name: "sj" });
        }, 1000);
    });
};

const Header: React.FC = async () => {
    const staticData = await getMockStaticData();

    return (
        <div className="w-full flex items-center justify-center bg-blue-700 px-6 py-3 justify-between">
            Header <div>{staticData.name}</div>
        </div>
    );
};

export default Header;
